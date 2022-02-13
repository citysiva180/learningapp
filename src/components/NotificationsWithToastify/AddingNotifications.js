import React from "react";
import {
  toastContainer,
  toast,
  Zoom,
  Bounce,
  ToastContainer,
} from "react-toastify";
import { Button } from "react-bootstrap";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function AddingNotifications() {
  const successToast = () => {
    // toast("Success Custom Toast!", {
    //   className: "custom-toast",
    //   draggable: true,
    //   position: toast.POSITION.BOTTOM_CENTER,
    // });
    toast.success("You succeeded");
  };

  toast.error("Error Toast! Something went wrong!");
  toast.info("Some Information");
  toast.success("You succeeded");
  toast.warn("something is not right! Check yo self b4 you wreck yo self!!");

  axios
    .get("/lkjlkj")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      if (err) {
        toast("Api Error", {
          className: "Error Toast",
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
        });
      }
    });

  return (
    <div>
      <>
        <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
      </>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button onClick={() => successToast()}>Inovoke Success Toast</Button>
    </div>
  );
}

export default AddingNotifications;
