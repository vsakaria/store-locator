import React, { PropTypes } from "react";
import { Router } from "react-router";
import { connect } from "react-redux";
import Toggle from "./common/Toggle";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: ""
    };
  }

  toBoolean(str) {
    return str == "true" ? true : false;
  }

  componentDidMount() {
    const toggleState = this.toBoolean(window.sessionStorage.getItem("hcm"));
    this.toggleHCM(toggleState);
  }

  toggleHCM = toggleState => {
    const display = toggleState ? "high-contrast-mode" : "";
    window.sessionStorage.setItem("hcm", toggleState);
    this.setState({ display: display });
  };

  render() {
    return (
      <section className={this.state.display + ` container-fluid main`}>
        <Toggle
          description="Toggle to enter High contrast mode"
          toggleHandler={this.toggleHCM}
        />{" "}
        {this.props.children}
      </section>
    );
  }
}

App.propTypes = {};

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(App);
