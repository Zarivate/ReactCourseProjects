import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  // This is what we use to decide whether the bar for deciding color turns red or not if a color doesn't exist
  const [error, setError] = useState(false);
  // This .all method just returns a select number of tints divided by whatever is passed in. So since 10 here we'll get tints from 100% divided by 10 each time. Meaning we'll get 10 tints on the light side and 10 more on the negative/darker side.
  const [list, setList] = useState(new Values("#f27013").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // This .all method comes from the imported library
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  // We set up the fragment at the start here because we know there's only 1 thing we can return from the JSX
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            // If there is an error than set class to error else do nothing
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
