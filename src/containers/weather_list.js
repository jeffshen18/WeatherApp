import React, { Component} from 'react';
import { connect } from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    //map function takes an callback function as argument and this callback is
    //called for every element in the array

    //_.map(object, "name") takes a collection/array and returns property that we choose to extract
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp-273);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td> {name} </td>
        <td> <Chart data={temps} color="red" units="C"/> </td>
        <td> <Chart data={pressure} color="green" units="hPa" /> </td>
        <td> <Chart data={humidity} color="blue" units="%"/> </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
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
