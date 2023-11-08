"use client"

import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
    return (
        <ToastContainer
          position="top-right"
          theme="colored"
          transition={Slide}
        />
    )
}

export default Toast;