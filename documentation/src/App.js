import React, { useState } from 'react';

import styles from './styles.module.css';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  const [activeTab, setActiveTab] = useState('get_started');

  return (
    <div className={styles.body_container}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Body />
    </div>
  );
}

export default App;
