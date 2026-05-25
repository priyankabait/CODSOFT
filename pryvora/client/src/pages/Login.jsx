import { useState } from "react";

import axios from "axios";

function Login() {

  const [isRegister,setIsRegister] = useState(false);

  const [name,setName] = useState("");

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  /* SUBMIT */

  const handleSubmit = async (e)=>{

    e.preventDefault();

    try{

      /* REGISTER */

      if(isRegister){

        const response = await axios.post(

          "http://localhost:5000/api/auth/register",

          {
            name,
            email,
            password
          }
        );

        alert(response.data.message);
      }

      /* LOGIN */

      else{

        const response = await axios.post(

          "http://localhost:5000/api/auth/login",

          {
            email,
            password
          }
        );

        alert(response.data.message);

        localStorage.setItem(

          "token",

          response.data.token
        );
      }
    }

    catch(error){

      alert(error.response.data.message);
    }
  };

  return (

    <div className="login-page">

      <div className="login-container">

        {/* LEFT */}

        <div className="login-left">

          <p className="login-tag">

            PRYVORA ACCOUNT

          </p>

          <h1>

            {isRegister

              ? "Create Account"

              : "Welcome Back"}

          </h1>

          <p className="login-text">

            Access luxury jewellery collections,
            exclusive launches, and premium gifting.

          </p>

          {/* FORM */}

          <form

            className="login-form"

            onSubmit={handleSubmit}
          >

            {/* NAME */}

            {isRegister && (

              <input

                type="text"

                placeholder="Full Name"

                value={name}

                onChange={(e)=>setName(e.target.value)}

                required
              />
            )}

            {/* EMAIL */}

            <input

              type="email"

              placeholder="Email"

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

              required
            />

            {/* PASSWORD */}

            <input

              type="password"

              placeholder="Password"

              value={password}

              onChange={(e)=>setPassword(e.target.value)}

              required
            />

            {/* BUTTON */}

            <button type="submit">

              {isRegister

                ? "REGISTER"

                : "LOGIN"}

            </button>

          </form>

          {/* SWITCH */}

          <p

            className="switch-auth"

            style={{cursor:"pointer"}}

            onClick={()=>setIsRegister(!isRegister)}
          >

            {isRegister

              ? "Already have an account? Login"

              : "Don't have an account? Register"}

          </p>

        </div>

        {/* RIGHT */}

        <div className="login-right">

          <img

            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1470&auto=format&fit=crop"

            alt=""
          />

        </div>

      </div>

    </div>
  );
}

export default Login;