import React, { Component} from 'react';
import { connect } from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    //map function takes an callback function as argument and this callback is
    //called for every element in the array
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td> {name} </td>
        <td> <Chart data={temps} color="red" /> </td>
        <td> <Chart data={pressure} color="green" /> </td>
        <td> <Chart data={humidity} color="blue" /> </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

function mapStateToProps({ weather }) {
  // Whatever is returned will show up as props
  // inside of BookList
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
