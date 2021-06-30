import React from 'react';

import { Button } from './Button';
import './navHeader.css';
import logo from '../stories/assets/Basketball.svg';

interface HeaderProps {
  className?: string;
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const NavHeader = ({ className, user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header className={className}>
    <div className="wrapper">
      <div>
        <img src={logo} className="Nav-logo" alt="logo" />
        <h1>BookBasket</h1>
      </div>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
