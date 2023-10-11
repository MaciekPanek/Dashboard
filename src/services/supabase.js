import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qehktknjdwxqtexdeiyc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlaGt0a25qZHd4cXRleGRlaXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NjI5MzYsImV4cCI6MjAxMjQzODkzNn0.tYwnRbTqnw_786VxhPwuV3Z8s8HlBAvdRbxsiysYWEg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
