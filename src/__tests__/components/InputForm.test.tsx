import { screen, render } from "@testing-library/react";
import React from "react";
import InputForm from "../../components/InputForm";

const props = {
  setCountry: jest.fn(),
  refetch: jest.fn(),
  handleKeyPress: jest.fn(),
  country: "Norge",
};

describe("InputForm", () => {
  it("renders", () => {
    render(<InputForm {...props} />);
  });

  it("kaller setCountry", () => {
    //TODO simulere change i input-felt og sjekk for toHaveBeenCalled, og evt. tohaveBeenCalledTimes(1)
  });

  it("kaller refetch", () => {
    // Todo: samme som over. Kanskje rename refetch til searchCountry?
    render(<InputForm {...props} />);
  });

  // Optional
  it("kaller refetch ved keypress", () => {
    // todo: simulere Enter keypress
    render(<InputForm {...props} />);
  });
});
