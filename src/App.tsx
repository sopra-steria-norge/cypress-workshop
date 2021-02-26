import React, { ChangeEvent, useEffect, useState } from 'react';
import useAxios from 'axios-hooks'
import './App.css';

interface CountryStats {
  confirmed: number,
  deaths: number,
  recovered: number,
  active: number
}

const App = () => {
  const [country, setCountry] = useState('');
  const [totalStats, setTotalStats] = useState<CountryStats>({
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    active: 0
  });

  const [{ data, loading, error }, refetch] = useAxios(
    `https://api.covid19api.com/live/country/${country}/status/confirmed`,
    {manual: true}
  )

  useEffect(() => {
    var newTotalStats = {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
      active: 0
    };

    data?.forEach(status => {
      if(new Date(status?.Date)?.toLocaleDateString() === new Date().toLocaleDateString()) {
        newTotalStats.confirmed += status.Confirmed;
        newTotalStats.deaths += status.Deaths;
        newTotalStats.recovered += status.Recovered;
        newTotalStats.active += status.Active;
      }
    });

    setTotalStats(newTotalStats);
  }, [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div className="app">
      <div className="country-block">
        <div>
          <label>Country:</label>
          <span>
            <input type="text" value={country} onChange={(event: ChangeEvent<HTMLInputElement>) => setCountry(event.currentTarget.value)}/>
          </span>
        </div>
        <div>
          <button onClick={() => refetch()}>Søk</button>
        </div>
      </div>
      <div className="covid-statistics">
        <ul>
          <li>Confirmed: {totalStats.confirmed}</li>
          <li>Deaths: {totalStats.deaths}</li>
          <li>Active: {totalStats.active}</li>
          <li>Recovered: {totalStats.recovered}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
