import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function updateReviews() {
  const placeId = process.env.GOOGLE_PLACES_API_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.error("Missing GOOGLE_PLACES_API_KEY environment variable.");
    process.exit(1);
  }

  // Load fallback reviews safely from the root-level data/ folder
  let fallbackReviews = [];
  try {
    const fallbackPath = path.join(__dirname, '../data/fallback-reviews.json');
    fallbackReviews = JSON.parse(fs.readFileSync(fallbackPath, 'utf8'));
  } catch (err) {
    console.warn("Could not load fallback reviews file, defaulting to empty array.");
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,displayName'
      }
    });

    const data = await response.json();

    // Compile into clean JSON structure using the external file data for topReviews
    const output = {
      averageRating: data.rating || 5.0,
      totalReviews: data.userRatingCount || 16,
      lastUpdated: new Date().toISOString(),
      topReviews: fallbackReviews
    };

    // Output path pointing to your public folder
    const filePath = path.join(__dirname, '../public/reviews.json');
    fs.writeFileSync(filePath, JSON.stringify(output, null, 2));
    console.log("Successfully generated public/reviews.json!");
  } catch (error) {
    console.error("Error fetching Google Places data:", error);
    process.exit(1);
  }
}

updateReviews();