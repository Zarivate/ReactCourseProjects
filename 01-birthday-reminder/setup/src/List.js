import React from "react";

// We're saying we're looking for our people prop here
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        // All this stuff is coming from the "person" cause if we look in the data file it's all there
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
