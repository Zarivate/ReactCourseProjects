import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  // Everyone in our people array is an object
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    // If my number is bigger than the index of the last item in the array the njust return 0/first item in array
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      // In other words if you come to the beginning of the array just display the last item again
      return people.length - 1;
    }
    // If the number is within the array size just return it
    return number;
  };

  // To avoid any out of bounds/ index being bigger than the array errors, you could either write an if statement inside here or make another function
  const nextPerson = () => {
    // As a function we are accessing the current state value
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    // As a function we are accessing the current state value
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  // Because math.random never gets us 1, just a number really close to it, we can just multiply it by our array length that we round down to get a random person
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
