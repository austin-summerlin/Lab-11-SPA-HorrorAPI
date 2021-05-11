import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {

  render() {
    return (
      <div className="Home">
        <header>
          <h2>Welcome</h2>
        </header>
        <p>
          <Link to='/movies'>See the List</Link>
        </p>
      </div>
    );
  }

}