export interface ISubscription {
    id?: string; // UUID
    name: string;
    email: string;
    location?: string | null;
    subscribed_at?: string | null; // ISO 8601 timestamp string
    address?: Record<string, string> | null; // JSONB type
    district: string; // default 'xxx'
    compound: string; // default 'xxx'
}


export interface IClientDocument {
    id: number;
    name: string;
    url: string;
    type: string;
    size: string;
    category: string;
  }
