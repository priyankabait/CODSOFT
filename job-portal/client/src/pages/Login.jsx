import React, { useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

function Login() {

  const [formData, setFormData] = useState({

    email: "",
    password: ""
  });

  /* HANDLE CHANGE */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };

  /* HANDLE SUBMIT */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        "http://localhost:5000/api/users/login",

        formData
      );

/* SAVE TOKEN */

localStorage.setItem(

  "token",

  response.data.token
);

/* SAVE USER */

localStorage.setItem(

  "user",

  JSON.stringify(response.data.user)
);

/* REDIRECT */

window.location.href =
"/dashboard";

    } catch (error) {

      alert(error.response.data.message);
    }
  };

  return (

    <div className="auth-page">

      <div className="auth-container">

        <h1>
          Welcome Back 👋
        </h1>

        <p>
          Login to continue exploring jobs.
        </p>

        {/* FORM */}

        <form
          className="auth-form"

          onSubmit={handleSubmit}
        >

          <input
            type="email"

            name="email"

            placeholder="Enter your email"

            onChange={handleChange}
          />

          <input
            type="password"

            name="password"

            placeholder="Enter your password"

            onChange={handleChange}
          />

          <button type="submit">

            Login

          </button>

        </form>

        <div className="auth-footer">

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;