import Table from "../../components/Table";
import { render, screen } from "@testing-library/react";
import { covidResponse } from "../mockData/covidResponse";

const props = {
  data: covidResponse,
};

describe("Table", () => {
  const setup = (newProps) => {
    return render(<Table {...newProps}></Table>);
  };

  it("should render", () => {
    setup(props);
  });

  it("should display table row with correct role name", () => {
    setup(props);

    const tr = screen.getByRole("row", { name: "Dato Registrert smittet" });

    expect(tr).toBeVisible();
  });

  it("should display table row with data-test id", () => {
    const { getByTestId } = setup(props);

    const table = getByTestId("covidTable");

    expect(table).toBeInTheDocument();
  });

  it("should display number of confirmed death", () => {
    setup(props);

    //const confirmedDeathsCell = screen.getByRole("cell", { name: "57522" });
    const confirmedDeathsCell = screen.getByText("57522");
    expect(confirmedDeathsCell).toBeInTheDocument();
  });

  it("should display date", () => {
    setup(props);

    const dateCell = screen.getByText("2021-01-14");
    expect(dateCell).toBeInTheDocument();
  });

  it("should display the changed dates", () => {
    const firstNewDateValue = "2021-03-03";
    const lastNewDateValue = "2021-04-04";

    let changedProps = props;
    changedProps.data[0].Date = new Date(firstNewDateValue).toString();
    changedProps.data[1].Date = new Date(lastNewDateValue).toString();

    setup(changedProps);

    expect(screen.getByText(firstNewDateValue)).toBeInTheDocument();
    expect(screen.getByText(lastNewDateValue)).toBeInTheDocument();
  });

  //This two tests should probably be tests for InputForm or App since the Table component dont know anything about the InputForm?
  it("finner riktig antall døde", () => {
    // Todo: endre på dato i Props og sjekke at de finnes
  });

  it("returnere riktig data etter søk", () => {
    // Todo: simuler klikk på Søk-knapp og sjekk for riktig dato og antall døde. Må mocke axios og bruke mockImplementationOnce på Get kall, så
    // den returnere ønsket respons
    //
  });

  it("should display correct number of rows", () => {
    setup(props);

    const tableCells = screen.getAllByRole('row');
    expect(tableCells.length).toEqual(3);
  });
});
