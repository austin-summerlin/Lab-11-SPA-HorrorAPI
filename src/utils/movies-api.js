import request from 'superagent';

const URL = '/api/movies';

export async function getMovies() {
  const response = await request(URL);
  return response.body;
}

export async function getMovie(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}