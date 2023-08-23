import React, { useState } from 'react';
import Body from './components/Body';

import styles from './styles.module.css';
import Navbar from './components/Navbar';

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
