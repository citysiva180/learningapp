import React, { Component } from "react";
import { Button } from "react-bootstrap";
class ToggleEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <h1>Raising Events in React</h1>
        <br />
        <br />
        <br />
        <p>
          Events in react are nothing but logics which make something happen on
          clicking a button. Events form a major role in interacting with users.
          With events you could trigger / fire actions. You also need to ensure
          that the event raised have respective function associated within. As
          your app progressed, you could create a re-usuable functions of events
          <br />
          Remember, a toggle button is best when you give it a boolean value.
          What it renders is something completely different. Using this you
          could add and change the value of your rendering value. You could also
          add dynamacity to your variants in your html components which could be
          changed based on your rendering
        </p>
        <br />
        <br />
        {this.state.isToggleOn}
        <br />
        <br />
        <Button
          variant={this.state.isToggleOn ? "success" : "danger"}
          onClick={() => this.handleClick()}
        >
          {this.state.isToggleOn ? "ON" : "OFF"}
        </Button>
      </div>
    );
  }
}

export default ToggleEvents;
