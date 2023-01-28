import './App.css';

import { useAuth0 } from '@auth0/auth0-react'; // needed for auth0
import LoginButton from './LoginButton'; // needed for auth0
import LogoutButton from './LogoutButton'; // needed for auth0
import WeatherData from './WeatherData';

function App() {
  const { isAuthenticated } = useAuth0(); // needed for auth0

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>
        This is a simple React application that calls a C# ASP.NET Web API which
        fetches weather data
      </p>
      <p>
        Both the React application and the C# Web API are protected using{' '}
        <a href="https://auth0.com">auth0</a>
      </p>

      {!isAuthenticated ? (
        <div>
          <h1 style={{ fontSize: '1.5rem' }}>Please Login.</h1>
          <LoginButton />
        </div>
      ) : (
        <div>
          <LogoutButton />
          <WeatherData />
        </div>
      )}
    </div>
  );
}

export default App;
