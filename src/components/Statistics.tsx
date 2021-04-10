import React from "react";
import "../App.css";

interface Props {
  totalStats: {
    confirmed: number;
    deaths: number;
  };
}
const Statistics: React.FC<Props> = ({ totalStats }) => {
  return (
    <div className="covid-total-statistics">
      <div className="statistic-block">
        <label>Registrert smittet</label>
        <div>{totalStats.confirmed.toLocaleString()}</div>
      </div>
      <div className="statistic-block">
        <label>Døde</label>
        <div>{totalStats.deaths.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default Statistics;
