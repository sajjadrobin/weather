import {action, observable, decorate} from "mobx";
import axios from "axios";

class WeatherData {
    weatherResult = {};

    setWeatherData(data) {
      this.weatherResult = data;
    }

    async getWeatherData() {
      const {data} = await axios.get("/forecast/adcfa1d88f5f100567176305b1fa0758/37.8267,-122.4233");

      this.setWeatherData(data);
  }
}


decorate( WeatherData, {
  weatherResult: observable,
  setWeatherData: action
});

export default new WeatherData();