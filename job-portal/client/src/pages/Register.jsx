import React, { useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

function Register() {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: ""
  });

  /* HANDLE INPUT CHANGE */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };

  /* HANDLE SUBMIT */

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log(formData);

    try {

      const response = await axios.post(

        "http://localhost:5000/api/users/register",

        formData
      );

      alert(response.data.message);

    } catch (error) {

      console.log(error);

      alert("Registration Failed");
    }
  };

  return (

    <div className="auth-page">

      <div className="auth-container">

        <h1>
          Create Account 🚀
        </h1>

        <p>
          Join HireHub and start your journey.
        </p>

        {/* FORM */}

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Create password"
            onChange={handleChange}
          />

          <button type="submit">

            Register

          </button>

        </form>

        <div className="auth-footer">

          Already have an account?

          <Link to="/login">

            Login

          </Link>

        </div>

      </div>

    </div>
  );
}

export default Register;