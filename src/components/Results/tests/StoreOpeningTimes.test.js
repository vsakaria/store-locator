import expect from "expect";
import React from "react";
import { shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import StoreOpeningTimes from "../StoreOpeningTimes";

function setup() {
  let props = {
    times: {
      monday: {
        start_time: "06:00",
        end_time: "23:00"
      },
      tuesday: {
        start_time: "06:00",
        end_time: "23:00"
      }
    }
  };

  return shallow(<StoreOpeningTimes {...props} />);
}

describe("StoreOpeningTimes", () => {
  it("should render the correct props for opening times", () => {
    const wrapper = setup();
    const texts = wrapper
      .find(".row")
      .children()
      .map(node => node.text());
    expect(texts).toEqual([
      "monday",
      "06:00 - 23:00",
      "tuesday",
      "06:00 - 23:00"
    ]);
  });
});
