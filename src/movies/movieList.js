import { Component } from 'react';
import MovieItem from './movieItem';
import './movieList.css';

export default class MovieList extends Component {

  render() {
    const { movies } = this.props;

    return (
      <ul className="movieList">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    );

  }

}