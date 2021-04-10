import React, { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import "./App.css";
import Table from "./components/Table";
import Statistics from "./components/Statistics";
import InputForm from "./components/InputForm";

interface CountryStats {
  confirmed: number;
  deaths: number;
}

const App: React.FC = () => {
  const [country, setCountry] = useState("");
  const [totalStats, setTotalStats] = useState<CountryStats>({
    confirmed: 0,
    deaths: 0,
  });

  // Har laget en egen httpService-mappe for axios hvis vi ønsker å mocke det enklere i testene
  const [
    { data },
    refetch,
  ] = useAxios(
    `https://api.covid19api.com/live/country/${country}/status/confirmed`,
    { manual: true }
  );

  useEffect(() => {
    var newTotalStats = {
      confirmed: 0,
      deaths: 0,
    };

    data?.forEach((status) => {
      if (
        new Date(status?.Date)?.toLocaleDateString() ===
        new Date().toLocaleDateString()
      ) {
        newTotalStats.confirmed += status.Confirmed;
        newTotalStats.deaths += status.Deaths;
      }
    });

    setTotalStats(newTotalStats);
  }, [data]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      refetch();
    }
  };

  return (
    <div className="app">
      <h1 className="header">Covid-19 statistikk</h1>
      <div className="content">
        <InputForm
          country={country}
          setCountry={setCountry}
          refetch={refetch}
          handleKeyPress={handleKeyPress}
        />
        {data && (
          <div className="covid-statistics">
            <Statistics totalStats={totalStats} />
            <Table data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
