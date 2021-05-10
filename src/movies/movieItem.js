import { Component } from 'react';
import { Link } from 'react-router-dom';
import './movieItem.css';

export default class MovieItem extends Component {

  render() {
    const movie = this.props.movie;

    return (
      <li className="movieItem">
        <Link to={`/movies/${movie.id}`}>
          <h2>{movie.name}</h2>
          <img src={movie.url} alt={movie.name} />
          <p>{movie.year}</p>
        </Link>
      </li>
    );
  }

}