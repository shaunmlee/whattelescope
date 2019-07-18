import React from "react";
import { CreateCard } from "./createCard";

const DisplayCards = props => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "flex-start"
      }}
    >
      {props.scopes.map(scope => {
        return <CreateCard telescope={scope} />;
      })}
    </div>
  );
};

export { DisplayCards };
