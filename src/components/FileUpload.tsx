import React from 'react';
import { Upload } from 'lucide-react';
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto p-6"
    >
      <label className="flex flex-col items-center px-4 py-6 bg-white dark:bg-gray-800 text-blue-500 rounded-lg shadow-lg tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-200">
        <Upload className="w-8 h-8" />
        <span className="mt-2 text-base">Upload Spotify Data</span>
        <input type='file' className="hidden" accept=".json" onChange={handleFileChange} />
      </label>
    </motion.div>
  );
};