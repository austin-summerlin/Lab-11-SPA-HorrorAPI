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

export async function addMovie(movie) {
  const response = await (await request.post(URL)).statusType('json').send(movie);
  return response.body.id;
}

export async function deleteMovie(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}

export async function updateMovie(movie) {
  const response = await (await request.put(`${URL}/${movie.id}`)).statusType('json').send(movie);
  return response.body;
}