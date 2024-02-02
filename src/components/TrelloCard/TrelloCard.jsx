import React from "react";
import classes from "./TrelloCard.module.css";
import { imageUrls } from "../../constants/profileIcons";

const TrelloCard = ({
  imageUrl,
  description,
  info,
  likes,
  pins,
  comments,
  numberOfIcons,
}) => {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const profileIcons = imageUrls.map((item, index) => {
    if (index < numberOfIcons) {
      return (
        <img
          className={classes.profileIcon}
          src={item}
          alt="profileIcon"
          key={index}
        />
      );
    }
  });

  const pills = new Array(Math.floor(Math.random() * 4) + 1)
    .fill("")
    .map((item, index) => {
      return (
        <div
          key={index}
          style={{ background: `${getRandomColor()}` }}
          className={classes.pill}
        />
      );
    });

  return (
    <div className={classes.cardContainer}>
      {imageUrl && (
        <div
          style={{ background: `url(${imageUrl})` }}
          className={classes.imageContainer}
        />
      )}
      <div style={{ display: "flex", gap: "4px", marginBottom: "6px" }}>
        {pills}
      </div>
      <span className={classes.cardDescription}>{description}</span>
      <span className={classes.cardInfo}>{info}</span>
      <div className={classes.cardFooterContainer}>
        <div className={classes.profilePictureContainer}>
          {profileIcons}{" "}
          <img
            className={classes.profileIcon}
            key={1000}
            src="../assets/Group 2.svg"
            alt=""
          />
        </div>
        <div className={classes.actionContainer}>
          <span className={classes.actionItem}>
            <span>{comments}</span>{" "}
            <img
              src="../assets/message-square-outline.svg"
              alt="comment icon"
            />
          </span>
          <span className={classes.actionItem}>
            <span>{likes}</span>{" "}
            <img src="../assets/heart-outline.svg" alt="like icon" />
          </span>
          <span className={classes.actionItem}>
            <span>{pins}</span>
            <img src="../assets/attach-outline.svg" alt="pin icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrelloCard;
