import React from 'react';

class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      daysArray: [], //{date: 1, isSelected: false}
    };
  }

  render() {
    return (
      <div className="cal">
        {this.props.daysArray.map((v, i) => {
          return (
            <div
              onClick={() => this.props.handleDayArray(i)}
              className={v.isSelected ? 'active' : ''}
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
