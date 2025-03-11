import { SpotifyTrack, AnalyticsData } from '../types';

export const processSpotifyData = (data: SpotifyTrack[]): AnalyticsData => {
  const artistPlaytime = new Map<string, number>();
  const trackPlaytime = new Map<string, number>();
  const hourlyPlaytime = new Array(24).fill(0);
  const monthlyPlaytime = new Map<string, number>();

  data.forEach(track => {
    const minutes = track.ms_played / (1000 * 60);
    
    // Artist stats
    const artist = track.master_metadata_album_artist_name;
    if (artist) {
      artistPlaytime.set(artist, (artistPlaytime.get(artist) || 0) + minutes);
    }

    // Track stats
    const trackName = track.master_metadata_track_name;
    if (trackName) {
      trackPlaytime.set(trackName, (trackPlaytime.get(trackName) || 0) + minutes);
    }

    // Hourly stats
    const hour = new Date(track.ts).getHours();
    hourlyPlaytime[hour] += minutes;

    // Monthly stats
    const month = new Date(track.ts).toLocaleString('default', { month: 'long', year: 'numeric' });
    monthlyPlaytime.set(month, (monthlyPlaytime.get(month) || 0) + minutes);
  });

  return {
    totalMinutesPlayed: Array.from(artistPlaytime.values()).reduce((a, b) => a + b, 0),
    topArtists: Array.from(artistPlaytime.entries())
      .map(([name, minutes]) => ({ name, minutes }))
      .sort((a, b) => b.minutes - a.minutes)
      .slice(0, 10),
    topTracks: Array.from(trackPlaytime.entries())
      .map(([name, minutes]) => ({ name, minutes }))
      .sort((a, b) => b.minutes - a.minutes)
      .slice(0, 10),
    listeningByHour: hourlyPlaytime.map((minutes, hour) => ({ hour, minutes })),
    monthlyTrends: Array.from(monthlyPlaytime.entries())
      .map(([month, minutes]) => ({ month, minutes }))
      .sort((a, b) => new Date(a.month).getTime() - new Date(b.month).getTime())
  };
};