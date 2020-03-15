import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePageComponent';
import MainGame from './components/MainGame/MainGameComponent';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>TIC TAC TOE</h1>
          <hr />
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path="/game">
              <MainGame />
            </Route>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
