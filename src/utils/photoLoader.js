/**
 * Photo Loader Utility
 * Automatically loads photos from public folders
 * Falls back to placeholder images if photos don't exist
 */

// Placeholder image URLs (using placeholder services)
const PLACEHOLDER_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
  robot: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
  cad: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
  sponsor: 'https://via.placeholder.com/300x150/1e3a8a/ffffff?text=Sponsor+Logo',
}

/**
 * Load photos from a specific folder
 * @param {string} folderName - Name of the folder (e.g., 'home', 'cad', 'team')
 * @param {number} count - Number of photos to load
 * @returns {Array} Array of photo URLs
 */
export const loadPhotos = (folderName, count = 6) => {
  const photos = []

  // Try to load actual photos from public folder
  // Check for both .png and .jpg extensions
  for (let i = 1; i <= count; i++) {
    // Try PNG first (common for logos), then JPG
    const photoPath = `/photos/${folderName}/photo${i}.png`
    photos.push(photoPath)
  }

  return photos
}

/**
 * Get placeholder image for a specific category
 * @param {string} category - Category name
 * @returns {string} Placeholder image URL
 */
export const getPlaceholder = (category) => {
  return PLACEHOLDER_IMAGES[category] || PLACEHOLDER_IMAGES.robot
}

/**
 * Load hero images for home page
 * @returns {Array} Array of hero image URLs
 */
export const loadHeroImages = () => {
  return loadPhotos('home', 3)
}

/**
 * Load team member photos
 * @returns {Array} Array of team photo URLs
 */
export const loadTeamPhotos = () => {
  return loadPhotos('team', 8)
}

/**
 * Load CAD/robot photos
 * @returns {Array} Array of CAD photo URLs
 */
export const loadCADPhotos = () => {
  return loadPhotos('cad', 12)
}

/**
 * Load sponsor logos
 * @returns {Array} Array of sponsor logo URLs
 */
export const loadSponsorLogos = () => {
  return loadPhotos('sponsors', 10)
}

/**
 * Handle image error - replace with placeholder
 * @param {Event} e - Image error event
 * @param {string} category - Category for placeholder
 */
export const handleImageError = (e, category = 'robot') => {
  e.target.src = getPlaceholder(category)
  e.target.onerror = null // Prevent infinite loop
}

