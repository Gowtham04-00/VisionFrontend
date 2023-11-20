import React, { useState } from "react";
import "./ContactUs.css";
import { useNavigate } from "react-router-dom";
// import pizzaBackground from "../shared/images/pizza1.avif"; // Replace with the actual path to your image

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8888/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
         alert("User data submitted successfully");
         navigate('/dashboard1')
      } else {
        console.error("Failed to submit user data");
      }
    } catch (error) {
      console.error("Error submitting user data", error);
    }
  };

  return (
    <div className="container-fluid" style={{  height: "100vh" }}>
      <div className="page-content" >
        <h1>Contact Us</h1>
        <div className="mb-3 col-md-8" style={{}}>
          <form onSubmit={handleSubmit} className="cont" >
            
            <label className="name">Your Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
           
            <label className="email">Your Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />

            <label className="message">Your Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here..." style={{ height: "170px" }} required></textarea>

            <button type="submit">Submit</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;