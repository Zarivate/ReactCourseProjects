import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// Here is the functionality so we only get the unique categories from our list. What this says is that as I'm iterating over my list, please return a value for the category.
// The reason we use Set here is to avoid any repetition from multiple same categories, since this only gets the unique values
// We want them in an array, but since they're returned in the new Set as an object we have to use the spread operator to make the new array work
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  // state values
  const [menuItems, setMenuItems] = useState(items);
  // one for the menu items and another for the categories we need. This will start out empty that we'll populate as we go
  const [categories, setCategories] = useState(allCategories);

  // Function to help filter items so we can do the buttons correctly, we'll iterate over the original list because that one won't change
  const filterItems = (category) => {
    // Condition in case we want to show all the items again
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    // Here we say, if the item category property matches with the string we're passing in then return that item to newItems array
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="='menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* Now we pass out filterItems function down in categories cause where we wanna use it */}
        <Categories categories={categories} filterItems={filterItems} />
        {/* Menu will be the more straightforward one because how we have a list of items we just iterate over and for each item we return some kind of nice looking article with all the content we need, image, description, etc 
        to pass in our data "items" we need to set up some kind of prop*/}
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
