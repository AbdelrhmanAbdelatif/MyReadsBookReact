import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
// routing 
// const routes = createBrowserRouter([
//   {
//     path: "/", 
//     element: <Home></Home>
//   },
//   {
//     path: 'search',
//     element: <Search></Search>
//   }

// ])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // <RouterProvider route={routes}></RouterProvider>
    <BrowserRouter>
    <Provider store={store}>
    <App></App>
    </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
