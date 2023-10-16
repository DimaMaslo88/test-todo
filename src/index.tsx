import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import {Provider} from "react-redux";
import {store} from "bll/store";
import { HashRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DndProvider backend={HTML5Backend}>
  <HashRouter>
<Provider store={store}>
    <App />
</Provider>
  </HashRouter>
  </DndProvider>
);

