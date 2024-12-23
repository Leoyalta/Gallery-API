const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44022963-dc7d5638f3e5caf2e9b20745b';

export default function fetchImages(q) {
  const searchParams = new URLSearchParams({
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
  return fetch(`${BASE_URL}?key=${API_KEY}&${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response}`);
    }
    return response.json();
  });
}

// const END_POINT = 'search/photos'; // Виправлено
// const options = {
//   method: 'GET',
// };

// export default function fetchImages(query = 'yellow') {
//   const searchParams = new URLSearchParams({
//     query,
//     client_id: ACCESS_TOKEN,
//     per_page: 16,
//     orientation: 'squarish',
//   });

//   return fetch(`${BASE_URL}${END_POINT}?${searchParams}`, options).then(
//     response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     }
//   );
// }
