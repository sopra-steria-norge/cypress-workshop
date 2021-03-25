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
        <div>Registrert smittet</div>
        <div>{totalStats.confirmed.toLocaleString()}</div>
      </div>
      <div className="statistic-block">
        <div>Døde</div>
        <div>{totalStats.deaths.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default Statistics;
