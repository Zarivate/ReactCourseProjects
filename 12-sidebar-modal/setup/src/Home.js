import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
// This is the non custom hook route
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  // By the way, having the parentheses () means that you're invoking it
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
