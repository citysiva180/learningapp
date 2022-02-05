// import React from "react";
// import { useFormik } from "formik";
// import {
//   // Container,
//   // InputGroup,
//   // FormControl,
//   Button,
//   Form,
// } from "react-bootstrap";
// import * as Yup from "yup";
// function SignUp() {
//   // { useState }
//   // const [firstName, setFirstName] = useState("");
//   // const [lastName, setLastName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string()
//         .max(15, "Must be 15 characters or Less")
//         .required("Required"),
//       lastName: Yup.string()
//         .max(20, "Must be 20 characters or Less")
//         .required("Required"),
//       email: Yup.string().email("Invalid Email").required("Required"), //email function here has the required regext to make this happen
//       password: Yup.string()
//         .required("No password provided.")
//         .min(8, "Password is too short - should be 8 chars minimum.")
//         .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
//     }),
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

//   console.log(formik.errors);
//   console.log(formik.touched);

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <br></br>
//       <Form.Control
//         type="text"
//         name="firstName"
//         id="firstName"
//         placeholder="First Name"
//         onChange={formik.handleChange}
//         onBlur={formik.touched}
//         value={formik.values.firstName}
//       />

//       {formik.touched.firstName && formik.errors.firstName ? (
//         <p>{formik.errors.firstName}</p>
//       ) : null}
//       <br></br>
//       <Form.Control
//         type="text"
//         name="lastName"
//         id="lastName"
//         placeholder="Last Name"
//         onChange={formik.handleChange}
//         onBlur={formik.touched}
//         // placeholder="Last Name"
//         value={formik.values.lastName}
//       />
//       {formik.touched.lastName && formik.errors.lastName ? (
//         <p>{formik.errors.lastName}</p>
//       ) : null}
//       <br></br>
//       <Form.Control
//         type="email"
//         name="email"
//         id="email"
//         placeholder="Email"
//         onChange={formik.handleChange}
//         onBlur={formik.touched}
//         // placeholder="Email"
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email ? (
//         <p>{formik.errors.email}</p>
//       ) : null}
//       <br></br>
//       <Form.Control
//         type="password"
//         name="password"
//         id="password"
//         placeholder="Password"
//         onChange={formik.handleChange}
//         // onBlur={formik.touched}
//         // placeholder="Password"
//         value={formik.values.password}
//       />
//       {formik.touched.password && formik.errors.password ? (
//         <p>{formik.errors.password}</p>
//       ) : null}
//       <br></br>
//       <Button type="submit" text="submit">
//         Submit
//       </Button>
//     </form>
//   );
// }

// export default SignUp;
