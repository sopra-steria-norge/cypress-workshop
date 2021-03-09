import React, { ChangeEvent, useEffect, useState } from 'react';
import useAxios from 'axios-hooks'
import './App.css';

interface CountryStats {
  confirmed: number,
  deaths: number
};

const App = () => {
  const [country, setCountry] = useState('');
  const [totalStats, setTotalStats] = useState<CountryStats>({
    confirmed: 0,
    deaths: 0
  });

  const [{ data }, refetch] = useAxios(
    `https://api.covid19api.com/live/country/${country}/status/confirmed`,
    {manual: true}
  )

  useEffect(() => {
    var newTotalStats = {
      confirmed: 0,
      deaths: 0
    };

    data?.forEach(status => {
      if(new Date(status?.Date)?.toLocaleDateString() === new Date().toLocaleDateString()) {
        newTotalStats.confirmed += status.Confirmed;
        newTotalStats.deaths += status.Deaths;
      }
    });

    setTotalStats(newTotalStats);
  }, [data]);

  return (
    <div className="app">
      <h1 className="header">Covid-19 statistikk</h1>
      <div className="content">
        <div className="country-block">
          <div>
            <label>Land:</label>
            <span>
              <input type="text" value={country} onChange={(event: ChangeEvent<HTMLInputElement>) => setCountry(event.currentTarget.value)}/>
            </span>
          </div>
          <div>
            <button onClick={() => refetch()}>Søk</button>
          </div>
        </div>
        {data &&
          <div className="covid-statistics">
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
            <table className="covid-table-statistics">
              <thead>
                <tr>
                  <th>Dato</th>
                  <th>Registrert smittet</th>
                </tr>
              </thead>
              <tbody>
                {data?.map(( status, index ) => {
                  return (
                    <tr key={index}>
                      <td>{new Date(status.Date).toLocaleDateString("no-NO")}</td>
                      <td>{status.Confirmed}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        }
      </div>
  </div>
  );
}

export default App;
