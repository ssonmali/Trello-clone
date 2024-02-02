import React from "react";
import classes from "./Brackets.module.css";

const Brackets = () => {
  return (
    <div className={classes.mainBracket}>
      <strong>Brackets</strong>
      <div className={classes.publicBrackets}>
        <div className={classes.bracketsIcons}>
          <img src="../assets/Heart.svg" alt="" />
          <img src="../assets/Rectangle.png" alt="" />
          <img src="../assets/globe-2-outline.svg" alt="" />
          <p style={{ opacity: "0.3" }}>Public</p>
          <img src="../assets/Rectangle.png" alt="" />
          <img src="../assets/Hard.png" alt="" />
        </div>
        <div className={classes.bracketsIcons}>
          <img src="../assets/Users.png" alt="" /> Menu
        </div>
      </div>
    </div>
  );
};

export default Brackets;
