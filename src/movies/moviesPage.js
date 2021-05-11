import { Component } from 'react';
import MovieList from './movieList';
import { getMovies } from '../utils/movies-api';
import './moviesPage.css';

export default class MoviesPage extends Component {
  state = {
    movies: []
  }

  async componentDidMount() {
    const movies = await getMovies();
    this.setState({ movies: movies });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="moviesPage">
        <h2>Movies</h2>
        <MovieList movies={movies} />
      </div>
    );
  }

}