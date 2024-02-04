import React from "react";

const Footer = ({ taskLength }) => {
  return (
    <footer>
      {taskLength === 1
        ? `${taskLength} item in your list.`
        : `${taskLength} items in your list.`}
    </footer>
  );
};

export default Footer;
