import React from 'react';
// import ReactDOM from 'react-dom';
import statemachine from '../statemachine';
import routeData from '../barroute-data';
// import { Header } from '../header';

var NewRoute = React.createClass({
  getInitialState: function() {
    return statemachine.getState();
  },
  componentDidMount: function() {
    // statemachine.setMenu('def');
    // ReactDOM.render(<Header />, document.getElementById('header'));
    routeData(this.state.routeToBe.barcount, this.state.routeToBe.start)
    .then(function(good) {
      console.log(good);
    }).catch(function(bad) {
      console.error(bad);
    });
  },
  render: function() {
    return (
      <p>...</p>
    );
  }
});

var RouteForm = React.createClass({
  getInitialState: function() {
    return { start: '', barcount: 3 };
  },
  createRoute: function(event) {
    event.preventDefault();
    statemachine.updateState('routeToBe', this.state);
    window.location.assign('/#/routes/new');
  },
  changeStart: function(e) {
    this.setState({ start: e.target.value, barcount: this.state.barcount });
  },
  changeBarcount: function(e) {
    this.setState({ start: this.state.start, barcount: e.target.value });
  },
  render: function() {
    return (
      <form onSubmit={this.createRoute}>
        <label htmlFor="location">Select Starting Point:</label>
        <input className="form-control" id="location" type="text" placeholder="Use Current Location"
        onChange={this.changeStart} name="location" value={this.state.start} />
        <select className="form-control" name="barcount" onChange={this.changeBarcount} value={this.state.barcount}>
          <option value="3">Fun Run</option>
          <option value="5">5k</option>
          <option value="8">Marathon</option>
        </select>
        <button className="btn btn-primary" type="submit">Create Route</button>
      </form>
    );
  }
});

module.exports = {
  NewRoute: NewRoute,
  RouteForm: RouteForm
};
