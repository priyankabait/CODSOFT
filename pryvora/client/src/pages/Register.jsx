import { useState } from "react";

import axios from "axios";

function Register() {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        "http://localhost:5000/api/auth/register",

        formData
      );

      alert(response.data.message);

    } catch (error) {

      alert(error.response.data.error);
    }
  };

  return (

    <div className="login-page">

      <div className="login-container">

        <div className="login-left">

          <p className="login-tag">

            PRYVORA

          </p>

          <h1>

            Create Account

          </h1>

          <p className="login-text">

            Join Pryvora and discover timeless luxury.

          </p>

          <form

            className="login-form"

            onSubmit={handleSubmit}
          >

            <input

              type="text"

              name="name"

              placeholder="Full Name"

              onChange={handleChange}
            />

            <input

              type="email"

              name="email"

              placeholder="Email Address"

              onChange={handleChange}
            />

            <input

              type="password"

              name="password"

              placeholder="Password"

              onChange={handleChange}
            />

            <button type="submit">

              REGISTER

            </button>

          </form>

        </div>

        <div className="login-right">

          <img

            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1470&auto=format&fit=crop"

            alt=""
          />

        </div>

      </div>

    </div>
  );
}

export default Register;