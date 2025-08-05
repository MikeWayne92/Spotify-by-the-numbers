import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Brush } from 'recharts';
import { AnalyticsData } from '../types';
import { Clock, Music, User, Calendar, TrendingUp, Headphones } from 'lucide-react';

interface DashboardProps {
  data: AnalyticsData;
}

export const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  // Function to format minutes to have at most 2 decimal places
  const formatMinutes = (minutes: number) => {
    return Number(minutes.toFixed(2));
  };

  // Custom chart colors
  const chartColors = {
    primary: '#1DB954',
    secondary: '#1ED760',
    accent: '#1AA34A',
    background: '#282828',
    text: '#B3B3B3'
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
      {/* Total Minutes - Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:col-span-2 relative overflow-hidden"
      >
        <div className="bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm rounded-3xl shadow-card dark:shadow-card-dark border border-spotify-green/20 p-8">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-spotify-gradient opacity-10 rounded-full blur-2xl"></div>
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-spotify-gradient rounded-2xl flex items-center justify-center shadow-spotify">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-spotify-black dark:text-spotify-white">
                  {formatMinutes(data.totalMinutesPlayed)}
                </h2>
                <p className="text-lg text-gray-600 dark:text-spotify-gray-light">
                  minutes of music enjoyed
                </p>
              </div>
            </div>
            
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden lg:block"
            >
              <TrendingUp className="w-12 h-12 text-spotify-green" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Top Artists */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative overflow-hidden"
      >
        <div className="bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm rounded-3xl shadow-card dark:shadow-card-dark border border-spotify-green/20 p-6 h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <User className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-spotify-black dark:text-spotify-white">Top Artists</h3>
          </div>
          <div className="space-y-3">
            {data.topArtists.slice(0, 5).map((artist, index) => (
              <motion.div 
                key={artist.name} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex justify-between items-center p-3 rounded-xl bg-white/50 dark:bg-spotify-gray-medium/50 hover:bg-white/70 dark:hover:bg-spotify-gray-medium/70 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-spotify-green rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="font-medium text-spotify-black dark:text-spotify-white">{artist.name}</span>
                </div>
                <span className="text-sm font-semibold text-spotify-green">
                  {formatMinutes(artist.minutes)}m
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Top Tracks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative overflow-hidden"
      >
        <div className="bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm rounded-3xl shadow-card dark:shadow-card-dark border border-spotify-green/20 p-6 h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-spotify-black dark:text-spotify-white">Top Tracks</h3>
          </div>
          <div className="space-y-3">
            {data.topTracks.slice(0, 5).map((track, index) => (
              <motion.div 
                key={track.name} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex justify-between items-center p-3 rounded-xl bg-white/50 dark:bg-spotify-gray-medium/50 hover:bg-white/70 dark:hover:bg-spotify-gray-medium/70 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-spotify-green rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="font-medium text-spotify-black dark:text-spotify-white truncate max-w-32">{track.name}</span>
                </div>
                <span className="text-sm font-semibold text-spotify-green">
                  {formatMinutes(track.minutes)}m
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Listening by Hour */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="lg:col-span-2 relative overflow-hidden"
      >
        <div className="bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm rounded-3xl shadow-card dark:shadow-card-dark border border-spotify-green/20 p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-spotify-black dark:text-spotify-white">Listening by Hour</h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.listeningByHour}>
                <defs>
                  <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chartColors.primary} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={chartColors.primary} stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis 
                  dataKey="hour" 
                  stroke="#9CA3AF"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                  formatter={(value) => [formatMinutes(value as number), 'Minutes']}
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '12px',
                    color: '#F9FAFB'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="minutes"
                  stroke={chartColors.primary}
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorMinutes)"
                />
                <Brush 
                  dataKey="hour" 
                  height={30} 
                  stroke={chartColors.primary}
                  fill={chartColors.background}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>

      {/* Monthly Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="lg:col-span-2 relative overflow-hidden"
      >
        <div className="bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm rounded-3xl shadow-card dark:shadow-card-dark border border-spotify-green/20 p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-spotify-black dark:text-spotify-white">Monthly Trends</h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis 
                  dataKey="month" 
                  stroke="#9CA3AF"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                  formatter={(value) => [formatMinutes(value as number), 'Minutes']}
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '12px',
                    color: '#F9FAFB'
                  }}
                />
                <Bar 
                  dataKey="minutes" 
                  fill={chartColors.primary}
                  radius={[4, 4, 0, 0]}
                />
                <Brush 
                  dataKey="month" 
                  height={30} 
                  stroke={chartColors.primary}
                  fill={chartColors.background}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </div>
  );
};