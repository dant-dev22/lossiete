export type MediaType = 'photo' | 'video';

export interface MediaEntry {
  id: string;
  type: MediaType;
  /** ISO date string, e.g. "2024-03-12" */
  date: string;
  title: string;
  context: string;
  /** Thumbnail / poster image URL */
  thumbnail: string;
  /** Full-size image URL (for photos) */
  fullImage?: string;
  /** Video URL (for videos) */
  videoUrl?: string;
  /** Video poster frame */
  poster?: string;
  caption?: string;
}

export interface PersonDetail {
  label: string;
  value: string;
}

export interface Person {
  id: string;
  name: string;
  /** Short identifying summary shown on the homepage card */
  summary: string;
  /** Portrait image URL */
  portrait: string;
  /** Optional cover/header image for the profile page */
  cover?: string;
  /** Full descriptive summary */
  bio: string;
  /** Ordered list of personal detail rows */
  details: PersonDetail[];
  /** Multimedia timeline entries, newest-first recommended */
  timeline: MediaEntry[];
}
