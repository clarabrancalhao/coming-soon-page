import React from 'react';
import './App.css';

import personImageMobile from './images/hero-mobile.jpg';
import personImageDesktop from './images/hero-desktop.jpg';
import logo from './images/logo.svg';
import arrow from './images/icon-arrow.svg';

function App() {
  return (
    <div className="container">
      <img
        src={logo}
        alt="a circle with base apparel written side by side"
        className="logo"
      />
      <img
        src={personImageDesktop}
        alt="girl looking at camera and plants in background"
        className="person-image-desktop"
      />
      <img
        src={personImageMobile}
        alt="girl looking at camera and plants in background"
        className="person-image-mobile"
      />
      <div className="title">
        <h1 className="title-pink">WE'RE</h1>
        <h1 className="title-grey">COMING SOON</h1>
      </div>

      <h3 className="description">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </h3>
      <form className="form">
        <input
          placeholder="Email Adress"
          type="email"
          className="email-input"
        />
        <button className="input-button">
          <img src={arrow} />
        </button>
      </form>
    </div>
  );
}

export default App;
