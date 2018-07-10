//This is a combinder for multiple reducers
import { combineReducers } from "redux";

export function searchResults(state = {}, action) {
  switch (action.type) {
    case "LOAD_SEARCH_SUCCESS":
      return {
        resultCount: action.stores.result_count,
        area: action.stores.area,
        listing: action.stores.listing
      };
    case "LOAD_SEARCH_FAIL":
      return {
        resultCount: false
      };
    default:
      return state;
  }
}

export function searchCriteria(state = {}, action) {
  switch (action.type) {
    case "SAVE_SEARCH_CRITERIA":
      return {
        search: action.postcode
      };
    default:
      return state;
  }
}

export default combineReducers({ searchResults, searchCriteria });

//SELECTORS
const enrichSearchResults = searchResults => {
  const enrichedListings = searchResults.listing.map(store => ({
    ...store,
    store_distance: parseFloat(store.store_distance).toFixed(2) + " mi"
  }));

  return {
    ...searchResults,
    listing: enrichedListings
  };
};

export const selectors = { enrichSearchResults };
