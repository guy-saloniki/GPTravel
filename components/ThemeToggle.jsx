'use client';
import { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
  halloween: 'halloween',
  cupcake: 'cupcake',
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.cupcake);
  const toggleButton = () => {
    const newTheme =
      theme === themes.cupcake ? themes.halloween : themes.cupcake;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };
  return (
    <button className="btn btn-sm btn-outline" onClick={toggleButton}>
      {theme === 'cupcake' ? (
        <BsMoonFill className="w-4 h-4" />
      ) : (
        <BsSunFill className="w-4 h-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
