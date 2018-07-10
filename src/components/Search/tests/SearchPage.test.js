import React from "react";
import expect, { createSpy, spyOn, isSpy } from "expect";
import { mount } from "enzyme";
import { SearchPage } from "../index";

describe("SearchPage", () => {
  const spyOn = expect.spyOn;
  const props = {
    postcode: "some_post_code",
    resultsFound: "3",
    actions: {
      saveSearchCriteria: () => Promise.resolve(),
      loadSearchResults: () => Promise.resolve()
    }
  };

  it("should construct a Search Page with init state", () => {
    const wrapper = mount(<SearchPage {...props} />);

    expect(wrapper.state()).toEqual({
      postcode: "",
      message: "Search for stores",
      subMessage: ""
    });
  });

  it("should create an input field", () => {
    const wrapper = mount(<SearchPage {...props} />);
    const inputField = wrapper.find("input").last();

    expect(inputField.prop("type")).toBe("text");
  });

  it("should update the store with the entered postcode", () => {
    const wrapper = mount(<SearchPage {...props} />);

    const saveSearchCriteria = spyOn(
      wrapper.props().actions,
      "saveSearchCriteria"
    );

    const inputField = wrapper.find("input").last();
    const event = { target: { value: "some_other_pc" } };
    inputField.simulate("change", event);

    expect(saveSearchCriteria).toHaveBeenCalledWith("some_other_pc");
  });

  it("should trigger a search request", () => {
    const wrapper = mount(<SearchPage {...props} />);

    const loadSearchResults = spyOn(
      wrapper.props().actions,
      "loadSearchResults"
    );

    const button = wrapper.find("button").last();
    button.simulate("click");

    expect(loadSearchResults).toHaveBeenCalledWith("some_post_code");
  });

  it('should display "No results found" when no stores are found', () => {
    props.resultsFound = false;

    const wrapper = mount(<SearchPage {...props} />);
    const showNoResults = spyOn(wrapper.instance(), "showNoResults");

    wrapper.instance().componentDidUpdate({ resultsFound: undefined });
    expect(showNoResults).toHaveBeenCalled();
  });

  it("should redirect to the results page if there are results", () => {
    props.resultsFound = "5";

    const wrapper = mount(<SearchPage {...props} />);
    const redirectTo = spyOn(wrapper.instance(), "redirectTo");

    wrapper.instance().componentDidUpdate({ resultsFound: undefined });
    expect(redirectTo).toHaveBeenCalledWith("/results");
  });
});
