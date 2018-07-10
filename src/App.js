import React, { Component } from 'react';
import './App.css';
import renderChart from './Query/Chart';
import DropDown from './Mutation/Dropdowns';
import mapping from './helpers';

class App extends Component {
  state = {
    place: 'times-square',
    date: '2016-01-01',
    initialized: false,
  }

  stateChangeCallback = (date, place) => {
    this.setState({
      date, place
    })
  }

  componentDidUpdate() {
    if (!this.state.initialized) {
      this.setState({
        ...this.state,
        initialized: true
      })
    }
  }

  render() {
    const { place, date, initialized } = this.state;
    return (
      <div className="App">
        <div className="DropDowns">
          <DropDown
            date={this.state.date}
            place={this.state.place}
            callback={this.stateChangeCallback}
          />
        </div>
        {
          (!initialized) ?
          "Please choose a date and place" :
          renderChart(
            mapping[place.toLowerCase()].latitude,
            mapping[place.toLowerCase()].longitude,
            date
          )
        }
      </div>
    );
  }
}

export default App;
