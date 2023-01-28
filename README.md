# `React application calling ASP.NET Web API .NET 6 using auth0`


## Repo

- This is a simple `React application which calls an ASP.NET Web API .NET6` application to test out auth0
- It uses the default Microsoft `ASP.NET Web API .NET6` project with the WeatherForecast controller to return random weather forecasts
- Both the React application and the `ASP.NET Web API .NET6` are protected using auth0
- Once the repo has been cloned, to try it out, you will need to sign up to auth0 (https://www.auth0.com) and create a SPA application as shown below


- Once created, go to the settings tab and make a note of the Domain (i.e. your tenant) and Client ID.
- Create a .env file in the root directory of the project and set the values of your Domain and Client ID as follows:

```sh
REACT_APP_AUTH0_DOMAIN=dev-x999aaaa.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=AAAAAAAAAAAAAAAAAAAAAAAAAAAAA
REACT_APP_API_SERVER_URL=https://localhost:7028/WeatherForecast
REACT_APP_AUTH0_AUDIENCE=https://localhost:7028/
```

- The API Server and Auth0 Audience refer to the `ASP.NET Web API .NET6` that you will be calling
- n.b. see the `ASP.NET Web API .NET6` repo here:  

- from a terminal windows, simply do the following and try out the application

```sh
npm install 
npm start 
```

- With just a few lines of code you have a secure React application that calls a secure `ASP.NET Web API .NET6`


