import expect from "expect";
import * as searchActions from "./searchActions";

import thunk from "redux-thunk";
import configuireMockStore from "redux-mock-store";
import { debug } from "util";

describe("Search Actions", () => {
  it("should create a LOAD_SEARCH_SUCCESS action", () => {
    const expectedAction = {
      type: "LOAD_SEARCH_SUCCESS",
      stores: { stores: "store1" }
    };

    const action = searchActions.loadSearchResultsSuccess({
      stores: "store1"
    });

    expect(action).toEqual(expectedAction);
  });

  it("should create a LOAD_SEARCH_FAIL action", () => {
    const expectedAction = {
      type: "LOAD_SEARCH_FAIL"
    };

    const action = searchActions.loadSearchResultsFail();

    expect(action).toEqual(expectedAction);
  });

  it("should create a SAVE_SEARCH_CRITERIA action", () => {
    const expectedAction = {
      type: "SAVE_SEARCH_CRITERIA",
      postcode: "some_pc"
    };

    const action = searchActions.saveSearchCriteriaLoading("some_pc");

    expect(action).toEqual(expectedAction);
  });
});

const middleware = [thunk];
const mockStore = configuireMockStore(middleware);

describe("Aysnc Actions", () => {
  it("should dispatch the correct actions on loadSearchResults", done => {
    const store = mockStore({ searchResults: {} });

    store.dispatch(searchActions.loadSearchResults("EC1N 2HT")).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toBe("LOAD_SEARCH_SUCCESS");
    });

    done();
  });

  it("should dispatch the correct actions on loadSearchResults fails", done => {
    const store = mockStore({ searchResults: {} });

    store
      .dispatch(searchActions.loadSearchResults("some_other_postcode"))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual("LOAD_SEARCH_FAIL");
      });

    done();
  });

  it("should dispatch the correct actions on saveSearchCriteria", () => {
    const store = mockStore({ searchResults: {} });
    store.dispatch(searchActions.saveSearchCriteria("some_postcode"));
    const actions = store.getActions();
    expect(actions[0].type).toEqual("SAVE_SEARCH_CRITERIA");
  });
});

//arrange
//act
//Assert

//Given
//When
//Then
