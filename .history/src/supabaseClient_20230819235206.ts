
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://axszfgyaobzywjjuoktg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4c3pmZ3lhb2J6eXdqanVva3RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxNjA2MTQsImV4cCI6MjAwNzczNjYxNH0.EBANZkkApPDbxqlnY-EdzTc0GQTrX1mfkqAP3pJPlH4')