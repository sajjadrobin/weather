import React, {Component} from "react";
import {toJS} from "mobx/lib/mobx";
import {observer} from "mobx-react";
import moment from "moment";
import {Link} from "react-router-dom";
import {Button, Table} from "antd";

import WeatherData from "../store/weather-data";




const columns = [{
  title: 'Day',
  key: 'time',
  render: data => (
    <div>
      <span className={"jaKhushi"}>
        <Link to={`/day/${moment.unix(data.time).format("dddd")}`}>{moment.unix(data.time).format("dddd")}</Link></span>
      <span>{moment.unix(data.time).format("DD")}</span>
    </div>
  )

}, {
  title: 'DESCRIPTION',
  dataIndex: 'summary',
  key: 'summary',
}, {
  title: 'HIGH/LOW',
  key: 'highlow',
  render: abc => (
    <div>{abc.temperatureHigh}c / {abc.temperatureLow}c</div>
  )
}];


const Home = observer(
class Home extends Component {
  componentDidMount() {
    WeatherData.getWeatherData();
  }

  render() {

    let dataSource = [];
    const weatherData = toJS(WeatherData.weatherResult);

    if(Object.keys(weatherData).length) {
      dataSource = weatherData.daily ?  weatherData.daily.data : [];
    }
    return (

        <div className="wraper">
          <div className="table-headline">
            <h2>Daily Weather</h2>
            <p>{moment().format("[Today] HH:mm")}</p>            
          </div>
          <Table dataSource={dataSource} columns={columns} rowKey={"time"} />

        </div>

    )
  }
});

export default Home;