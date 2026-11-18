import React from "react";

import { Link } from "react-router-dom";

function Dashboard() {

  const user =
  JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (

    <div className="dashboard-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <h2 className="logo">
          HireHub
        </h2>

        <ul className="nav-links">

          <li>

            <Link to="/">
              Home
            </Link>

          </li>

          <li>

            <Link to="/jobs">
              Jobs
            </Link>

          </li>

          <li>

            <button
              className="logout-btn"

              onClick={handleLogout}
            >

              Logout

            </button>

          </li>

        </ul>

      </nav>

      {/* ================= DASHBOARD ================= */}

      <section className="dashboard-hero">

        <h1>
          Welcome,
          {user?.name} 🚀
        </h1>

        <p>
          Your career journey starts here.
          Explore opportunities and manage
          your applications easily.
        </p>

      </section>

      {/* ================= DASHBOARD CARDS ================= */}

      <section className="dashboard-cards">

        <div className="dashboard-card">

          <h2>
            Applied Jobs
          </h2>

          <h1>
            12
          </h1>

        </div>

        <div className="dashboard-card">

          <h2>
            Saved Jobs
          </h2>

          <h1>
            8
          </h1>

        </div>

        <div className="dashboard-card">

          <h2>
            Profile Status
          </h2>

          <h1>
            95%
          </h1>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;