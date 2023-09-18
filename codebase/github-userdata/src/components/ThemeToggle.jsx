import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check theme preference in localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);

    // Save the theme preference in localStorage for persistence
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");

    // Toggle the theme class on the body element
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
    //   className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center ${
    //     isDarkMode ? "dark:bg-gray-800" : "dark:bg-gray-100"
    //   }`}
    >
      {isDarkMode ? (
        <>
          <SunIcon className="w-10 h-10 mb-3 text-yellow-400" />

        </>
      ) : (
        <>
          <MoonIcon className="w-10 h-10 mb-3 text-gray-500" />

        </>
      )}
    </button>
  );
};

export default ThemeToggle;
