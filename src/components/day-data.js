import React, {Component} from "react";

class DayData extends Component {
  componentDidMount() {
    ///api call another one
  }

  render() {
    const props = this.props;
    const name = props.match.params ? props.match.params.name : "";
    return (
      <div>I am day data {name} </div>
    )
  }
}

export default DayData;