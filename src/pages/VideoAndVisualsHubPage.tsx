import React from 'react';
import Header from '../components/Header';
import VideoAndVisualsHub from '../components/VideoAndVisualsHub';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const VideoAndVisualsHubPage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <VideoAndVisualsHub />
      <Newsletter />
      <Footer />
    </>
  );
};

export default VideoAndVisualsHubPage;
