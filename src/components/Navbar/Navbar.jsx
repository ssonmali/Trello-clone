import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.navElements}>
        <img className={classes.logo} src="../assets/logo.svg" alt="" />
        <img className={classes.logo} src="../assets/Rectangle.png" alt="" />
        <img
          className={classes.boards}
          src="../assets/trello-mark-blue.svg"
        ></img>
        <img
          className={classes.miniSearch}
          src="../assets/search-outline.png"
        ></img>
        <p className={classes.logo}>Boards</p>
        <img className={classes.logo} src="../assets/Rectangle.png" alt="" />
        <img className={classes.logo} src="../assets/search.png" alt="" />
      </div>
      <div className={classes.navElements}>
        <img src="../assets/plus-circle-outline.png" alt="" />
        <img src="../assets/alert-circle-outline.png" alt="" />
        <img src="../assets/bell-outline.png" alt="" />
        <img src="../assets/user.png" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
