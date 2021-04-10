import Table from "../../components/Table";
import { render, screen } from "@testing-library/react";
import { covidResponse } from "../mockData/covidResponse";

const props = {
  data: covidResponse,
};

describe("Table", () => {
  it("renders", () => {
    render(<Table {...props}></Table>);
  });

  it("finner table row med role name", () => {
    render(<Table {...props} />);

    const tr = screen.getByRole("row", { name: "Dato Registrert smittet" });

    expect(tr).toBeVisible();
  });

  it("finner table row med data-test id", () => {
    const { getByTestId } = render(<Table {...props} />);

    const table = getByTestId("covidTable");

    expect(table).toBeInTheDocument();
  });

  it("finner antall døde", () => {
    render(<Table {...props} />);

    //const confirmedDeathsCell = screen.getByRole("cell", { name: "57522" });
    const confirmedDeathsCell = screen.getByText("57522");
    expect(confirmedDeathsCell).toBeInTheDocument();
  });

  it("finner dato", () => {
    render(<Table {...props} />);

    const dateCell = screen.getByText("2021-01-14");
    expect(dateCell).toBeInTheDocument();
  });

  it("finner riktig dato", () => {
    // Todo: endre på dato i Props og sjekke at de finnes
  });

  it("finner riktig antall døde", () => {
    // Todo: endre på dato i Props og sjekke at de finnes
  });

  it("returnere riktig data etter søk", () => {
    // Todo: simuler klikk på Søk-knapp og sjekk for riktig dato og antall døde. Må mocke axios og bruke mockImplementationOnce på Get kall, så
    // den returnere ønsket respons
    //
  });
  it("viser riktig antall rader", () => {
    // Todo: getAllByRole("tr").count eller noe..
    //
  });
});
