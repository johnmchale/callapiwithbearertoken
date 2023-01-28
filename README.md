# `React application calling ASP.NET Web API .NET 6 using auth0`


## Repo

- This is a simple React application which calls an `ASP.NET Web API .NET6` application to test out auth0
- It uses the default Microsoft `ASP.NET Web API .NET6` project with the WeatherForecast controller to return random weather forecasts
- Both the React application and the `ASP.NET Web API .NET6` are protected using auth0
- Once the repo has been cloned, to try it out, you will need to sign up to auth0 (https://www.auth0.com) and create a SPA application as shown below

<img width="1464" alt="image" src="https://user-images.githubusercontent.com/38525955/215275045-cb9aaa5a-7d7e-4f03-90c3-15b774629f8a.png">

- Once created, go to the settings tab and make a note of the Domain (i.e. your tenant) and Client ID.


<img width="778" alt="image" src="https://user-images.githubusercontent.com/38525955/215275166-fc10a978-0fe1-49aa-8fba-05946da1d99e.png">

- Scroll down the settings page, and amend the 'Allowed Callback URLs', 'Allowed Logout URLs' and 'Allowed Web Origins' to http://localhost:3000 as follows:

<img width="768" alt="image" src="https://user-images.githubusercontent.com/38525955/215275258-3c80fcff-cb83-4366-8c95-351364d7e6e9.png">

- Scroll down further and also allow Cross-Origin Authentication 

<img width="771" alt="image" src="https://user-images.githubusercontent.com/38525955/215275331-bd884b0b-f7c1-4090-a8f0-98c1e0b507ca.png">

- Create a .env file in the root directory of the project and set the values of your Domain and Client ID as follows:

```sh
REACT_APP_AUTH0_DOMAIN=dev-x999aaaa.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=AAAAAAAAAAAAAAAAAAAAAAAAAAAAA
REACT_APP_API_SERVER_URL=https://localhost:7028/WeatherForecast
REACT_APP_AUTH0_AUDIENCE=https://localhost:7028/
```

- The API Server and Auth0 Audience refer to the `ASP.NET Web API .NET6` that you will be calling
- n.b. see the `ASP.NET Web API .NET6` repo here for instructions on how to install it:  https://github.com/johnmchale/AspNetWebApiNet6WithAuth0

- Once you have created a .env file, open a terminal window, simply do an install and start of the project as follows

```sh
npm install 
npm start 
```

- With just a few lines of code you have a secure React application that calls a secure `ASP.NET Web API .NET6`




