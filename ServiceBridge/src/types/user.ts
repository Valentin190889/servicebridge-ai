export interface UserProfile {
  id: string;
  name: string;
  email: string;
  position: string;
  industry: string;
  company?: string;
  subscription: {
    package: string;
    status: 'active' | 'canceled' | 'trial';
    expiresAt: string;
  };
  settings: {
    language: string;
    region: string;
    pseudonym: string;
    darkMode: boolean;
  };
  avatarUrl?: string;
}

export type Industry = 
  | 'technology'
  | 'healthcare'
  | 'finance'
  | 'manufacturing'
  | 'retail'
  | 'education'
  | 'other';

export type Language = 'en' | 'de' | 'fr' | 'es';
export type Region = 'eu' | 'na' | 'asia' | 'other';