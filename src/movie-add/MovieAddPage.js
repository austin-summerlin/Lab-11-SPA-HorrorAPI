import { Component } from 'react';
import MovieForm from '../movie-edit/MovieForm';
import { addMovie } from '../utils/movies-api';
import './MovieAddPage.css';

export default class MovieAddPage extends Component {
  state = {
    loading: false
  }

  handleAdd = async movieToAdd => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      const newMovie = await addMovie(movieToAdd);
      history.push(`/movies/${newMovie.id}`);
    }
    catch (err) {
      console.log('EROOR', err.message);
    }
  }

  render() {

    return (
      <div className="MovieAddPage">
        <h2>Add a Movie</h2>
        <MovieForm onSubmit={this.handleAdd} />
      </div>
    );
  }

}