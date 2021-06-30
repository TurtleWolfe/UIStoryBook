import React from 'react';

// import { Header } from './Header';
import { NavHeader } from '../components/NavHeader';

import './pageBasket.css';
import logo from '../stories/assets/Basketball.svg';

interface BasketPageProps {
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const BasketPage = ({ user, onLogin, onLogout, onCreateAccount }: BasketPageProps) => (
  <article>
    <NavHeader
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onCreateAccount}
    />

    <header className="App-header bg-image" >
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
      <img src={logo} className="App-logo" alt="logo" />
    </header >
  </article>
);
