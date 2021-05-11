import { Component } from 'react';
import MovieForm from './MovieForm';
import { getMovie, updateMovie } from '../utils/movies-api';
import './MovieEditPage.css';

export default class MovieEditPage extends Component {
  state = {
    movie: null,
    loading: false
  }

  async componentDidMount() {
    const { match } = this.props;

    const movie = await getMovie(match.params.id);
    if (movie) {
      this.setState({ movie: movie });
    }
    else {
      console.log('No Movie Recieved. Check ID and Network Tab');
    }
  }

  handleEdit = async movie => {

    const { history } = this.props;

    try {
      this.setState({ loading: true });
      await updateMovie(movie);
      history.push(`/movies/${movie.id}`);
    }
    catch (err) {
      console.log('ERROR', err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { movie } = this.state;
    if (!movie) return null;
    return (
      <div className="MovieEditPage">
        <h2>Edit {movie.name}</h2>
        <MovieForm movie={movie} onSubmit={this.handleEdit} />
      </div>
    );
  }

}