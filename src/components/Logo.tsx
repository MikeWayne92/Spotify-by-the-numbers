import React, { useState } from 'react';
import { motion } from 'framer-motion';
import wavelyticsLogo from '../assets/logos/wavelytics-logo.png';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-16 md:h-20" }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex items-center justify-center ${className}`}
      >
        <div className="text-3xl md:text-4xl font-bold text-spotify-green bg-white dark:bg-spotify-gray-medium px-6 py-3 rounded-2xl shadow-lg">
          Wavelytics
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center"
    >
      <img 
        src={wavelyticsLogo} 
        alt="Wavelytics" 
        className={`object-contain ${className}`}
        onError={handleImageError}
      />
    </motion.div>
  );
}; 