import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


var state2, change2;

class Example extends React.Component {
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
  

ReactDOM.render(<DatePicker selected={this.state.startDate} onChange={this.handleChange}/>, document.getElementById('hello'));