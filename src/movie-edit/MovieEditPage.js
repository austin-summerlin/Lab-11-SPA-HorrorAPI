import { Component } from 'react';
import MovieForm from './MovieForm';
import { getMovie, updateMovie } from '../utils/movies-api';
import './MovieEditPage.css';

export default class MovieEditPage extends Component {
  state = {
    movie: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const movie = await getMovie(match.params.id);
      this.setState({ movie: movie });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleUpdate = async movie => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      const updatedMovie = await updateMovie(movie);
      history.push(`/movies/${updatedMovie.id}`);
    }
    catch (err) {
      console.log('ERROR', err.message);
      this.setState({ loading: false });
    }
  }

  render() {
    const { movie } = this.state;
    if (!movie) return null;
    return (
      <div className="MovieEditPage">
        <h2>Update{movie.name}</h2>
        <MovieForm movie={movie} onSubmit={this.handleUpdate} />
      </div>
    );
  }

}