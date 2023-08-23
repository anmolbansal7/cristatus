import React, { useState } from 'react';

import Body from './components/Body';
import Navbar from './components/Navbar';
import styles from './styles.module.css';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.body_container}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Body />
    </div>
  );
}

export default App;
