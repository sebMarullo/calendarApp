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

    //Onlye week days
    this.isWeekday = (date) => {
      const day = date.day()
      return day !== 0 && day !== 6
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }



  render() {
    return <DatePicker
        className="myshop_datepicker_react"
        dateFormat="DD/MM/YYYY"
        selected={this.state.startDate}
        onChange={this.handleChange}
        placeholderText="Click to select a date"

        //Only week days
        filterDate={this.isWeekday}
    />;
  }
}

ReactDOM.render(
  <Calender />,
  document.getElementById('myshop_datepicker_content')
);