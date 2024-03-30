import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Introduce a state variable for dark mode with its initial value set to false
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode on and off
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Use the state variable to determine the className
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
