import React from 'react';
import './welcome.scss';

function Welcome() {
  return (
    <div className="Welcome">
      <div className="head">
        <h2 className='discover'>Discover Your </h2>
        <h2 className='perfect'>Perfect Rental</h2>
      </div>
      <div className="rent">
        <p>
          Rent Cars, Houses and items in Just a Few Clicks
        </p>
      </div>
      <div className="options">
        <button className='places'>Places</button>
        <button className='rides'>Rides</button>
        <button className='things'>Things</button>
      </div>
      <div className="search">
        <input type="text" placeholder="Search for cars, houses, and items" className="search-input" />
        <div className="location-select">
          <select className="location-dropdown">
            <option value="location1">Nyeri</option>
            <option value="location2">Nairobi</option>
            <option value="location3">Nakuru</option>
            {/* Add more options as needed */}
          </select>
          <span className="location-icon">📍</span> {/* You can use any suitable icon here */}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
