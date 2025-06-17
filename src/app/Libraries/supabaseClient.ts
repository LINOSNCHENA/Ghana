import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL2!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEZ2!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
