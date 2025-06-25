import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Upload, Edit, Image as ImageIcon, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WebsiteImage {
  id: string;
  name: string;
  currentUrl: string;
  location: string;
  description: string;
}

// Common images used throughout your website
const websiteImages: WebsiteImage[] = [
  {
    id: 'hero-bg',
    name: 'Hero Background',
    currentUrl: '/api/placeholder/1200/600',
    location: 'Home Page Hero Section',
    description: 'Main background image behind "Solving Business Puzzles" text'
  },
  {
    id: 'logo',
    name: 'Company Logo',
    currentUrl: '/api/placeholder/200/60',
    location: 'Navigation & Footer',
    description: 'Main Puzzle Intel logo used in header and footer'
  },
  {
    id: 'safari-friend-logo',
    name: 'Safari Friend Logo',
    currentUrl: '/api/placeholder/300/200',
    location: 'AI Intelligence Page',
    description: 'Safari Friend project logo'
  },
  {
    id: 'wise-wallet-logo',
    name: 'WiseWallet Logo',
    currentUrl: '/api/placeholder/300/200',
    location: 'AI Intelligence Page',
    description: 'WiseWallet project logo'
  },
  {
    id: 'team-photo',
    name: 'Team Photo',
    currentUrl: '/api/placeholder/400/300',
    location: 'About Section',
    description: 'Company team photo'
  },
  {
    id: 'office-photo',
    name: 'Office Photo',
    currentUrl: '/api/placeholder/400/300',
    location: 'Contact Section',
    description: 'Office or workspace image'
  }
];

interface WebsiteImageManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WebsiteImageManager({ isOpen, onClose }: WebsiteImageManagerProps) {
  const [selectedImage, setSelectedImage] = useState<WebsiteImage | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [images, setImages] = useState<WebsiteImage[]>(websiteImages);
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
    
    if (e.dataTransfer.files && e.dataTransfer.files[0] && selectedImage) {
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
    if (e.target.files && e.target.files[0] && selectedImage) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const newImageUrl = e.target?.result as string;
      updateImageUrl(selectedImage!.id, newImageUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleUrlChange = (url: string) => {
    if (url.trim() && selectedImage) {
      updateImageUrl(selectedImage.id, url);
    }
  };

  const updateImageUrl = (imageId: string, newUrl: string) => {
    setImages(prev => prev.map(img => 
      img.id === imageId ? { ...img, currentUrl: newUrl } : img
    ));
    
    // Save to localStorage for persistence across sessions
    localStorage.setItem(`website-image-${imageId}`, newUrl);
    
    setSelectedImage(null);
    toast({
      title: "Success",
      description: "Image updated successfully! Changes will be visible after page refresh.",
    });
  };

  const loadSavedImages = () => {
    setImages(prev => prev.map(img => {
      const savedUrl = localStorage.getItem(`website-image-${img.id}`);
      return savedUrl ? { ...img, currentUrl: savedUrl } : img;
    }));
  };

  React.useEffect(() => {
    if (isOpen) {
      loadSavedImages();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Website Image Manager
          </DialogTitle>
          <p className="text-sm text-gray-600">
            Manage and update images throughout your website. Changes will be visible after refreshing the page.
          </p>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto">
          {/* Image List */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Website Images</h3>
            
            <div className="space-y-3">
              {images.map((image) => (
                <Card 
                  key={image.id} 
                  className={`cursor-pointer transition-all ${
                    selectedImage?.id === image.id ? 'ring-2 ring-blue-500' : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={image.currentUrl}
                          alt={image.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{image.name}</h4>
                        <p className="text-sm text-gray-600">{image.location}</p>
                        <p className="text-xs text-gray-500 mt-1">{image.description}</p>
                      </div>
                      <Edit className="h-4 w-4 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image Editor */}
          <div className="space-y-4">
            {selectedImage ? (
              <>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Edit: {selectedImage.name}</h3>
                  <p className="text-sm text-gray-600">{selectedImage.description}</p>
                </div>

                {/* Current Image Preview */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Current Image:</label>
                  <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={selectedImage.currentUrl}
                      alt={selectedImage.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Upload New Image */}
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
                    Drag and drop a new image here
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
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
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
                      Update
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <ImageIcon className="mx-auto h-12 w-12 mb-4" />
                <p>Select an image from the left to edit it</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}