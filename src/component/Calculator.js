import React from "react";
import Display from "./Display";
import NumberPad from "./NumberPad";

class Calculator extends React.Component {
  render() {
    return (
      <div id="calculatorBody" className="calculatorBody">
        <Display
          simpleInput={this.props.simpleInput}
          totalInput={this.props.totalInput}
        />
        <NumberPad renderButtons={this.props.renderButtons} />
      </div>
    );
  }
}

export default Calculator;
