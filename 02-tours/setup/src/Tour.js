import React, { useState } from "react";

// We use prop drilling to pass down the removeTour function in App.js from Tours.js to Tour.js
const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        {/* if the readMore is true, then I would want to display the info. However if it's not then I'd like to do something else */}
        <p>
          {readMore
            ? info
            : // this just says that we want to get the text from character 0 to 200
              `${info.substring(0, 200)}...`}
          {/* Since we wanna toggle the value of readMore here, you just need to go with an exclamation point and the value which means to set it to the opposite of whatever it currently is. Once you click it you also change the state value*/}
          <button onClick={() => setReadMore(!readMore)}>
            {/* What this is saying is that if readMore is true, then have the text be show less while if it's false have it say read more */}
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
