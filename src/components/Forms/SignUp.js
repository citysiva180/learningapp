import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  return (
    <form>
      <br></br>
      <Form.Control
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <br></br>
      <Form.Control
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        onChange={formik.handleChange}
        placeholder="Last Name"
        value={formik.values.lastName}
      />
      <br></br>
      <Form.Control
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        onChange={formik.handleChange}
        placeholder="Email"
        value={formik.values.email}
      />
      <br></br>
      <Form.Control
        type="text"
        name="password"
        id="password"
        placeholder="Password"
        onChange={formik.handleChange}
        placeholder="Password"
        value={formik.values.password}
      />
      <br></br>
      <Form.Control type="text" placeholder="Last Name" />
      <br></br>
      <Button>Submit</Button>
    </form>
  );
}

export default SignUp;
