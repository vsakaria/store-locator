import mockApi from "../api/mockApi";

export function loadSearchResultsSuccess(stores) {
  return { type: "LOAD_SEARCH_SUCCESS", stores };
}

export function loadSearchResultsFail() {
  return { type: "LOAD_SEARCH_FAIL" };
}

export function saveSearchCriteriaLoading(postcode) {
  return { type: "SAVE_SEARCH_CRITERIA", postcode };
}

export function loadSearchResults(postcode) {
  return function(dispatch) {
    return mockApi
      .getStoresByPostCode(postcode)
      .then(stores => {
        if (stores.result_count) {
          dispatch(loadSearchResultsSuccess(stores));
        } else {
          dispatch(loadSearchResultsFail());
        }
      })
      .catch(err => {
        throw err;
      });
  };
}

export function saveSearchCriteria(postcode) {
  return function(dispatch) {
    return dispatch(saveSearchCriteriaLoading(postcode));
  };
}
