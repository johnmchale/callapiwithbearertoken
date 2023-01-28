import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useAuth0 } from '@auth0/auth0-react'; // needed for auth0

const API_URL = process.env.REACT_APP_API_SERVER_URL;

const WeatherData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0(); //needed for auth0

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const BEARER_TOKEN = await getAccessTokenSilently();
        //you can remove the following line one done testing
        console.log(BEARER_TOKEN);

        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchData();
    console.log(data);
  }, []);

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    isAuthenticated && (
      <div>
        <br />
        <img src={user.picture} alt="" width="30" height="30"></img>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <hr />
        {data.map((item) => (
          <div key={item.date}>
            <p>Date: {item.date}</p>
            <p>Temperature (C): {item.temperatureC}</p>
            <p>Temperature (F): {item.temperatureF}</p>
            <p>Summary: {item.summary}</p>
          </div>
        ))}
      </div>
    )
  );
};

export default WeatherData;
