import React, { Component } from "react";
import { Button } from "react-bootstrap";
import LearningProps from "../LearningProps/LearningProps";
class StateCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement() {
    console.log("Increase button clicked");
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  handleDecrement() {
    console.log("decrease button clicked");
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <h1>Learning State in React</h1>
        <br />
        <p>
          States in React are trackers which keep a record or snapshot of how
          the component was initially and if an update is made, the same is
          again captured to reflect in the front end In this component, I have
          declared count as a state. At the starting, count would be zero. Now I
          would be adding an incrementor and decrementor which will update the
          state to reflect Before I talk about adding these buttons, I need to
          tell you that adding these button itself is adding a coding logic for
          the same. Remember, syntaxes matter in react. Knowing the proper
          syntax will reduce the errors on build
        </p>
        <br />
        <br />
        <h1>Counter is here : {this.state.count}</h1>
        <br />
        <br />
        <br />
        <Button
          className="success"
          variant="success"
          onClick={() => this.handleIncrement()}
        >
          Increase
        </Button>{" "}
        <Button
          className="danger"
          variant="danger"
          onClick={() => this.handleDecrement()}
        >
          Decrease
        </Button>
        <br />
        <br />
        <br />
        <LearningProps count={this.state.count} />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default StateCheck;
