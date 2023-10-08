import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

function NotFound() {
    return (
      <div className="not-found">
        <h1>Page Not Found!</h1>
        <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
        <Link to="/" style={{color: 'green'}}>← Back to our site</Link>
      </div>
    );
  }

export default NotFound;
