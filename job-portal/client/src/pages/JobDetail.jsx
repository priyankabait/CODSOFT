import React, {

  useEffect,

  useState

} from "react";

import axios from "axios";

import {

  useParams,

  Link

} from "react-router-dom";

function JobDetail() {

  const { id } = useParams();

  const [job, setJob] = useState(null);

  const [resume, setResume] = useState(null);

  const user =
  JSON.parse(localStorage.getItem("user"));

  /* FETCH JOB */

  useEffect(() => {

    const fetchJob = async () => {

      try{

        const response =
        await axios.get(

          `http://localhost:5000/api/jobs/${id}`
        );

        setJob(response.data);

      }catch(error){

        console.log(error);
      }
    };

    fetchJob();

  }, [id]);

  /* HANDLE APPLY */

  const handleApply = async () => {

    if(!resume){

      alert("Please upload resume");

      return;
    }

    try{

      const formData =
      new FormData();

      formData.append(

        "resume",

        resume
      );

      formData.append(

        "userId",

        user._id
      );

      formData.append(

        "jobId",

        id
      );

      const response =
      await axios.post(

        "http://localhost:5000/api/applications/apply",

        formData
      );

      alert(response.data.message);

    }catch(error){

      console.log(error);

      alert("Application failed");
    }
  };

  if(!job){

    return <h1>Loading...</h1>;
  }

  return (

    <div className="job-detail-page">

      {/* NAVBAR */}

      <nav className="navbar">

        <h2 className="logo">
          HireHub
        </h2>

        <ul className="nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/jobs">Jobs</Link>
          </li>

        </ul>

      </nav>

      {/* JOB DETAIL */}

      <section className="job-detail">

        <h1>
          {job.title}
        </h1>

        <h3>
          {job.company}
        </h3>

        <p>
          {job.location}
          {" • "}
          {job.type}
        </p>

        <div className="detail-box">

          <h2>
            Job Description
          </h2>

          <p>
            {job.description}
          </p>

        </div>

        {/* RESUME */}

        <div className="resume-box">

          <h2>
            Upload Resume
          </h2>

          <input

            type="file"

            onChange={(e) => {

              setResume(
                e.target.files[0]
              );
            }}
          />

        </div>

        <button

          className="apply-btn"

          onClick={handleApply}
        >

          Apply Now

        </button>

      </section>

    </div>
  );
}

export default JobDetail;