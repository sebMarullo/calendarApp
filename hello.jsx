import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
var ReactDOM = require('react-dom');

import 'react-datepicker/dist/react-datepicker-cssmodules.css'; 

class Calender extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
  }
}

ReactDOM.render(
  <Calender />,
  document.getElementById('app')
);