import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovie, deleteMovie } from '../utils/movies-api';
import './movieDetailPage.css';

export default class MovieDetailPage extends Component {
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

  handleDelete = async () => {
    const { movie } = this.state;
    const { history } = this.props;

    const confirmation = `Are you sure you want to delete ${movie.name}?`;
    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading: true });
      await deleteMovie(movie.id);
      history.push('/movies');
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { movie } = this.state;

    if (!movie) return null;

    return (
      <div className="movieDetailPage">
        <h2>Movie Detail Page</h2>
        <p>Name: {movie.name}</p>
        <p>Genre: {movie.genre}</p>
        <p>Year: {movie.year}</p>
        <p>Director: {movie.director}</p>
        <p>Country: {movie.country}</p>
        <p>Length: {movie.length}</p>

        <Link to={`/movies/${movie.id}/edit`}>
          Edit this Movie
        </Link>

        <button className="delete" onClick={this.handleDelete}>
          Delete This Movie
        </button>
      </div>
    );
  }
}