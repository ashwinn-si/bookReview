import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserDetailsProvider} from "./Context/UserDetails";
import { BookContextProvider } from './Context/BookDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserDetailsProvider>
        <BookContextProvider >
            <App />
        </BookContextProvider>
    </UserDetailsProvider>
);
reportWebVitals();
