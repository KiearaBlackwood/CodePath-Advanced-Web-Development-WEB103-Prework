import { createClient } from '@supabase/supabase-js';
const URL = 'https://ifgbigfjxjcrckjsgckw.supabase.co'; 
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmZ2JpZ2ZqeGpjcmNranNnY2t3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3MjU2MzgsImV4cCI6MjA4MzMwMTYzOH0.1fU-0NaU8-4iPBi7wxOMFGfU3NwxE2BnswUyCsrJtfg';
export const supabase = createClient(URL, API_KEY);