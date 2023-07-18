import React, { useState } from 'react';
import ToggleSwitcher from './components/toggleButton';

function App() {
  const [theme, setTheme] = useState('light');

  const handleToggleChange = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Toggle Theme Switcher</h1>
      <ToggleSwitcher
        checked={theme === 'dark'}
        width={300}
        height={100}
        onChange={handleToggleChange}
        lightBackground="aqua" 
        darkBackground="#000" 
      />
      <p>Theme: {theme}</p>
    </div>
  );
}

export default App;
