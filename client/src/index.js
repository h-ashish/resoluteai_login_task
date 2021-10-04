import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme( {
  palette:{
    primary:{
      light: "#FB513A" ,
      main: "#FA2609" ,
      dark: "#AF1A06" ,
    },
    secondary:{
      light: "rgba(0, 0, 0, 0.54)" ,
      main: "rgba(0, 0, 0, 0.54)" ,
      dark: "rgba(0, 0, 0, 0.54)" ,
    }
  },
  typography:{
    fontFamily:["Poppins", 'sans-serif'].join(','),
    h6:{
      fontWeight:"0"
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme = {theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
