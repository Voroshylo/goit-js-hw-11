const API_KEY = '44071791-e24b31a34b7a75e1ae02e9c2e';
const BASE_URL = 'http://pixabay.com/api/';

export async function fetchImages(query) {
  const response = await fetch('${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true');
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return response.json();
}