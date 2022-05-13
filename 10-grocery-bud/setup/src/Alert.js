import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  // By default all will have alert class but then depending on type it will have one other class
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
