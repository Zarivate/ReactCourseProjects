import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  // What we would want to make the dynamic size toggle thing work is that every time the value for showLinks changes, the useEffect is run
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // Here we'll use the size of the links to adjust the link container
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {/* if showLinks is true then return links-container plus show container class, else just the links container */}
        <div
          className="links-container"
          ref={linksContainerRef}
          // {`${
          // Now we have a different issue where the height for the container is hard coded and won't change even if we don't have enough or more links that appear. In other words some links may not show up because the height is either too small or too big. We need a way to have it adjust depending on how many links we have
          //   showLinks ? "links-container show-container" : "links-container"
          // }`}
        >
          <ul className="links" ref={linksRef}>
            {/* Here we decided to iterate over our data instead of manually adding in the links, that way when one changes they all can change automatically instead of having to do it manually */}
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
