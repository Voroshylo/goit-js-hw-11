const API_KEY = 'YOUR_PIXABAY_API_KEY';
const BASE_URL = 'http://pixabay.com/api/';

export async function fetchImages(query) {
  const response = await fetch('${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true');
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return response.json();
}