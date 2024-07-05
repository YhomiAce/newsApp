import axios from "axios";

const apiKey = process.env.NEWS_API_KEY;
const api = axios.create({
  baseURL: "https://newsapi.org/v2",
});

// getNewsByCategory
export async function getNewsByCategory(category: string) {
  const response = await api.get(
    `/everything?q=${category}&apiKey=${apiKey}`
  );
  return response.data;
}

//getNewsByCountry
export async function getNewsByCountry(country:string) {
  const response = await api.get(
    `/top-headlines?country=${country}&apiKey=${apiKey}`
  );
  return response.data;
}

//searchNews
export async function searchNews(query:string) {
  console.log({query});
  
  const response = await api.get(
    `/everything?q=${query}&apiKey=${apiKey}`
  );
  return response.data;
}