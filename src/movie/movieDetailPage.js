import { Component } from 'react';
import { getMovie } from '../utils/movies-api';
import './movieDetailPage.css';

export default class MovieDetailPage extends Component {
  state = {
    movie: null
  }

  async componentDidMount() {
    const { match } = this.props;
    const movie = await getMovie(match.params.id);
    if (movie) {
      this.setState({ movie: movie });
    }

  }

  render() {
    const { movie } = this.state;

    if (!movie) return null;

    return (
      <div className="movieDetailPage">
        <h2>Movie Detail Page</h2>
        <p>Name: {movie.name}</p>
        <p>Genre: {movie.genre}</p>
        <p>Year: {movie.year}</p>
        <p>Director: {movie.director}</p>
        <p>Country: {movie.country}</p>
        <p>Length: {movie.length}</p>
      </div>
    );
  }

}