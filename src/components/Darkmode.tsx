"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    // Check if dark mode was previously set in local storage
    const localTheme = localStorage.getItem("color-theme");
    if (localTheme) {
      setIsDarkMode(localTheme === "dark");
    } else {
      // If not set, check for preferred color scheme
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to the root element
    document.documentElement.classList.toggle("dark", isDarkMode);
    // Save the current dark mode state to local storage
    localStorage.setItem("color-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className="z-10">
      <button
        id="theme-toggle"
        type="button"
        className="text-gray-500 dark:text-gray-400"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
