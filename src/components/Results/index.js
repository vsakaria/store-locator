import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectors as searchResultSelectors } from "../../reducers";
import StoreCard from "./StoreCard";

export class ResultsList extends React.Component {
  buildSearchCards = listing =>
    listing.map(store => {
      return (
        <StoreCard
          key={store.id}
          status={store.open_status}
          distance={store.store_distance}
          name={store.store_name}
          type={store.store_type}
          code={store.store_code}
          contact={store.contact}
          openingTime={store.opening_times}
        />
      );
    });

  render() {
    const { resultCount, area, listing } = this.props.searchResults;
    return (
      <section>
        <div className="search-info">
          {resultCount} store have been found for "{area}"
        </div>
        {this.buildSearchCards(listing)}
      </section>
    );
  }
}

ResultsList.propTypes = {
  searchResults: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  searchResults: searchResultSelectors.enrichSearchResults(state.searchResults)
});

export default connect(mapStateToProps)(ResultsList);
