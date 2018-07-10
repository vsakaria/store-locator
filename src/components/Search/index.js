import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import TextInput from "../common/TextInput";
import * as searchActions from "../../actions/searchActions";
import { selectors as searchResultSelector } from "../../reducers/index";
import { browserHistory } from "react-router";

// import searchIcon from "../../assets/search-icon.svg";

export class SearchPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { postcode: "", message: "Search for stores", subMessage: "" };
  }

  componentDidUpdate(nextProp) {
    if (nextProp.resultsFound !== this.props.resultsFound) {
      this.props.resultsFound
        ? this.redirectTo("/results")
        : this.showNoResults();
    }
  }

  onChange = event => {
    const postcode = event.target.value;
    this.props.actions.saveSearchCriteria(postcode);
  };

  triggerSearch = event => {
    this.props.actions.loadSearchResults(this.props.postcode);
  };

  redirectTo(page) {
    browserHistory.push(page);
  }

  showNoResults() {
    this.setState({
      message: "No results found",
      subMessage: "Enter another location and search again"
    });
  }

  /*I had to temp add the SVG as a data encoded string because
    an svg import broke the mocha tests. The fix would be to configure the
    Mocha environemnt.
  */

  render() {
    return (
      <section className="search-container">
        <TextInput
          name="Search for stores"
          label={this.state.message}
          subLabel={this.state.subMessage}
          onChange={this.onChange}
          placeholder="Search"
          className="search-box col-xs-10"
        />
        <button
          className="col-xs-1"
          type="submit"
          role="button"
          aria-label="button"
          onClick={this.triggerSearch}
        >
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjIgKDQ0NDk2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY19zZWFyY2g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikljb24tU2VhcmNoIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iaWNfc2VhcmNoIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS4yMDcxMDY4LDE3Ljc5Mjg5MzIgTDEzLjE5NjY5OTEsMTEuNzgyNDg1NiBDMTIuODA2MTc0OCwxMS4zOTE5NjEzIDEyLjE3MzAwOTksMTEuMzkxOTYxMyAxMS43ODI0ODU2LDExLjc4MjQ4NTYgQzExLjM5MTk2MTMsMTIuMTczMDA5OSAxMS4zOTE5NjEzLDEyLjgwNjE3NDggMTEuNzgyNDg1NiwxMy4xOTY2OTkxIEwxNy43OTI4OTMyLDE5LjIwNzEwNjggQzE4LjE4MzQxNzUsMTkuNTk3NjMxMSAxOC44MTY1ODI1LDE5LjU5NzYzMTEgMTkuMjA3MTA2OCwxOS4yMDcxMDY4IEMxOS41OTc2MzExLDE4LjgxNjU4MjUgMTkuNTk3NjMxMSwxOC4xODM0MTc1IDE5LjIwNzEwNjgsMTcuNzkyODkzMiBaIiBpZD0ic2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LjUsMTMgQzEwLjUzNzU2NjEsMTMgMTMsMTAuNTM3NTY2MSAxMyw3LjUgQzEzLDQuNDYyNDMzODggMTAuNTM3NTY2MSwyIDcuNSwyIEM0LjQ2MjQzMzg4LDIgMiw0LjQ2MjQzMzg4IDIsNy41IEMyLDEwLjUzNzU2NjEgNC40NjI0MzM4OCwxMyA3LjUsMTMgWiBNNy41LDE1IEMzLjM1Nzg2NDM4LDE1IDAsMTEuNjQyMTM1NiAwLDcuNSBDMCwzLjM1Nzg2NDM4IDMuMzU3ODY0MzgsMi43NzU1NTc1NmUtMTcgNy41LDIuNzc1NTU3NTZlLTE3IEMxMS42NDIxMzU2LDIuNzc1NTU3NTZlLTE3IDE1LDMuMzU3ODY0MzggMTUsNy41IEMxNSwxMS42NDIxMzU2IDExLjY0MjEzNTYsMTUgNy41LDE1IFoiIGlkPSJzaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
            alt="Search button click to search"
          />
        </button>
      </section>
    );
  }
}

SearchPage.propTypes = {
  postcode: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  postcode: state.searchCriteria.search,
  resultsFound: state.searchResults.resultCount
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
