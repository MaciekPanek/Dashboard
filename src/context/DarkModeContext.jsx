import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  // Initialize the theme preference based on local storage or OS preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if the theme preference is saved in local storage
    const savedTheme = localStorage.theme;

    // If it's explicitly set to "dark" or there's no saved preference, use dark mode
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    // Apply the theme preference to the HTML element
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    // Toggle the theme preference
    setIsDarkMode((isDark) => !isDark);

    // Update local storage when the user explicitly chooses a theme
    localStorage.theme = isDarkMode ? "light" : "dark";
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
