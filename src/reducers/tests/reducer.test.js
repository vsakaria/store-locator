import expect from "expect";
import reducer, { selectors as searchResultSelectors } from "../index";
import * as actions from "../../actions/searchActions";

describe("Search Reducer", () => {
  it("should add a list of stores and meta data when LOAD_SEARCH_SUCCESS", () => {
    // arrange
    const initialState = {};

    const stores = {
      result_count: "5",
      area: "some_area",
      listing: [{ some_listing: "data" }]
    };

    const action = actions.loadSearchResultsSuccess(stores);

    // act
    const newState = reducer(initialState, action);

    // assert
    expect(newState.searchResults.resultCount).toEqual(stores.result_count);
    expect(newState.searchResults.area).toEqual(stores.area);
    expect(newState.searchResults.listing).toEqual(stores.listing);
  });

  it("should set resultCount to false when LOAD_SEARCH_FAIL", () => {
    const initialState = {};

    const action = actions.loadSearchResultsFail();

    const newState = reducer(initialState, action);

    expect(newState.searchResults.resultCount).toBeFalsy();
  });

  it("should save the entered postcode when SAVE_SEARCH_CRITERIA", () => {
    const initialState = {};

    const search = {
      postcode: "some_area"
    };
    const action = actions.saveSearchCriteriaLoading(search);
    const newState = reducer(initialState, action);
    expect(newState.searchCriteria.search.postcode).toEqual(search.postcode);
  });
});

describe("Selectors", () => {
  it("should update the data to display the store distance in 'X.X mi' format", () => {
    const stores = {
      result_count: 5,
      area: "EC1N 2HT",
      listing: [
        {
          id: 1,
          store_code: "4036",
          open_status: "Open",
          store_type: "local",
          store_distance: "0.02369926238899276",
          store_name: "Fetter Lane Local"
        }
      ]
    };

    const enrichedData = searchResultSelectors.enrichSearchResults(stores);

    expect(enrichedData.listing[0].store_distance).toEqual("0.02 mi");
  });
});
