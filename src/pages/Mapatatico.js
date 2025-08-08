import React from 'react';
import Layout from '../components/Layout';

const MapaTatico = () => {
  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.title}>Mapa Tático</h1>
        <p style={styles.description}>
          Acompanhamento das iniciativas e status do planejamento tático.
        </p>

        <div style={styles.iframeContainer}>
    
          <iframe 
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRshjiYLu9AKYJvwnbPRPkdBFvZYKKk0-BF1q7K0cQWWlQ7HD8ErZjn8zkT3Jq6vfUt6O8Fsqjdjq-o/pubhtml?widget=true&amp;headers=false"
            style={styles.iframe}
            frameBorder="0"
          >
          </iframe>
        </div>
      </div>
    </Layout>
  );
};

export default MapaTatico;

 /** @type {{ [key: string]: React.CSSProperties }} */
const styles = {
  container: {
    padding: '20px'
  },
  title: {
    color: '#fff',
    fontSize: '2.5rem',
  },
  description: {
    color: '#ccc',
    fontSize: '1.1rem',
    marginBottom: '30px',
  },
  iframeContainer: {
  
    width: '100%',
    height: '75vh', 
    overflow: 'hidden',
    borderRadius: '10px',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none', 
  }
};
