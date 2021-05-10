import request from 'superagent';

const URL = '/api/movies';

export async function getMovies() {
  const response = await request(URL);
  return response.body;
}
