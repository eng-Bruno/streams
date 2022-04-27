import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "437647129407-n0gqr675bt2306tp2ep2u10h4kcghu3n.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>;
    } else if (this.state.isSignedIn === true) {
      return <div>I am signed in!</div>;
    } else {
      return <div>I am not signed in!</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;

/* AUTH COMPONENT:
 * -> Get a reference to the 'auth' object after it is initialized
 * -> Figure out if the user is currently signed in
 * -> Print their authentication status on the screen
 */
