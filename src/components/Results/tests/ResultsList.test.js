import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { ResultsList } from "../index";

describe("ResultsList", () => {
  const props = {
    searchResults: {
      resultCount: "5",
      area: "some_postcode",
      listing: [
        {
          id: 1,
          store_code: "4036",
          open_status: "Open",
          store_type: "local",
          store_distance: "0.02 mi",
          store_name: "Fetter Lane Local",
          contact: {
            address1: "60 Fetter Lane"
          },
          opening_times: {
            monday: {
              start_time: "06:00",
              end_time: "23:00"
            }
          }
        }
      ]
    }
  };

  it("should display search results information", () => {
    const wrapper = shallow(<ResultsList {...props} />);
    const searchInfo = wrapper.find(".search-info").text();
    expect(searchInfo).toEqual('5 store have been found for "some_postcode"');
  });

  it("should display a StoreCard", () => {
    const wrapper = shallow(<ResultsList {...props} />);
    const storeCard = wrapper.find("StoreCard");
    expect(storeCard.length).toEqual(1);
  });

  it("should display a StoreCard with the correct props", () => {
    const wrapper = shallow(<ResultsList {...props} />);
    const storeCard = wrapper.find("StoreCard").first();
    expect(storeCard.prop("status")).toEqual("Open");
    expect(storeCard.prop("distance")).toEqual("0.02 mi");
    expect(storeCard.prop("name")).toEqual("Fetter Lane Local");
    expect(storeCard.prop("type")).toEqual("local");
    expect(storeCard.prop("code")).toEqual("4036");
    expect(storeCard.prop("contact")).toEqual({ address1: "60 Fetter Lane" });
    expect(storeCard.prop("openingTime")).toEqual({
      monday: {
        start_time: "06:00",
        end_time: "23:00"
      }
    });
  });
});
