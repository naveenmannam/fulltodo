import React, { Component } from 'react';
import './App.css';

import Login from './containers/components/login';
import Todo from './containers/components/todos';

class App extends Component {
  render() {
    return (
      <div>
        <div className="hero has-background-primary">
          <div className="hero-body m-hero-body">
            <div className="container center">
              <h1 className="title">Todo Application</h1>
            </div>
          </div>
        </div>
        <br />
        <section className="hero">
          <div className="columns">
            <div className="column" />
            <div className="column is-quater">
              <Login />
            </div>
            <div className="column" />
          </div>
        </section>
        <br />
        <section className="hero">
          <div className="columns">
            <div className="column" />

            <div className="column is-half">
              <div className="container">
                <Todo />
              </div>
            </div>
            <div className="column" />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
