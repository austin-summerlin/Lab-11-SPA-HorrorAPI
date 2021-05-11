import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import MoviesPage from '../movies/moviesPage';
import MovieDetailPage from '../movie/movieDetailPage';
import MovieEditPage from '../movie-edit/MovieEditPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps} />
                )}
              />

              <Route path="/movies" exact={true}
                render={routerProps => (
                  <MoviesPage {...routerProps} />
                )}
              />

              <Route path="/movies/add"
                render={routerProps => (
                  <MovieEditPage {...routerProps} />
                )}
              />

              <Route path="/movies/:id"
                render={routerProps => (
                  <MovieDetailPage {...routerProps} />
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }

}

export default App;
