import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from "./app.module.css";

const App = ({authService}) => (
  <div className={styles.app}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login authService={authService} />
        </Route>
        <Route path="/maker">
          <Maker authService={authService} />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
)

export default App;
