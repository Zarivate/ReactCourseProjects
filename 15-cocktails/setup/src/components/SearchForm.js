import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  // Everytime the user types something in input, we'll invoke setSearchTerm which would in term invoke the useEffect in context.js cause it's the properties/value in the second parameter
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  // This gives the little highlight thing over the search bar
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  // Here is where we'll access the searchValue value when it comes to useRef.
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  // This is so the app doesn't refresh/rerender when user presses enter on blank search bar
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
