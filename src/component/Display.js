import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div id="display" className="display">
        <div className="totalInput">
          <input value={this.props.totalInput} readOnly />
        </div>
        <div className="simpleInput">
          <input value={this.props.simpleInput} readOnly />
        </div>
      </div>
    );
  }
}

export default Display;
