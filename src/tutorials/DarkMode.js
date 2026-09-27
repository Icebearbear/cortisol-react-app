import React, { createContext, useContext, useState } from "react";

// TODO: Create ThemeContext
const ThemeContext = createContext();

// Provider Component
export function ThemeProvider({ children }) {
  // TODO: State for current theme ("light" or "dark")
  const [theme, setTheme] = useState("light");

  // TODO: Toggle function between "light" and "dark"
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Child Component consuming context
export function ThemeToggler() {
  // TODO: Consume theme and toggleTheme from ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      {/* TODO: Display current theme status */}
      <p id="theme-status">Current Theme: {theme}</p>

      {/* TODO: Button to trigger theme toggle */}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// // Main App wrapping components in Provider
// export default function App() {
//   return (
//     <ThemeProvider>
//       <ThemeToggler />
//     </ThemeProvider>
//   );
// }
