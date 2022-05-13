import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  // Page is an object in our context.js so we pass it in as an object here where we say we're looking for page and links from it
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  // Now in the useEffect once the data changes we'd also want to change the state value for the columns
  useEffect(() => {
    setColumns("col-2");
    // This gets us the node
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);

  // If isSubmenuOpen is true then we'd want to display two classes and if not then only one (submenu class)
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      {/* We'd want to dynamically change the width of the submenu depending on how many links there are which we can do in our useEffect and with the help of a state value we set below the container */}
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
