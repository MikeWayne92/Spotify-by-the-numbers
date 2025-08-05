import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { Dashboard } from './components/Dashboard';
import { ThemeToggle } from './components/ThemeToggle';
import { processSpotifyData } from './utils/analytics';
import { SpotifyTrack, AnalyticsData } from './types';
import { motion } from 'framer-motion';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);

  const handleFileUpload = (data: SpotifyTrack[]) => {
    const processed = processSpotifyData(data);
    setAnalyticsData(processed);
  };

  return (
    <div className={`min-h-screen transition-all duration-300 font-spotify ${
      isDark 
        ? 'dark bg-spotify-gray-dark text-spotify-white' 
        : 'bg-gradient-to-br from-gray-50 to-gray-100 text-spotify-black'
    }`}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <img 
              src="/logos/wavelytics-logo.png" 
              alt="Wavelytics" 
              className="h-16 md:h-20 object-contain"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-spotify-gradient bg-clip-text text-transparent"
          >
            Spotify Analytics Dashboard
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-spotify-gray-light max-w-2xl mx-auto"
          >
            Visualize your listening habits with beautiful, interactive analytics powered by Wavelytics
          </motion.p>
        </div>
        
        {!analyticsData && <FileUpload onFileUpload={handleFileUpload} />}
        {analyticsData && <Dashboard data={analyticsData} />}
      </div>
    </div>
  );
}

export default App;