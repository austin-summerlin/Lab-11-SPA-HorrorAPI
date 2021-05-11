import { Component } from 'react';
import MovieForm from '../movie-edit/MovieForm';
import { addMovie } from '../utils/movies-api';
import './MovieAddPage.css';

export default class MovieAddPage extends Component {
  state = {
    loading: false
  }

  handleAdd = async movie => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      const id = await addMovie(movie);
      history.push(`/movies/${id}`);
    }
    catch (err) {
      console.log('EROOR', err.message);
    }
    finally {
      this.setState({ loading: false });
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