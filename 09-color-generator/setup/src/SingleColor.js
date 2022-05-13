import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

// First two items come from the item/library, third one is what we passed on via props
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  // In order to set the background as a color, we want to have the color match up to whatever we have in the RGB. In order to do so we'll have to somehow turn the RGB array in the library item into a string
  // because we'll use inline CSS to set it up as a color value. Below we join things with commas,
  const bcg = rgb.join(",");

  // This is another way to get the hex values besides just passing in the hexColor value when iterating over it in the App.js
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      // If the index is greater than 10 than use the color-light css that just makes things lighter and easier to see
      className={`color ${index > 10 && "color-light"}`}
      // Each and every object has an rgb value, in those values are the rgb values, and then we set up inline style to set it up so each square has unique color.
      // We invoke the rgb function then pass in the value of the value from rgb array of bcg
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        // This is all just classic JS method and code
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {/* If alert is true then display a pragraph  */}
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
