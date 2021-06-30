import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Style from './App.style';
import { MoviesList } from './features/movies';
import { Footer, NavigationBar } from './components';
import { MovieDetail } from './features/movies/MovieDetail';

function App() {
  return (
    <Style.App>
      <Router>
        <NavigationBar />
        <main>
          <Switch>
            <Route path="/movie/:movieId">
              <MovieDetail />
            </Route>
            <Route path="/" exact>
              <MoviesList />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </Style.App>
  );
}

export default App;
