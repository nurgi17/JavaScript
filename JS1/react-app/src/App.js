import React from 'react';
import logo from './logo.svg';
import './App.css';

function ShowBanner(props) {
  if (props.time > 45) {
    return (
      <div className="rest_block">Rest time</div>
    )
  } else {
    return (
      <div className="work_block">Work time</div>
    )
  }
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <ShowBanner time={this.state.date.getSeconds()} />
        <h1>Current Time {this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Clock;
