import React from "react";

import { Link } from "react-router-dom";

import heroImage from "../assets/hero.png";

function Home() {

  return (

    <div className="home">

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

            <Link to="/login">
              Login
            </Link>

          </li>

          <li>

            <Link to="/register">
              Register
            </Link>

          </li>

        </ul>

      </nav>

      {/* ================= HERO SECTION ================= */}

      <section className="hero">

        {/* LEFT CONTENT */}

        <div className="hero-content">

          <h1>
            Find Your Dream Job Today 🚀
          </h1>

          <p>
            Explore thousands of opportunities
            from top companies around the world.
            Search, apply, and get hired faster
            with HireHub.
          </p>

          {/* SEARCH BOX */}

          <div className="search-box">

            <input
              type="text"
              placeholder="Search jobs..."
            />

            <button>
              Search
            </button>

          </div>

          {/* STATS */}

          <div className="stats">

            <div>

              <h2>10K+</h2>

              <p>Jobs</p>

            </div>

            <div>

              <h2>5K+</h2>

              <p>Companies</p>

            </div>

            <div>

              <h2>15K+</h2>

              <p>Candidates</p>

            </div>

          </div>

        </div>

        {/* HERO IMAGE */}

        <div className="hero-image">

          <img
            src={heroImage}
            alt="Hero"
          />

        </div>

      </section>

      {/* ================= FEATURED JOBS ================= */}

      <section className="jobs-section">

        <h2 className="section-title">
          Featured Jobs
        </h2>

        <div className="jobs-container">

          {/* JOB CARD 1 */}

          <div className="job-card">

            <h3>
              Frontend Developer
            </h3>

            <p className="company">
              Google
            </p>

            <p>
              React.js • Remote • Full Time
            </p>

            <button>
              Apply Now
            </button>

          </div>

          {/* JOB CARD 2 */}

          <div className="job-card">

            <h3>
              Backend Developer
            </h3>

            <p className="company">
              Microsoft
            </p>

            <p>
              Node.js • Hybrid • Full Time
            </p>

            <button>
              Apply Now
            </button>

          </div>

          {/* JOB CARD 3 */}

          <div className="job-card">

            <h3>
              UI/UX Designer
            </h3>

            <p className="company">
              Adobe
            </p>

            <p>
              Figma • Remote • Internship
            </p>

            <button>
              Apply Now
            </button>

          </div>

        </div>

      </section>

      {/* ================= FEATURES SECTION ================= */}

      <section className="features-section">

        <h2 className="section-title">
          Why Choose HireHub?
        </h2>

        <div className="features-container">

          {/* FEATURE 1 */}

          <div className="feature-card">

            <div className="feature-icon">
              🚀
            </div>

            <h3>
              Fast Hiring
            </h3>

            <p>
              Apply to thousands of jobs quickly
              with a seamless experience.
            </p>

          </div>

          {/* FEATURE 2 */}

          <div className="feature-card">

            <div className="feature-icon">
              💼
            </div>

            <h3>
              Top Companies
            </h3>

            <p>
              Discover opportunities from
              world-class companies globally.
            </p>

          </div>

          {/* FEATURE 3 */}

          <div className="feature-card">

            <div className="feature-icon">
              🔒
            </div>

            <h3>
              Secure Platform
            </h3>

            <p>
              Your applications and data stay
              protected and secure always.
            </p>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <h2>
          HireHub
        </h2>

        <p>
          Connecting talent with opportunities worldwide.
        </p>

        <div className="footer-links">

          <span>Home</span>

          <span>Jobs</span>

          <span>Contact</span>

          <span>Privacy</span>

        </div>

        <p className="copyright">
          © 2026 HireHub. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;