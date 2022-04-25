import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// aws
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

// from v2
// import { MoralisProvider } from "react-moralis";
// import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <MoralisProvider
  //   serverUrl="https://c76movz00vcz.usemoralis.com:2053/server"
  //   appId="Su5msyzoLMESzSbgODX3FqpKUMCifryZvKQ7oeCe"
  // >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </MoralisProvider>,
  // document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
