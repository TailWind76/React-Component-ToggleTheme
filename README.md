
# Toggle Theme Switcher Component
The ToggleSwitcher component is a simple React component that allows users to switch between two themes: "light" and "dark". It renders a toggle switch button, and when the user interacts with it, the theme is changed accordingly.

## Installation
To use the ToggleSwitcher component, you need to have a React project set up. If you don't have one, you can create a new React application using Create React App or any other preferred method.



## Usage
To integrate the ToggleSwitcher component into your application, follow these steps:

1.First, initialize the state for the theme using the useState hook. In your main application file (e.g., App.js), import the ToggleSwitcher component and set up the theme state:

```javascript
 import React, { useState } from 'react';
import ToggleSwitcher from 'path-to-toggleButton-component';

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

```
2.The ToggleSwitcher component takes the following props:

### checked: 
A boolean prop to indicate whether the switcher is in the "dark" theme state (true) or the "light" theme state (false).

### width and height: 
Numeric props to define the width and height of the toggle switcher button.

### onChange:
A callback function that will be triggered when the user interacts with the toggle switcher. It should update the state to change the theme.

### lightBackground and darkBackground:
String props representing the background colors for the "light" and "dark" themes, respectively.

3.Customize the ToggleSwitcher component according to your application's styling and requirements. You can modify the width, height, and colors to match your application's design.

4.When the user interacts with the toggle switcher, the handleToggleChange function will be called, and the theme state will be updated accordingly, triggering a re-render of your application with the new theme.
