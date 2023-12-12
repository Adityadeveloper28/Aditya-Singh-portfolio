import React, { useRef } from "react";
import "./My.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import emailjs from "@emailjs/browser";

import { Link } from "react-router-dom";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0or0dkb",
        "template_semoeea",
        form.current,
        "aoeI5P8UNr-ekyCMp"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("email send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container mt-2">
      <div className="row m-2">
        <div className="col-6 m-auto ">
          <h1 className="text-white text-center  shead">CONTACT ME</h1>
          <p className="text-white text-center cnt">
            Please fill out the form below to contact me
          </p>
          <form classname="text-white " ref={form} onSubmit={sendEmail}>
            <div class="mt-4">
              <input
                type="text"
                class="form-control  name "
                placeholder="YOUR NAME"
                aria-label="YOUR NAME"
                aria-describedby="basic-addon2"
                name="your_name"
              />
            </div>
            <div class=" mt-4 ">
              <input
                type="text"
                class="form-control  name"
                placeholder="YOUR EMAIL"
                aria-label="YOUR EMAIL"
                aria-describedby="basic-addon2"
                name="your_email"
              />
            </div>
            <div class="mt-4">
              <textarea
                class="form-control  name"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="YOUR MESSAGE"
                name="message"
              ></textarea>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <button type="submit" className="btn btn-light sub">
                submit
              </button>
            </div>
            <div className="row d-flex justify-content-center ">
              <div className="col " style={{ flex: "0 0 0%" }}>
                <Link to="https://www.instagram.com/ecce_dentesiast_01/">
                  <img
                    src="https://cdn.icon-icons.com/icons2/3186/PNG/512/instagram_icon_194148.png"
                    class="image"
                    alt=""
                  />
                </Link>
              </div>
              <div className="col " style={{ flex: "0 0 0%" }}>
                <Link to="https://www.facebook.com/profile.php?id=100023406912117">
                  <img
                    src="https://cdn.icon-icons.com/icons2/2248/PNG/512/facebook_icon_137647.png"
                    class="image"
                    alt=""
                  />
                </Link>
              </div>
              <div className="col " style={{ flex: "0 0 0%" }}>
                <Link to="https://www.linkedin.com/in/aditya-singh-5b87a7253/">
                  <img
                    src="https://img.icons8.com/ios-filled/50/linkedin-circled--v1.png"
                    alt="linkedin-circled--v1"
                    class="image"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </form>
        </div>{" "}
      </div>
    </div>
  );
}

export default Contact;
