import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);

  const [jobs, setJobs] = useState([]);

  // The 0 here just means to get the first item in the array
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  // Empty array so we only run it once, when the app originally renders
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  // Destructuring the data after the loading. This is where we'll originally get the values for the first data item
  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {/* Here we will iterate over jobs and for every job I would want to display a specific button*/}
          {jobs.map((item, index) => {
            return (
              // Here we grab the index that represents the value in the array that also changes our state value when clicked
              <button
                key={item.id}
                onClick={() => setValue(index)}
                // Template string/ we're going back to JS when we put the curly braces here. Since it's a template string we can check to see whether the index is equal to the value, meaning that what we're on has already been clicked. "interplation" is the term for the ${} thing we do
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((responsibilities, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{responsibilities}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
