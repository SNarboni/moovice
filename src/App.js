import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home"
import Weekly from "./components/Weekly"
import WeeklyBattle from "./components/WeeklyBattle"
import Popular from "./components/Popular"
import PopularBattle from "./components/PopularBattle"
import Favorites from "./components/Favorites"

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      tkt:"",
    }
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Switch>
          <Route exact path="/">
          <header>
            <p><Link to="/">home</Link></p>
            <p><Link to="/weekly">weekly</Link></p>
            <p><Link to="/weekly-battle">weekly-battle</Link></p>
            <p><Link to="/popular">popular</Link></p>
            <p><Link to="/popular-battle">popular-battle</Link></p>
            <p><Link to="/favorites">favorites</Link></p>
          </header>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

          </Route>
          <Route path="*">
            <header>
              <p><Link to="/">home</Link></p>
            </header>
          </Route>
        </Switch>
        </div>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/weekly" component={Weekly}/>
          <Route path="/weekly-battle" component={WeeklyBattle}/>
          <Route path="/popular" component={Popular}/>
          <Route path="/popular-battle" component={PopularBattle}/>
          <Route path="/favorites" component={Favorites}/>
        </Switch>        
      </BrowserRouter>
    );
  }
}

export default App;
