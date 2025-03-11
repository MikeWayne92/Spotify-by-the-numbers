export interface SpotifyTrack {
  ts: string;
  username: string;
  platform: string;
  ms_played: number;
  conn_country: string;
  ip_addr_decrypted: string;
  user_agent_decrypted: string;
  master_metadata_track_name: string;
  master_metadata_album_artist_name: string;
  master_metadata_album_album_name: string;
  spotify_track_uri: string;
  episode_name: string | null;
  episode_show_name: string | null;
  reason_start: string;
  reason_end: string;
  shuffle: boolean;
  skipped: boolean | null;
  offline: boolean;
  offline_timestamp: number;
  incognito_mode: boolean;
}

export interface AnalyticsData {
  totalMinutesPlayed: number;
  topArtists: { name: string; minutes: number }[];
  topTracks: { name: string; minutes: number }[];
  listeningByHour: { hour: number; minutes: number }[];
  monthlyTrends: { month: string; minutes: number }[];
}