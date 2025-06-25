import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Upload, Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SimpleImageEditorProps {
  src: string;
  alt: string;
  className?: string;
  onImageChange?: (newImageUrl: string) => void;
  editable?: boolean;
}

export default function SimpleImageEditor({ 
  src, 
  alt, 
  className = "", 
  onImageChange,
  editable = false 
}: SimpleImageEditorProps) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        handleFileUpload(file);
      } else {
        toast({
          title: "Error",
          description: "Please select an image file",
          variant: "destructive",
        });
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const newImageUrl = e.target?.result as string;
      setCurrentSrc(newImageUrl);
      if (onImageChange) {
        onImageChange(newImageUrl);
      }
      setIsEditorOpen(false);
      toast({
        title: "Success",
        description: "Image updated successfully",
      });
    };
    reader.readAsDataURL(file);
  };

  const handleUrlChange = (url: string) => {
    if (url.trim()) {
      setCurrentSrc(url);
      if (onImageChange) {
        onImageChange(url);
      }
      setIsEditorOpen(false);
      toast({
        title: "Success",
        description: "Image updated successfully",
      });
    }
  };

  return (
    <div className="relative group">
      <img
        src={currentSrc}
        alt={alt}
        className={className}
      />
      
      {editable && (
        <>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
            <button
              onClick={() => setIsEditorOpen(true)}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
              title="Edit Image"
            >
              <Edit className="h-4 w-4" />
            </button>
          </div>
          
          <Dialog open={isEditorOpen} onOpenChange={setIsEditorOpen}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Edit className="h-5 w-5" />
                  Change Image
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Drag and Drop Upload */}
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                    dragActive 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950' 
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm font-medium mb-2">
                    Drag and drop an image here
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    or click to browse files
                  </p>
                  
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    Browse Files
                  </Button>
                </div>

                {/* URL Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Or enter image URL:</label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleUrlChange((e.target as HTMLInputElement).value);
                        }
                      }}
                    />
                    <Button
                      size="sm"
                      onClick={() => {
                        const input = document.querySelector('input[type="url"]') as HTMLInputElement;
                        handleUrlChange(input.value);
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}