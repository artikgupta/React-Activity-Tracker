import React, { Component } from 'react';

import Calender from './Components/Calender';

import './style.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      inputVal: '',
      arr: {},
    };

    this.date = new Date();
  }

  componentDidMount() {
    this.getLS();
  }

  getLS = () => {
    let data = localStorage.getItem('secret');
    console.log(data);
    if (!data) return;
    let dataParsed = JSON.parse(data);
    this.setState({ arr: dataParsed });
  };

  setLS = () => {
    let dataStringify = JSON.stringify(this.state.arr);
    let data = localStorage.setItem('secret', dataStringify);
  };

  handleChange = (event) => {
    this.setState({
      inputVal: event.target.value,
    });
  };

  handleDayArray = (key, index) => {
    const arrClone = { ...this.state.arr };
    arrClone[key][index].isSelected = !arrClone[key][index].isSelected;
    this.setState({ arr: arrClone }, () => this.setLS());
  };

  createDayArray() {
    let DAYS = [];
    for (let i = 1; i <= this.daysInAMonth(); i++) {
      DAYS.push({ date: i, isSelected: false });
    }
    return DAYS;
  }

  activityHandler = () => {
    if (!this.state.inputVal && !this.state.arr[this.state.inputVal]) return;
    const arrClone = { ...this.state.arr };
    arrClone[this.state.inputVal] = this.createDayArray();
    console.log(arrClone[this.state.inputVal], 'arr');
    this.setState(
      {
        arr: arrClone,
        inputVal: '',
      },
      this.setLS
    );
  };

  handleClear = (key, i) => {
    delete this.state.arr[key];

    this.setState(
      {
        arr: { ...this.state.arr },
      },
      this.setLS
    );
  };

  daysInAMonth = () => {
    console.log(this.date.getMonth());
    switch (this.date.getMonth()) {
      case 0:
        return 31;
      case 1:
        return 28;
      case 2:
        return 31;
      case 3:
        return 30;
      case 4:
        return 31;
      case 5:
        return 30;
      case 6:
        return 31;
      case 7:
        return 31;
      case 8:
        return 30;
      case 9:
        return 31;
      case 10:
        return 30;
      case 11:
        return 31;
    }
  };

  render() {
    var d = new Date();
    var month = new Array();
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';
    var n = month[d.getMonth()];

    return (
      <div className="container">
        <h2 className="heading">Monthly Activity Tracker!</h2>
        <div className="input_box">
          <input
            type="text"
            placeholder=" e.g. coding"
            value={this.state.inputVal}
            onChange={this.handleChange}
          ></input>
          <button className="activity_btn" onClick={this.activityHandler}>
            Add Activity
          </button>
        </div>

        {Object.keys(this.state.arr).map((key, i) => {
          console.log(key);
          return (
            <div className="flex box">
              <div className="month">
                <h1>{key}</h1>
                <p>{n}</p>
              </div>
              <div className="flex-70">
                <div className="parent">
                  <button
                    className="child btn"
                    onClick={() => this.handleClear(key, i)}
                  >
                    X
                  </button>
                  <Calender
                    daysArray={this.state.arr[key]}
                    handleDayArray={(index) => this.handleDayArray(key, index)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
