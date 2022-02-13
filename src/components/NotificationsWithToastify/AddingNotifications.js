import React from "react";
import {
  toastContainer,
  toast,
  Zoom,
  Bounce,
  ToastContainer,
} from "react-toastify";
import { Button } from "react-bootstrap";

import "react-toastify/dist/ReactToastify.css";

//Checkout this amazing toastify documentation :  https://fkhadra.github.io/react-toastify/introduction/

const customId = "custom-id-yes";
const successId = "success";
const dangerId = "danger";
const warningId = "warn";
const infoId = "info";
function AddingNotifications() {
  const notify = () => {
    console.log("clicked!!");
    toast("I cannot be duplicated!", {
      position: toast.POSITION.TOP_CENTER,
      toastId: customId,
    });
  };
  const success_notify = () => {
    console.log("clicked!!");
    toast.success("This is a success message!", {
      //   position: toast.POSITION.TOP_CENTER,
      toastId: successId,
      theme: "colored", //Ensure to add the theme prop to beautifully color your toasts
    });
  };
  const danger_notify = () => {
    console.log("clicked!!");
    toast.error("This is a danger message!", {
      //   position: toast.POSITION.TOP_CENTER,
      toastId: dangerId,
    });
  };
  const warn_notify = () => {
    console.log("clicked!!");
    toast.warn("This is a warning message", {
      //   position: toast.POSITION.TOP_CENTER,
      toastId: warningId,
    });
  };
  const info_notify = () => {
    console.log("clicked!!");
    toast.info("This is an info message!", {
      //   position: toast.POSITION.TOP_CENTER,
      toastId: infoId,
    });
  };

  return (
    <div>
      {" "}
      <br></br>
      <br></br>
      <h1>Working with React Toast Notification</h1>
      <br></br>
      <br></br>
      <ToastContainer></ToastContainer>
      <br></br>
      <Button onClick={notify}>Custom Notification</Button>
      <br></br>
      <br></br>
      <Button variant="success" onClick={success_notify}>
        Success Notification
      </Button>
      <br></br>
      <br></br>
      <Button variant="danger" onClick={danger_notify}>
        Danger Notification
      </Button>
      <br></br>
      <br></br>
      <Button variant="warning" onClick={warn_notify}>
        Warning Notification
      </Button>
      <br></br>
      <br></br>
      <Button variant="info" onClick={info_notify}>
        Info Notification
      </Button>
    </div>
  );
}

export default AddingNotifications;

//   const toastId = React.useRef(null);

//   const notify = () => {
//     console.log("clicked");
//     if (!toast.isActive(toastId.current)) {
//       toastId.current = toast("I cannot be duplicated!");
//     }
//   };
