import React from "react";
import { CovidResponseType } from ".././types/covidResponseType";

interface Props {
  data: CovidResponseType[];
}

const Table: React.FC<Props> = ({ data }) => {
  return (
    <table className="covid-table-statistics" data-testid="covidTable">
      <thead>
        <tr>
          <th>Dato</th>
          <th>Registrert smittet</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((status, index) => {
          return (
            <tr key={index}>
              <td>{new Date(status.Date).toISOString().slice(0, 10)}</td>
              <td>{status.Confirmed}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
