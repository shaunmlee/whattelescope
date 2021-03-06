import React, { Component } from "react";
import { SiteLayout } from "./siteLayout";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ReactGA from "react-ga";
import "typeface-roboto";

const yellow = "#F2C43C";
const lightGrey = "#F2EFF0";

function initializeReactGA() {
  ReactGA.initialize("UA-143338995-1");
  ReactGA.pageview("/homepage");
}

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = api => e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        <button onClick={this.handleClick("hello")}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>
        <button onClick={this.handleClick("async-dadjoke")}>
          {loading ? "Loading..." : "Call Async Lambda"}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    background: { paper: lightGrey, default: yellow }
  },

  typography: {
    // fontFamily: '"AppleSDGothicNeo-UltraLight", "Roboto Light", "Arial"'
    // fontFamily: '"AppleSDGothicNeo-UltraLight", "Open Sans", "Arial"'
    // fontFamily: '"AppleSDGothicNeo-UltraLight", "Arial"'
    // fontFamily: '"Roboto", "Arial"'
    fontFamily: '"Open Sans", sans-serif',
    // fontFamily: '"Roboto"',
    body1: {
      fontWeight: 300
    },
    body2: {
      fontWeight: 700
    },
    h4: {
      fontWeight: 300
    },
    caption: {
      fontWeight: 300
    },
    h5: {
      fontWeight: 300
    }
  }
});

export class ThemedSite extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SiteLayout />
        </ThemeProvider>
        {initializeReactGA};
      </React.Fragment>
    );
  }
}
