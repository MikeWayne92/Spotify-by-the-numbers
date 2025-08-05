import React from 'react';
import { Upload, Music, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface FileUploadProps {
  onFileUpload: (data: any) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          onFileUpload(data);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-spotify-gradient opacity-5 rounded-3xl blur-3xl"></div>
        
        <label className="relative flex flex-col items-center px-8 py-12 bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm rounded-3xl shadow-card dark:shadow-card-dark border border-spotify-green/20 cursor-pointer hover:shadow-spotify dark:hover:shadow-spotify-dark transition-all duration-300 group">
          {/* Upload icon with animation */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative mb-6"
          >
            <div className="w-20 h-20 bg-spotify-gradient rounded-full flex items-center justify-center shadow-spotify">
              <Upload className="w-10 h-10 text-white" />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-6 h-6 text-spotify-green-light" />
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-2 text-spotify-black dark:text-spotify-white">
              Upload Your Spotify Data
            </h3>
            <p className="text-gray-600 dark:text-spotify-gray-light mb-6 max-w-md">
              Drag and drop your Spotify data file or click to browse. Wavelytics will analyze your listening patterns and create beautiful visualizations.
            </p>
            
            {/* File type indicator */}
            <div className="flex items-center justify-center gap-2 text-sm text-spotify-green font-medium">
              <Music className="w-4 h-4" />
              <span>JSON files only</span>
            </div>
          </motion.div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-spotify-gradient opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300"></div>
          
          <input 
            type='file' 
            className="hidden" 
            accept=".json" 
            onChange={handleFileChange} 
          />
        </label>
      </motion.div>
    </div>
  );
};