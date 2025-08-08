import React from 'react';

const styles = {
  mainContainer: {    width: '100%',
    minHeight: '100%',
    backgroundColor: '#0d1117',
    backgroundImage: `
      radial-gradient(circle at 50% 30%, rgba(255, 107, 53, 0.15) 0%, transparent 40%),
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
    `,
    padding: '20px', 
  },
};


const Layout = ({ children }) => {
  return (
    <div style={styles.mainContainer}>
  
      {children}
    </div>
  );
};

export default Layout;