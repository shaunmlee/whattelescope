import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// CSS to control the appearance of elements.
const yellow = "#F2C43C";
const grey = "#3F3E3A";
const coral = "#E0493E";
const red = "#D84E2F";
const darkBlue = "#08415C";

const myStyles = {
  text: {
    color: grey,
    fontFamily: '"AppleSDGothicNeo-UltraLight", "Arial"'
  }
};

// Stateless/Functional
const WTCheckbox = props => {
  // When using props to callback to the parent the function that's passed in is not the function
  // name inside the parent i.e. handleChange() but instead the name of the prop i.e. the
  // onChange event listener.
  // https://stackoverflow.com/
  // questions/52477888/react-call-props-function-inside-of-a-components-function
  return (
    <React.Fragment>
      <ListItem>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.checked}
              value={props.value}
              onChange={props.handleChange}
              id={props.id}
            />
          }
          label={props.label}
        />
      </ListItem>
    </React.Fragment>
  );
};

export { WTCheckbox };
