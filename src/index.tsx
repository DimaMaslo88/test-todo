import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import {Provider} from "react-redux";
import {store} from "bll/store";
import { HashRouter } from 'react-router-dom';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
<Provider store={store}>
    <App />
</Provider>
  </HashRouter>
);

