import { Component } from 'react';
import MovieForm from './MovieForm';
import { addMovie } from '../utils/movies-api';
import './MovieEditPage.css';

export default class MovieEditPage extends Component {
  state = {
    error: null
  }

  handleEdit = async movie => {
    try {
      const id = await addMovie(movie);
      console.log(id);
    }
    catch (err) {
      console.log('ERROR', err.message);
    }
  }

  render() {
    return (
      <div className="MovieEditPage">
        <h2>Add a Movie</h2>
        <MovieForm onEdit={this.handleEdit} />
      </div>
    );
  }

}