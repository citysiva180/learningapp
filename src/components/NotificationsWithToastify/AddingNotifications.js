import React from "react";
import {
  toastContainer,
  toast,
  Zoom,
  Bounce,
  ToastContainer,
} from "react-toastify";
import { Button } from "react-bootstrap";
// import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

//Checkout this amazing toastify documentation :  https://fkhadra.github.io/react-toastify/introduction/

const customId = "custom-id-yes";
const successId = "success";
const dangerId = "danger";
const warningId = "warn";
const infoId = "info";
function AddingNotifications() {
  //   const toastId = React.useRef(null);

  //   const notify = () => {
  //     console.log("clicked");
  //     if (!toast.isActive(toastId.current)) {
  //       toastId.current = toast("I cannot be duplicated!");
  //     }
  //   };

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

  //   const notify = () => {
  //     toast.success("Very Successfull");
  //   };

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
  //   const successToast = () => {
  //     // toast("Success Custom Toast!", {
  //     //   className: "custom-toast",
  //     //   draggable: true,
  //     //   position: toast.POSITION.BOTTOM_CENTER,
  //     // });
  //     toast.success("You succeeded");
  //   };

  //   //   toast.error("Error Toast! Something went wrong!");
  //   //   toast.info("Some Information");
  //   //   toast.success("You succeeded");
  //   //   toast.warn("something is not right! Check yo self b4 you wreck yo self!!");
  //   const customId = () => parseInt(Date.now() * Math.random());
  //   axios
  //     .get("/lkjlkj")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       if (err) {
  //         toast("Api Error", {
  //           className: "Error Toast",
  //           draggable: true,
  //           position: toast.POSITION.TOP_CENTER,
  //           toastId: customId,
  //         });
  //       }
  //     });

  //   return (
  //     <div>
  //       <>
  //         <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
  //       </>
  //       <br></br>
  //       <br></br>
  //       <br></br>
  //       <br></br>
  //       <Button onClick={() => successToast()}>Inovoke Success Toast</Button>
  //     </div>
  //   );
}

export default AddingNotifications;
