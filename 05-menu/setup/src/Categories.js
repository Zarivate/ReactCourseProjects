import React from "react";

// Here the problem with doing things manually is that we're not in synch with our data, meaning if you add more items with different categories then we'll have to manually edit the buttons to add it
const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {/* We're going to iterate over our categories with "category" being used to represent each and every string in the array. Also since we have a simple list we'll also use index */}
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {/* In other words, whatever the string value is pass it in for the text value */}
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
