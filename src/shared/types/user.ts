export interface UserProfile {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  joinedAt: string; // ISO Date string
}

export interface UpdateProfileDTO {
  username: string;
  email: string;
  password?: string;
}
