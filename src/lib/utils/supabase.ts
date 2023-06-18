
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://jrskeyrnctemyrmgjohy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impyc2tleXJuY3RlbXlybWdqb2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxMDIxODQsImV4cCI6MjAwMjY3ODE4NH0.BBUQRgKeg6nH954D4oveXBkT37EmmY9A5EeTJnXN7eA')

export default supabase;