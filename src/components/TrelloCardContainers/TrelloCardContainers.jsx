import React from "react";
import { containers } from "../../constants/cards";
import TrelloCard from "../TrelloCard/TrelloCard";
import classes from "./TrelloCardContainers.module.css";

const TrelloCardContainers = () => {
  const trelloContainers = containers.map((item, index) => {
    return (
      <div
        style={{
          maxWidth: "var(--cardWidth)",
          minWidth: "var(--cardWidth)",
          width: "100%",
          margin: "0 auto",
        }}
        key={item.id}
      >
        <div className={classes.headingContainer}>
          <span>{item.heading}</span>
          <img src="./assets/CombinedShape.png" alt="" />
        </div>
        {item.cards.map((card, ind) => {
          return (
            <TrelloCard
              key={card.id}
              description={card.description}
              likes={card.likes}
              comments={card.comments}
              pins={card.pins}
              numberOfIcons={card.numberOfIcons}
              info={card.info}
              imageUrl={card.imageUrl}
            />
          );
        })}
        {item.canAddNewCard && (
          <div className={classes.addCardContainer}>+ Add new card</div>
        )}
      </div>
    );
  });
  return (
    <div className={[classes.mainContainer, "noVerticalScrollbar"].join(" ")}>
      {trelloContainers}
    </div>
  );
};

export default TrelloCardContainers;
