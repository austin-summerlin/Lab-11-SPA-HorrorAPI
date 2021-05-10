import request from 'superagent';

const URL = 'http://localhost:8001/api/movies';

export async function getMovies() {
  const response = await request(URL);
  return response.body;
}
