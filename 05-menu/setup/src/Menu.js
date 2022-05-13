import React from "react";

// Now we access the items and iterate over the list and for each and every item we have a nice return
const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        // Here is where we put the properties we're looking for, "menuItem" is just the handy name we use to help iterate over the data
        // We go with desctructuring here just cause
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
