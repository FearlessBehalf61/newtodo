import React from "react";

const Header = ({ title }) => {
  return <header>{title}</header>;
};

Header.defaultProps = {
  title: "Default Title",
};
export default Header;
