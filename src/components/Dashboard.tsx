import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Brush } from 'recharts';
import { AnalyticsData } from '../types';
import { Clock, Music, User, Calendar } from 'lucide-react';

interface DashboardProps {
  data: AnalyticsData;
}

export const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  // Function to format minutes to have at most 2 decimal places
  const formatMinutes = (minutes: number) => {
    return Number(minutes.toFixed(2));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Total Minutes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="col-span-1 md:col-span-2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      >
        <div className="flex items-center gap-4">
          <Clock className="w-8 h-8 text-blue-500" />
          <h2 className="text-2xl font-bold">
            {formatMinutes(data.totalMinutesPlayed)} minutes listened
          </h2>
        </div>
      </motion.div>

      {/* Top Artists */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      >
        <div className="flex items-center gap-4 mb-4">
          <User className="w-6 h-6 text-purple-500" />
          <h3 className="text-xl font-bold">Top Artists</h3>
        </div>
        <div className="space-y-2">
          {data.topArtists.slice(0, 5).map((artist, index) => (
            <div key={artist.name} className="flex justify-between items-center">
              <span className="text-sm">{artist.name}</span>
              <span className="text-sm text-gray-500">
                {formatMinutes(artist.minutes)} mins
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Top Tracks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      >
        <div className="flex items-center gap-4 mb-4">
          <Music className="w-6 h-6 text-green-500" />
          <h3 className="text-xl font-bold">Top Tracks</h3>
        </div>
        <div className="space-y-2">
          {data.topTracks.slice(0, 5).map((track, index) => (
            <div key={track.name} className="flex justify-between items-center">
              <span className="text-sm">{track.name}</span>
              <span className="text-sm text-gray-500">
                {formatMinutes(track.minutes)} mins
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Listening by Hour */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="col-span-1 md:col-span-2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      >
        <div className="flex items-center gap-4 mb-4">
          <Calendar className="w-6 h-6 text-blue-500" />
          <h3 className="text-xl font-bold">Listening by Hour</h3>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.listeningByHour}>
              <defs>
                <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip formatter={(value) => [formatMinutes(value as number), 'Minutes']} />
              <Area
                type="monotone"
                dataKey="minutes"
                stroke="#3B82F6"
                fillOpacity={1}
                fill="url(#colorMinutes)"
              />
              <Brush dataKey="hour" height={30} stroke="#3B82F6" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Monthly Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="col-span-1 md:col-span-2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      >
        <div className="flex items-center gap-4 mb-4">
          <Calendar className="w-6 h-6 text-indigo-500" />
          <h3 className="text-xl font-bold">Monthly Trends</h3>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [formatMinutes(value as number), 'Minutes']} />
              <Bar dataKey="minutes" fill="#818CF8" />
              <Brush dataKey="month" height={30} stroke="#818CF8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};