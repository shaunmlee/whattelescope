import React from "react";
import { DisplayCards } from "./displayCards";
import Typography from "@material-ui/core/Typography";

const ShowResults = props => {
  // If no options are selected tell the user to select something.
  let flag = true;
  for (let i = 0; i < props.checkedList.length; i++) {
    if (props.checkedList[i].some(value => value === true)) {
      flag = false;
    }
  }
  if (flag) {
    return <Typography>Select an option to start.</Typography>;
  }
  //   Let the user know nothing matched.
  else if (props.scopes.length === 0) {
    return <Typography>No matches.</Typography>;
  }
  //   Show the matching scope cards.
  else {
    return <DisplayCards scopes={props.scopes} />;
  }
};

export { ShowResults };