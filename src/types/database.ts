export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserSettings {
  user_id: string;
  notification_email: boolean;
  theme: 'light' | 'dark';
  created_at: string;
  updated_at: string;
}