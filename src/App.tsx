import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { Dashboard } from './components/Dashboard';
import { ThemeToggle } from './components/ThemeToggle';
import { processSpotifyData } from './utils/analytics';
import { SpotifyTrack, AnalyticsData } from './types';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);

  const handleFileUpload = (data: SpotifyTrack[]) => {
    const processed = processSpotifyData(data);
    setAnalyticsData(processed);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Spotify Listening Analytics
        </h1>
        
        {!analyticsData && <FileUpload onFileUpload={handleFileUpload} />}
        {analyticsData && <Dashboard data={analyticsData} />}
      </div>
    </div>
  );
}

export default App;