import React, { Component, lazy, Suspense } from "react";
import { Header } from "./components";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFavoris } from "./store/actions";

const LazyFilms = lazy(() =>
  import(/* webpackChunkName: 'films' */ "./features/films")
);

const LazyFavoris = lazy(() =>
  import(/* webpackChunkName: 'favoris' */ "./features/favoris")
);

class App extends Component {
  componentDidMount() {
    this.props.fetchFavoris();
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <Suspense fallback={<h1>Chargement...</h1>}>
          <Switch>
            <Route path="/films" component={LazyFilms} />
            <Route path="/favoris" component={LazyFavoris} />
            <Redirect to="/films" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(
  connect(null, {
    fetchFavoris
  })(App)
);
