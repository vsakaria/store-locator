import expect from "expect";
import React from "react";
import { shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import StoreManager from "../StoreManager";

function setup() {
  let props = {
    manager: "some_manager",
    telephone: "000001100000"
  };

  return shallow(<StoreManager {...props} />);
}

describe("StoreManager", () => {
  it("should render the correct props for telephone", () => {
    const wrapper = setup();
    const texts = wrapper
      .find(".telephone")
      .children()
      .map(node => node.text());
    expect(texts).toEqual(["Contact", "000001100000"]);
  });

  it("should render the correct props for telephone", () => {
    const wrapper = setup();
    const texts = wrapper
      .find(".staff")
      .children()
      .map(node => node.text());
    expect(texts).toEqual(["Manager", "some_manager"]);
  });
});
