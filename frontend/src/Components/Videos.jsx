import React from 'react';

const Videos = () => {
  const videos = [
    {
      title: 'Learn React in 10 Minutes',
      url: 'https://www.youtube.com/embed/Tn6-PIqc4UM',
    },
    {
      title: 'JavaScript Crash Course',
      url: 'https://www.youtube.com/embed/hdI2bqOjy3c',
    },
    {
      title: 'Responsive Web Design',
      url: 'https://www.youtube.com/embed/srvUrASNj0s',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎥 Featured Tutorials</h1>
      <p style={styles.subheading}>
        Enhance your development skills with these carefully curated video tutorials.
      </p>
      <div style={styles.grid}>
        {videos.map((video, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.videoWrapper}>
              <iframe
                src={video.url}
                title={video.title}
                allowFullScreen
                style={styles.iframe}
              ></iframe>
            </div>
            <h2 style={styles.title}>{video.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '60px 20px',
    background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    minHeight: '100vh',
    textAlign: 'center',
    color: '#fff',
  },
  heading: {
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: '#ccc',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    color: '#333',
  },
  cardHover: {
    transform: 'scale(1.03)',
    boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    borderRadius: '12px',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  },
  title: {
    marginTop: '20px',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#222',
  },
};

export default Videos;
