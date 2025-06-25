import React, { useState } from 'react';
import { Edit } from 'lucide-react';
import ImageManager from './image-manager';
import { useToast } from '@/hooks/use-toast';

interface EditableImageProps {
  src: string;
  alt: string;
  className?: string;
  imageId?: string;
  onImageChange?: (newImageUrl: string) => void;
  editable?: boolean;
}

export default function EditableImage({ 
  src, 
  alt, 
  className = "", 
  imageId,
  onImageChange,
  editable = false 
}: EditableImageProps) {
  const [isImageManagerOpen, setIsImageManagerOpen] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const { toast } = useToast();

  const handleImageSelect = (newImageUrl: string) => {
    setCurrentSrc(newImageUrl);
    if (onImageChange) {
      onImageChange(newImageUrl);
    }
    toast({
      title: "Success",
      description: "Image updated successfully",
    });
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
              onClick={() => setIsImageManagerOpen(true)}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
              title="Edit Image"
            >
              <Edit className="h-4 w-4" />
            </button>
          </div>
          
          <ImageManager
            isOpen={isImageManagerOpen}
            onClose={() => setIsImageManagerOpen(false)}
            currentImageId={imageId}
            onImageSelect={handleImageSelect}
          />
        </>
      )}
    </div>
  );
}