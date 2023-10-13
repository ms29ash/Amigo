import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router';
import reportWebVitals from './reportWebVitals';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import UserProvider from './context/UserProvider';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UserProvider> */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    {/* </UserProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();