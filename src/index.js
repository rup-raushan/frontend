import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserState from './context/user/UserState';
import reportWebVitals from './reportWebVitals';
import AdminState from './context/admin/AdminState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserState>
      <AdminState>
        <App />
      </AdminState>
    </UserState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
