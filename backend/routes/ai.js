const express = require('express');
const axios = require('axios');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Generate article using OpenAI (Admin only)
router.post('/generate-article', authenticateToken, async (req, res) => {
    try {
        const { topic, wordCount, tone, additionalInstructions } = req.body;
        const apiKey = process.env.OPENAI_API_KEY;
        
        if (!apiKey) {
            return res.status(500).json({ error: 'OpenAI API key not configured' });
        }
        
        if (!topic) {
            return res.status(400).json({ error: 'Topic is required' });
        }
        
        const prompt = `You are the in-house content writer for Puzzle Intelligence, a digital marketing and technology company. Your job is to write publish-ready blog articles for the Puzzle Intelligence website based on the topic I provide.

Brand & Voice
Write for business owners, entrepreneurs, and marketing managers. Tone: professional, clear, confident, and encouraging. Avoid heavy jargon; explain concepts simply but not childishly. Whenever natural, connect the topic back to how Puzzle Intelligence can help.

Content Rules
Always create a full blog article, not an outline. Default length: ${wordCount || '900-1,300'} words, unless I clearly request shorter or longer.
Start with: A strong H1 title. An engaging introduction that explains why the topic matters.
Use Markdown-style headings: # for the main title ## for main sections ### for subsections (only when needed)
Use short paragraphs and bullet points where it helps readability.
Make the article SEO-friendly: Naturally include important keywords related to the topic. Use descriptive headings that match what people might search for.
Add a clear conclusion with a light call to action, preferably mentioning Puzzle Intelligence or our digital marketing services.

${tone ? `Tone: ${tone}` : ''}
${additionalInstructions ? `Additional Instructions: ${additionalInstructions}` : ''}

Topic: ${topic}

Output only the article content, no explanations, no meta-notes. Do not mention that you are an AI or that you are generating content.`;
        
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a professional content writer for Puzzle Intelligence.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                max_tokens: 2000,
                temperature: 0.7
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        
        const articleContent = response.data.choices[0].message.content;
        
        res.json({
            content: articleContent,
            prompt: prompt
        });
    } catch (error) {
        console.error('OpenAI API Error:', error.response?.data || error.message);
        res.status(500).json({
            error: 'Failed to generate article',
            details: error.response?.data?.error?.message || error.message
        });
    }
});

module.exports = router;

