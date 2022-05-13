import React, { useState } from "react";
// As a heads up we exported our data as default so we can call it whatever we want here
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  // We want access to the event object here
  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a way you can have a string of a number become a number
    let amount = parseInt(count);

    if (count <= 0) {
      amount = 1;
    }
    if (count > 9) {
      amount = 9;
    }

    // slice method here just lets us get parts of our data from the starting point to whatever point we want it
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
