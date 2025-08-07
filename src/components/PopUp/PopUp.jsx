import React, { useEffect, useState } from "react";
import "./PopUp.css";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const PopUp = () => {
  const [ModalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem("Modal");

    if (!hasSeenModal) {
      // Show modal after 3 seconds
      const timer = setTimeout(() => {
        setModalShow(true);
        localStorage.setItem("Modal", "true"); // Set flag so it won't show again
      }, 3000);

      return () => clearTimeout(timer); // Cleanup
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name === "" || formData.email === "") {
      toast.error("input field should be filled");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://velorexbackend-1.onrender.com/addUser",
        formData
      );
      Swal.fire({
        title: "Subscribed successfully!",
        text: "Thanks for subscribing 🎉🎉",
        icon: "success",
      });
      console.log("added successfully", response.data);
      setModalShow(false);
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("error subscribing");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {ModalShow && (
        <div className="pop-up-overlay">
          <div className="pop-up-container shadow">
            <div
              className="Modal-cancel-btn"
              onClick={() => setModalShow(false)}
            >
              <IoClose />
            </div>
            <div className="pop-Up-Head">
              Get weekly information directly into your inbox
            </div>
            <form className="mt-3" onSubmit={handleSubmit}>
              <div className="pop-up-form-container">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
              </div>
              <div className="pop-up-form-container">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email Address"
                />
              </div>
              <div>
                {loading ? (
                  <div
                    class="spinner-border spinner-border-sm p-2"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <button className="Subscribe-btn" type="submit">
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span>Subscribe</span>
                  </button>
                )}
              </div>
            </form>
          </div>

          <Toaster position="bottom-center" />
        </div>
      )}
    </div>
  );
};

export default PopUp;
