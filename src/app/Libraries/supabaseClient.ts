import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL2 ?? 'xxx';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEZ ?? 'xxxx';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
