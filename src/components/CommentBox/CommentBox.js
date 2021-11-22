import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", comment: "" };
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleCommentUpdate(event) {
    this.setState({ comment: event.target.value });
  }

  handleClick() {
    console.log(this.state.comment);
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Container">
        <br />
        <br />
        <br />
        <br />
        <h1>Rendering Input Data from Text boxes</h1>
        <br />
        <br />
        <p>{this.state.email} says:</p>
        <br />
        <br />
        {this.state.comment}
        <br />
        <br />
        <br />
        <Form onSubmit={() => this.handleSubmit()}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={this.state.email}
              onChange={(e) => this.handleEmailChange(e)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            value={this.state.comment}
            onChange={(e) => this.handleCommentUpdate(e)}
          >
            <Form.Label>Enter Your Comment Here</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <br />
          <Button onClick={(e) => this.handleClick(e)} type="submit">
            Click to Submit
          </Button>
        </Form>
        <br />
      </div>
    );
  }
}

export default CommentBox;
