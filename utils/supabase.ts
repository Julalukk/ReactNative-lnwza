import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://ksjjhikoeibbeexctzuy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzampoaWtvZWliYmVleGN0enV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NDIyNDEsImV4cCI6MjA4NjAxODI0MX0.D10u_W2iRaMbyQj0cfAdPbfDBm8TOzoa3F9Hk4g7An4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
