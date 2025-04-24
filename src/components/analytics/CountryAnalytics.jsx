// components/CountryAnalytics.jsx
import React, { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";

import { API_URL } from "../../utils/constants";
import BarChart from "../charts/Barchart.jsx";

import "./Analytics.css";

const CountryAnalytics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/analytics/track/countries`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  const chartData = {
    labels: data.countries?.map((c) => c.country),
    datasets: [
      {
        label: "Unique Visitors",
        data: data.countries?.map((c) => c.unique_visitors),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="container-analytics">
      <h2>Visitors by Country</h2>
      <BarChart
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Visitors by Country",
            },
          },
        }}
      />

      <div className="country-list">
        {data.countries?.map((country) => (
          <div key={country.country_code} className="country-item">
            <span className="country-flag">
              {country.country_code.toUpperCase()}
            </span>
            <span className="country-name">{country.country}</span>
            <span className="visitor-count">
              {country.unique_visitors} visitors
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryAnalytics;
