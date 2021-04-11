import { render, act, fireEvent } from "@testing-library/react";
import InputForm from "../../components/InputForm";

const inputLabel = "country name";
const buttonLabel = "search country";

const props = {
  setCountry: jest.fn(),
  searchCountry: jest.fn(),
  handleKeyPress: jest.fn(),
  country: "",
};

describe("InputForm", () => {
  const setup = () => {
    return render(<InputForm {...props} />);
  };

  it("should render", () => {
    setup();
  });

  it("should call setCountry one time when input is changed", () => {
    const inputForm = setup();
    const input = inputForm.getByLabelText(inputLabel);
    
    act(() => {
      fireEvent.change(input, {target: { value: 'Norway' }});
    });

    expect(props.setCountry).toHaveBeenCalled();
    expect(props.setCountry).toHaveBeenCalledTimes(1);
  });

  it("should call searchCountry one time when button is clicked", () => {
    const inputForm = setup();
    const input = inputForm.getByLabelText(inputLabel);
    const button = inputForm.getByLabelText(buttonLabel);
    
    act(() => {
      fireEvent.change(input, {target: { value: 'Norway' }});
      fireEvent.click(button);
    });

    expect(props.searchCountry).toHaveBeenCalled();
    expect(props.searchCountry).toHaveBeenCalledTimes(1);
  });

  it("finner ingen resultater hvis man skriver inn blankt eller ikke riktig land", () => {
    // Kunne vurdert å lage en simpel komponent som viser en feilmelding/infomelding ved 0 treff og heller sjekke at den blir vist?
    render(<InputForm {...props} />);
  });

  // Optional
  it("kaller refetch ved keypress", () => {
    // todo: simulere Enter keypress
    render(<InputForm {...props} />);
  });
});
