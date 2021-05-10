import { Component } from 'react';
import './movieItem.css';

export default class movieItem extends Component {

  render() {
    const movie = this.props.movie;

    return (
      <li className="movieItem">
        <h2>{movie.name}</h2>
        <img src={movie.url} alt={movie.name} />
      </li>
    );
  }

}