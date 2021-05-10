import { Component } from 'react';
import movieList from './movieList';
import './moviesPage.css';

export default class moviesPage extends Component {
  state = {
    movies: []
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="moviesPage">
        <h2>List of Movies</h2>
        <movieList movies={movies} />
      </div>
    );
  }

}