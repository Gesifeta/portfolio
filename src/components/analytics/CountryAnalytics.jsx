// components/CountryAnalytics.jsx
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { API_URL } from "../../utils/constants";
import BarChart from "../charts/Barchart.jsx";

import "./Analytics.css";

const CountryAnalytics = () => {
  // Set success message
  const [successMessage, setSuccessMessage] = useState("");
  // Set error message
  const [errorMessage, setErrorMessage] = useState({
    error: false,
    message: "",
  });

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["countryAnalytics"],
    queryFn: () =>
      fetch(`${API_URL}/analytics/track/countries`).then((res) => res.json()),
    onSuccess: (data) => {
      setSuccessMessage(data.message);
    },
    onError: (error) => {
      setErrorMessage({
        error: true,
        message: error.message,
      });
    },
  });

  if (!data) return;

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

  return isLoading ? (
    <p>Loading...</p>
  ) : isError ? (
    <p>{error.message}</p>
  ) : (
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
