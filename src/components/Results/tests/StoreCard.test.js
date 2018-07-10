import expect from "expect";
import React from "react";
import { shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import StoreCard from "../StoreCard";

function setup() {
  let props = {
    status: "open",
    distance: "0.01 mi",
    name: "some_name",
    type: "some_type",
    code: "0001",
    contact: { some_contact: "object" },
    openingTime: { some_opening: "object" }
  };

  return shallow(<StoreCard {...props} />);
}

describe("StoreCard", () => {
  it("should contain the child cards", () => {
    const wrapper = setup();
    expect(wrapper.find("StoreContact").length).toEqual(1);
    expect(wrapper.find("StoreManager").length).toEqual(1);
    expect(wrapper.find("StoreOpeningTimes").length).toEqual(1);
    expect(wrapper.find("StoreExtraDetails").length).toEqual(1);
  });
});
