import React from "react";
import "./App.css";
import Calculator from "./component/Calculator";
import Button from "./component/Button";

const Data = [
  { buttonName: "AC", buttonId: "clear" },
  { buttonName: "-", buttonId: "subtract" },
  { buttonName: "7", buttonId: "seven" },
  { buttonName: "8", buttonId: "eight" },
  { buttonName: "9", buttonId: "nine" },
  { buttonName: "+", buttonId: "add" },
  { buttonName: "4", buttonId: "four" },
  { buttonName: "5", buttonId: "five" },
  { buttonName: "6", buttonId: "six" },
  { buttonName: "/", buttonId: "divide" },
  { buttonName: "1", buttonId: "one" },
  { buttonName: "2", buttonId: "two" },
  { buttonName: "3", buttonId: "three" },
  { buttonName: "*", buttonId: "multiply" },
  { buttonName: ".", buttonId: "decimal" },
  { buttonName: "0", buttonId: "zero" },
  { buttonName: "=", buttonId: "equals" }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleInput: "0",
      storedInput: [],
      totalInput: "",
      data: Data
    };
  }

  renderButtons = () => {
    return Data.map((arrObj, i, arr) => {
      return (
        <Button
          buttonName={arrObj.buttonName}
          index={i}
          key={arrObj.buttonId}
          onClick={this.handleClick}
          buttonId={arrObj.buttonId}
        />
      );
    });
  };

  // i will later refactor this to switch statement
  // need advice on how to make this DRY (create functions for repeated code)
  handleClick = i => {
    // no repeating zeroes or starting with * or / operators.
    if (i === 15) {
      if (this.state.simpleInput === "0") {
        return;
      } else {
        let newStore = this.state.storedInput;
        newStore.push(this.state.data[i].buttonName);
        return this.setState({
          simpleInput: this.state.simpleInput + this.state.data[i].buttonName,
          storedInput: newStore,
          totalInput: newStore.join("")
        });
      }
      // condition for "*" & "/"
    } else if (i === 9 || i === 13) {
      if (this.state.simpleInput === "0") {
        return;
      } else {
        let newStore = this.state.storedInput;
        newStore.push(this.state.data[i].buttonName);
        return this.setState({
          simpleInput: this.state.data[i].buttonName,
          storedInput: newStore,
          totalInput: newStore.join("")
        });
      }
      // condition for "-" and "+"
    } else if (i === 1 || i === 5) {
      let newStore = this.state.storedInput;
      newStore.push(this.state.data[i].buttonName);
      return this.setState({
        simpleInput: this.state.data[i].buttonName,
        storedInput: newStore,
        totalInput: newStore.join("")
      });
      // when equals is pressed
    } else if (i === 16) {
      let newStore = this.state.storedInput;
      newStore.push(this.state.data[i].buttonName);
      let evaluate = eval(this.state.totalInput).toFixed(5);
      newStore.push(evaluate);
      return this.setState({
        simpleInput: evaluate,
        storedInput: [evaluate],
        totalInput: newStore.join("")
      });
      // when AC is pressed
    } else if (i === 0) {
      return this.setState({
        storedInput: [],
        simpleInput: "0",
        totalInput: ""
      });
      // when decimal is pressed
    } else if (i === 14 && this.state.simpleInput.indexOf(".") !== -1) {
      return;
    } else {
      let sInp = this.state.simpleInput;
      if (sInp === "+" || sInp === "-" || sInp === "*" || sInp === "/") {
        let newStore = this.state.storedInput;
        newStore.push(this.state.data[i].buttonName);
        return this.setState({
          simpleInput: this.state.data[i].buttonName,
          storedInput: newStore,
          totalInput: newStore.join("")
        });
      } else {
        let newStore = this.state.storedInput;
        newStore.push(this.state.data[i].buttonName);
        return this.setState({
          simpleInput: this.state.simpleInput + this.state.data[i].buttonName,
          storedInput: newStore,
          totalInput: newStore.join("")
        });
      }
    }
  };

  render() {
    return (
      <div id="main-body">
        <Calculator
          renderButtons={this.renderButtons}
          simpleInput={this.state.simpleInput}
          totalInput={this.state.totalInput}
        />
      </div>
    );
  }
}

export default App;
