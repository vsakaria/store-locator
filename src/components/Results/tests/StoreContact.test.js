import expect from "expect";
import React from "react";
import { shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import StoreContact from "../StoreContact";

function setup() {
  let props = {
    name: "some_name",
    type: "some_type",
    code: "0001",
    contact: {
      address1: "line_1",
      address2: "line2",
      city: "some_city",
      post_code: "some_pc",
      telephone: "020111111111"
    }
  };

  return shallow(<StoreContact {...props} />);
}

describe("StoreContact", () => {
  it("should render the correct props for address", () => {
    const wrapper = setup();
    const texts = wrapper
      .find(".address")
      .children()
      .map(node => node.text());
    expect(texts).toEqual(["line_1", "line2", "some_city", "some_pc"]);
  });

  it("should render the correct href for the title", () => {
    const wrapper = setup();
    const link = wrapper.find(".store-name").prop("href");
    expect(link).toEqual("https://stores.sainsburys.co.uk/0001/some_name");
  });

  //Could have test all the rendered props here, very similar to the first test, but time was pressing
});
