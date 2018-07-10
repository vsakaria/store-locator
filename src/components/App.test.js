import React from "react";
import expect, { createSpy, spyOn, isSpy } from "expect";
import { mount } from "enzyme";
import { App } from "./App";

global.window = {};
import sessionStorage from "mock-local-storage";
window.sessionStorage = global.sessionStorage;

describe("App", () => {
  const spyOn = expect.spyOn;

  it("should construct a Search Page with init state", () => {
    const wrapper = mount(<App />);

    expect(wrapper.state()).toEqual({
      display: ""
    });
  });

  it("should return a boolean true based on a string 'true'", () => {
    const wrapper = mount(<App />);
    const boolean = wrapper.instance().toBoolean("true");

    expect(boolean).toBe(true);
  });

  it("should return a boolean false based on a string 'false'", () => {
    const wrapper = mount(<App />);
    const boolean = wrapper.instance().toBoolean("false");

    expect(boolean).toBe(false);
  });

  it("should set the session storage and display the correct contast mode on toggle", () => {
    const wrapper = mount(<App />);

    const toggleHCM = spyOn(wrapper.instance(), "toggleHCM");

    wrapper.instance().componentDidMount();

    expect(toggleHCM).toHaveBeenCalledWith(false);
  });
});
