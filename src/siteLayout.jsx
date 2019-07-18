// Container class to render the webpage in function if not yet
// design. Needs to include the logic for displaying matching telescopes.

import React from "react";
import List from "@material-ui/core/List";
import { createScopes } from "./createTelescopes";

import Container from "@material-ui/core/Container";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { WTCheckbox } from "./wtCheckbox";
import { ShowResults } from "./showResults";

// CSS to control the appearance of elements.
const yellow = "#F2C43C";
const grey = "#3F3E3A";
const coral = "#E0493E";
const red = "#D84E2F";
const darkBlue = "#08415C";

const myStyles = {
  heading: {
    color: grey,
    textDecoration: `underline ${darkBlue}`,
    backgroundColor: yellow,
    flexGrow: 1
  },
  container: {
    backgroundColor: yellow,
    color: grey
  }
};

export class SiteLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scopeList: createScopes(),
      matchingScopes: [],
      stepTitles: ["What do you want to view?", "Size", "Budget"],
      checkboxTitles: [
        ["Planets + Moon", "Galaxies + Nebulae", "Wildlife"],
        ["Backpack", "Tabletop", "Tripod", "Free-standing"],
        ["Less than £100", "£100-£250", "£250-500", "£500+"]
      ],
      checkList: [
        [false, false, false],
        [false, false, false, false],
        [false, false, false, false]
      ],
      expanded: "panel0"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleExpansion = this.handleExpansion.bind(this);
    this.getCheck = this.getCheck.bind(this);
    this.updateMatches = this.updateMatches.bind(this);
  }

  updateMatches() {
    // We have the array of what is checked or not. We need to convert that into a filter to
    // create the matching scopes.
    // aperture
    // size
    // price
    // Look at all the parts that are true and see what that equates to

    let newMatchingScopes = this.state.scopeList.slice();

    // *****************
    // Simple filtering for what you want to see as it's a compound
    // filter regarding aperture and scope type.
    // *****************
    // Planets + Moon
    if (this.state.checkList[0][0]) {
      newMatchingScopes = newMatchingScopes.filter(
        scope => scope.aperture >= 0
      );
    }

    // Galaxies + Nebulae
    if (this.state.checkList[0][1]) {
      newMatchingScopes = newMatchingScopes.filter(
        scope => scope.aperture >= 8
      );
    }
    // Wildlife
    if (this.state.checkList[0][2]) {
      newMatchingScopes = newMatchingScopes.filter(
        scope => scope.type === "cassergrain" || scope.type === "refractor"
      );
    }

    // *****************
    // need an OR filter for the size
    // Want to create sublists and then concat all the resutlts into one.
    // This has the effect of an OR filter as opposed to AND.
    // *****************
    let newList = [];
    for (let i = 0; i < this.state.checkList[1].length; i++) {
      // See which box is checked
      if (this.state.checkList[1][i]) {
        // Create a temp list that stores the filtering of one size type.
        let tempList = newMatchingScopes.filter(
          scope => scope.size === this.state.checkboxTitles[1][i].toLowerCase()
        );
        // if there was a result then this can be put into the new list
        if (tempList.length > 0) {
          tempList.map(item => newList.push(item));
        }
      }
    }
    // Once checked all the size checkboxes we have effetively filtered the
    // list again so assign this back to matchingScopes.
    // Need to only do if at least one of the options was selected otherwise
    // nothing will show.
    if (this.state.checkList[1].some(value => value === true))
      newMatchingScopes = newList;

    // *****************
    // Same as above for the pricing
    // *****************
    newList = [];
    for (let i = 0; i < this.state.checkList[2].length; i++) {
      // See which box is checked
      if (this.state.checkList[2][i]) {
        let tempList = [];

        if (i === 0) {
          tempList = newMatchingScopes.filter(scope => scope.price <= 100);
          console.log(tempList);
        }

        if (i === 1) {
          tempList = newMatchingScopes.filter(
            scope => scope.price > 100 && scope.price <= 250
          );
          console.log(tempList);
        }

        if (i === 2) {
          tempList = newMatchingScopes.filter(
            scope => scope.price > 250 && scope.price <= 500
          );
          console.log(tempList);
        }

        if (i === 3) {
          tempList = newMatchingScopes.filter(scope => scope.price >= 500);

          console.log(tempList);
        }

        // if there was a result then this can be put into the new list
        if (tempList.length > 0) {
          tempList.map(item => newList.push(item));
        }
        console.log(newList);
      }
    }
    // Once checked all the size checkboxes we have effetively filtered the
    // list again so assign this back tp matchingScopes.
    // Need to only do if at least one of the options was selected otherwise
    // nothing will show.
    if (this.state.checkList[2].some(value => value === true))
      newMatchingScopes = newList;

    this.setState({ matchingScopes: newMatchingScopes });
  }

  handleChange(event) {
    //   For some reason it returns the comma separating the two values
    let [stepIdx, mid, index] = event.target.value;
    let newList = this.state.checkList.slice();
    let currentChecked = this.state.checkList[stepIdx][index];
    let newChecked = !currentChecked;
    newList[stepIdx][index] = newChecked;
    this.setState({ checkList: newList });

    this.updateMatches();
  }

  handleExpansion = panel => (event, isExpanded) => {
    this.setState({
      expanded: isExpanded ? panel : false
    });
  };

  getCheck = (stepIdx, idx) => {
    switch (stepIdx) {
      case 0:
        return this.state.whatSeeChecklist[idx];
      case 1:
        return this.state.sizeChecklist[idx];
      case 2:
        return this.state.priceChecklist[idx];
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* ***** 
          Title
         **** */}
        <Container maxWidth="lg" style={{ paddingTop: 20 }}>
          <Typography variant={"h4"} style={myStyles.heading}>
            WhatTelescope
          </Typography>
        </Container>

        {/* ***** 
          Introduction text
         **** */}
        <Container maxWidth="md">
          <Typography>
            <p>Buying a telescope is confusing.</p>
            <p>
              Whether it's deciding which is the best first telescope or you're
              shopping for an upgrade, the choices out there can be
              overwhelming.
            </p>
            <p>
              We've created a simple tool to help you choose your perfect
              telescope.
            </p>
            <p>
              Select the type of objects you want to view, the size of the
              telescope and your budget and get custom results that fit your
              needs.
            </p>
            <p>Try it below.</p>
          </Typography>

          {/* ***** 
          Create expansion panel steps
          **** */}
          {this.state.stepTitles.map((title, stepIdx) => {
            const panelName = `panel${stepIdx}`;

            return (
              <ExpansionPanel
                expanded={this.state.expanded === panelName}
                onChange={this.handleExpansion(panelName)}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${panelName}bh-content`}
                  id={`${panelName}bh-header`}
                >
                  <Typography
                    style={{ fontWeight: "bold", paddingRight: 5 }}
                  >{`${stepIdx + 1}. `}</Typography>
                  <Typography>{`${title}`}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails color="secondary">
                  <Typography>
                    {/* ****
                    Create checkboxes 
                    **** */}
                    <List>
                      {this.state.checkboxTitles[stepIdx].map(
                        (trueFalse, idx) => {
                          return (
                            <WTCheckbox
                              handleChange={this.handleChange}
                              checked={this.state.checkList[stepIdx][idx]}
                              value={[stepIdx, idx]}
                              label={this.state.checkboxTitles[stepIdx][idx]}
                            />
                          );
                        }
                      )}
                    </List>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            );
          })}

          {/* ****
          Show the results. Tell user if no matches 
          **** */}
          <Typography variant="h4">
            <br />
            Matching telescopes
          </Typography>
          <div style={{ paddingBottom: "100px" }}>
            <ShowResults
              scopes={this.state.matchingScopes}
              checkedList={this.state.checkList}
            />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
