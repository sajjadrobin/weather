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
    <div>{abc.temperatureHigh} / {abc.temperatureLow}</div>
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
            <h2>Stockholm, Sweden 5 Day Weather</h2>
            <p>2:17 pm CET</p>
            <Button type="primary" icon="printer">Print</Button>
          </div>
          <Table dataSource={dataSource} columns={columns} rowKey={"time"} />

        </div>

    )
  }
});

export default Home;