import { v4 as uuidv4 } from "uuid";

import { API_URL } from "../utils/constants";

// services/analyticsService.js

const trackUserPageView = async () => {
  const data = {
    path: window.location.pathname,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    language: navigator.language,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
  };

  await fetch(`${API_URL}/analytics/track/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });
};
// services/analyticsService.js
const trackCountryPageView = async () => {
  // Get user's location using ipapi.co (free tier available)
  const geoResponse = await fetch("https://ipapi.co/json/");
  const geoData = await geoResponse.json();

  const data = {
    path: window.location.pathname,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    language: navigator.language,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
    // Add location data
    country: geoData.country_name,
    countryCode: geoData.country_code,
    city: geoData.city,
    region: geoData.region,
    timezone: geoData.timezone,
  };

  await fetch(`${API_URL}/analytics/track/country`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });
};

// Generate or retrieve session ID
const getSessionId = () => {
  let sessionId = sessionStorage.getItem("session_id");
  if (!sessionId) {
    sessionId = uuidv4();
    sessionStorage.setItem("session_id", sessionId);
  }
  return sessionId;
};
export { trackUserPageView, trackCountryPageView };
