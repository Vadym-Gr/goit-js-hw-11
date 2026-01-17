import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "54245063-5ddb3a432d77d0c79a171b26b";

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  });

  return response.data;
}