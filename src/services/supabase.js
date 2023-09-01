import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cdbixzvrfjadnnvpmzbr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkYml4enZyZmphZG5udnBtemJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE5MDgzMTIsImV4cCI6MjAwNzQ4NDMxMn0.6kr6z6hexE9fmu_7Y7c_GFPJuSwadqrIt_KNi3NZG48";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
