import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Body from './components/Body';

import './styles.css';

function App() {
  const [activeTab, setActiveTab] = useState('get_started');

  return (
    <>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Body />
    </>
  );
}

export default App;
