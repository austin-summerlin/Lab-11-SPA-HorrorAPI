import { Component } from 'react';
import './movieItem.css';

export default class MovieItem extends Component {

  render() {
    const movie = this.props.movie;

    return (
      <li className="movieItem">
        <h2>{movie.name}</h2>
        <img src={movie.url} alt={movie.name} />
        <p>{movie.year}</p>
      </li>
    );
  }

}