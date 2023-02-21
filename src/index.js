import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import common_en from "./translations/en.json";
import common_fr from "./translations/fr.json";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      fr: {
          common: common_fr
      },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
<React.StrictMode>
    <App />
  </React.StrictMode>
  </I18nextProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
