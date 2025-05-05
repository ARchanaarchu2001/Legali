import React from 'react';
import '../index.css'; // Adjust the path if necessary

// You can add the Google Fonts manually in `public/index.html` (as explained earlier)

const Layout = ({ children }) => {
  return (
    <div className="antialiased">
      {/* Add the class for Geist fonts */}
      <div className="geist-sans geist-mono">
        {children}
      </div>
    </div>
  );
};

export default Layout;
