import { Component } from 'react';
import movieItem from './movieItem';
import './movieList.css';

export default class movieList extends Component {

  render() {
    const { movies } = this.props;

    return (
      <ul className="movieList">
        {movies.map(movie => (
          <movieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    );

  }

}