import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create Supabase client only if credentials are provided
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Helper functions for database operations

/**
 * Submit a contact form
 * @param {Object} formData - Contact form data
 * @returns {Promise} Supabase response
 */
export const submitContactForm = async (formData) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        created_at: new Date().toISOString()
      }
    ])
    .select()

  if (error) throw error
  return data
}

/**
 * Get all sponsors
 * @returns {Promise} Array of sponsors
 */
export const getSponsors = async () => {
  const { data, error } = await supabase
    .from('sponsors')
    .select('*')
    .order('tier', { ascending: true })

  if (error) throw error
  return data
}

/**
 * Get all team members
 * @returns {Promise} Array of team members
 */
export const getTeamMembers = async () => {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('order', { ascending: true })

  if (error) throw error
  return data
}

/**
 * Get all contact submissions (admin only)
 * @returns {Promise} Array of contact submissions
 */
export const getContactSubmissions = async () => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

/**
 * Get all blog posts
 * @returns {Promise} Array of blog posts
 */
export const getBlogPosts = async () => {
  // If Supabase is not configured, throw error to trigger fallback
  if (!supabase) {
    throw new Error('Supabase not configured')
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

/**
 * Upload image to Supabase storage
 * @param {File} file - Image file
 * @param {string} bucket - Storage bucket name
 * @param {string} path - File path in bucket
 * @returns {Promise} Public URL of uploaded image
 */
export const uploadImage = async (file, bucket, path) => {
  const { data, error} = await supabase.storage
    .from(bucket)
    .upload(path, file)

  if (error) throw error

  const { data: { publicUrl } } = supabase.storage
    .from(bucket)
    .getPublicUrl(path)

  return publicUrl
}

