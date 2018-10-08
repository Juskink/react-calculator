import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        id={this.props.buttonId}
        onClick={() => this.props.onClick(this.props.index)}
        className={
          this.props.buttonId === "clear"
            ? "clear"
            : this.props.buttonId === "equals"
              ? "equals"
              : null
        }
      >
        {this.props.buttonName}
      </button>
    );
  }
}

export default Button;
