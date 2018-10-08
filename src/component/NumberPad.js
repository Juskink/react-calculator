import React from "react";

class NumberPad extends React.Component {
  render() {
    return <div className="NumberPad">{this.props.renderButtons()}</div>;
  }
}

export default NumberPad;
