import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

function InputBox() {
  const [input, setInput] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) {
    setInput(val.target.value); //Ensure to target elements via setInput
    setPrint(false);
  }

  return (
    <div>
      <Container>
        <br></br>
        <br></br>
        <h1>Get Input Box Value!</h1>
        <br></br>
        <br></br>
        <h3>Input Typed : {input}</h3>
        {print === true ? (
          <h3>Button Update : {input}</h3>
        ) : (
          <h3>Nothing typed!</h3>
        )}
        <br></br>
        <input type="text" onChange={getData}></input> <br></br>
        <br></br>
        <Button onClick={() => setPrint(true)}>Update</Button>
      </Container>
    </div>
  );
}

export default InputBox;
