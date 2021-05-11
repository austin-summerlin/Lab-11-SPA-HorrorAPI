import { Component } from 'react';
import './MovieForm.css';

export default class MovieForm extends Component {
  state = {
    name: '',
    genre: '',
    year: '',
    director: '',
    country: '',
    length: '',
    url: ''
  }

  componentDidMount() {
    const { movie } = this.props;
    if (!movie) { return; }

    this.setState(movie);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleChangeGenre = ({ target }) => {
    this.setState({ genre: target.value });
  }

  handleChangeYear = ({ target }) => {
    this.setState({ year: target.value });
  }

  handleChangeDirector = ({ target }) => {
    this.setState({ director: target.value });
  }

  handleChangeCountry = ({ target }) => {
    this.setState({ country: target.value });
  }

  handleChangeLength = ({ target }) => {
    this.setState({ length: target.value });
  }

  handleChangeUrl = ({ target }) => {
    this.setState({ url: target.value });
  }


  render() {
    const { name, genre, year, director, country, length, url } = this.state;
    const { movie } = this.props;

    return (
      <form className="MovieForm" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Name:</span>
            <input name='name' required placeholder="Name of Movie..."
              value={name} onChange={this.handleChangeName} />
          </label>
        </p>

        <p>
          <label>
            <span>Genre:</span>
            <select name="genre" required placeholder="Genre..."
              value={genre} onChange={this.handleChangeGenre}>
              <option value="" disabled>Genre...</option>
              <option>Giallo</option>
              <option>Slasher</option>
              <option>Supernatural</option>
              <option>Vampire</option>
              <option>Zombie</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span>Year:</span>
            <input name="year" required pattern="\d{4}"
              title="Should be a four digit year like 1999"
              placeholder="Enter a Year"
              value={year} onChange={this.handleChangeYear} />
          </label>
        </p>

        <p>
          <label>
            <span>Director:</span>
            <input name="director" required placeholder="Name of Director..."
              value={director} onChange={this.handleChangeDirector} />
          </label>
        </p>


        <p>
          <label>
            <span>Country:</span>
            <input name="country" required placeholder="Name of Country..."
              value={country} onChange={this.handleChangeCountry} />
          </label>
        </p>


        <p>
          <label>
            <span>Length:</span>
            <input name="length" required placeholder="Length of Movie..."
              value={length} onChange={this.handleChangeLength} />
l         </label>
l      l</p>

        <p>
          <label>
            <span>Movie Poster Url:</span>
            <input name="url" required placeholder="Url to Image of Movie Poster..."
              value={url} onChange={this.handleChangeUrl} />
          </label>
        </p>

        <p>
          <button>{movie ? 'Edit' : 'Add'}Movie</button>
        </p>

      </form>
    );
  }

}