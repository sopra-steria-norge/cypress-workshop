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

  it("finds table row by role name", () => {
    render(<Table {...props}></Table>);
    const tr = screen.getByRole("row", { name: "Dato Registrert smittet" });
    expect(tr).toBeVisible();
  });

  it("finds table row by data test id", () => {
    const { getByTestId } = render(<Table {...props}></Table>);
    expect(getByTestId("covidTable")).toBeInTheDocument();
  });
});
