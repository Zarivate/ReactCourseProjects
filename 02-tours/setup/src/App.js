import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // We have to find a way to get this function down to a Tour component because you'd want to call it in Tour.js. You do it via props down at the second return  that has <Tours
  const removeTour = (id) => {
    // if the tour id you're passing in doesn't match the id you're pasing in then it's returned, if it does match then it's not going to be returned
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    //This is just in case setLoading was set to false at the start instead of true
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // We use the useEffect to invoke the fetchTours once the component renders the app component
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          {/* Because we don't need to invoke fetchTours with some kind of argument, we can set it up as a reference like so. Also all this button does is refresh the list by getting the same info with fetch again */}
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
