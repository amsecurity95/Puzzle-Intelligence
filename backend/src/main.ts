import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors({
      origin: [
        'https://billstracker.online',
        'http://localhost:8080',
        'http://localhost:3000',
        'http://192.168.0.102:8080',
      ],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    });

    const port = process.env.PORT || 3000;
    await app.listen(port, '0.0.0.0');
    console.log(`🚀 Server running on http://localhost:${port}`);
    console.log(`📱 Access from phone: http://192.168.0.102:${port}`);
  } catch (error) {
    console.error('❌ Error starting server:', error.message);
    if (error.message.includes('ECONNREFUSED') || error.message.includes('connect')) {
      console.error('💡 Database connection failed. Make sure:');
      console.error('   1. You have a public Railway database URL (not .internal)');
      console.error('   2. Or set up a local PostgreSQL database');
      console.error('   3. Set DATABASE_URL environment variable');
    }
    process.exit(1);
  }
}
bootstrap();

