import React from "react";

class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      daysArray: [], //{date: 1, isSelected: false}
    };
  }

  // componentDidMount() {
  //   // this.createDayArray();
  // }

  // createDayArray() {
  //   let DAYS = [];
  //   for (let i = 1; i <= this.props.noOfDays; i++) {
  //     DAYS.push({ date: i, isSelected: false });
  //   }
  //   this.setState({ daysArray: DAYS });
  // }

  // handleDays = (i) => {
  //   const dayArrayClone = [...this.state.daysArray];
  //   dayArrayClone[i].isSelected = !dayArrayClone[i].isSelected;
  //   this.setState({ daysArray: dayArrayClone });
  // };
  render() {
    // for (let i = 1; i <= this.props.noOfDays; i++) {
    //   let DAY = <div>{i}</div>;
    //   DAYS.push(DAY);
    // }
    return (
      <div className="cal">
        {this.props.daysArray.map((v, i) => {
          return (
            <div
              onClick={() => this.props.handleDayArray(i)}
              className={v.isSelected ? "active" : ""}
            >
              {v.date}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Calender;
