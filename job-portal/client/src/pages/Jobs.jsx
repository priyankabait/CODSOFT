import React, {

  useEffect,

  useState

} from "react";

import axios from "axios";

import { Link } from "react-router-dom";

function Jobs() {

  const [jobs, setJobs] = useState([]);

  /* FETCH JOBS */

  useEffect(() => {

    const fetchJobs = async () => {

      try {

        const response =
        await axios.get(

          "http://localhost:5000/api/jobs"
        );

        setJobs(response.data);

      } catch (error) {

        console.log(error);
      }
    };

    fetchJobs();

  }, []);

  return (

    <div className="jobs-page">

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

      {/* ================= HERO ================= */}

      <section className="jobs-hero">

        <h1>
          Explore Latest Jobs 🚀
        </h1>

        <p>
          Find opportunities from top companies worldwide.
        </p>

      </section>

      {/* ================= JOB LIST ================= */}

      <section className="jobs-list-section">

        <div className="jobs-grid">

          {jobs.map((job) => (

            <Link

              to={`/jobs/${job._id}`}

              className="job-link"

              key={job._id}
            >

              <div className="job-box">

                <h2>
                  {job.title}
                </h2>

                <h4>
                  {job.company}
                </h4>

                <p>
                  {job.location}
                  {" • "}
                  {job.type}
                </p>

                <p>
                  {job.description}
                </p>

                <button>

                  Apply Now

                </button>

              </div>

            </Link>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Jobs;