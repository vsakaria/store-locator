import expect from "expect";
import React from "react";
import { shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import StoreExtraDetails from "../StoreExtraDetails";

function setup() {
  let props = {
    status: "open",
    distance: "0.02 mi"
  };

  return shallow(<StoreExtraDetails {...props} />);
}

describe("StoreExtraDetails", () => {
  it("should render the correct props for distance", () => {
    const wrapper = setup();
    const texts = wrapper
      .find(".extra-details")
      .children()
      .map(node => node.text());
    expect(texts).toEqual(["open", "0.02 mi"]);
  });
});
