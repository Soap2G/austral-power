import React, { useEffect } from "react";
import './Header.css'; // Make sure to create a corresponding CSS file
import { Link } from "react-router-dom";
import ThemeButton from '../contexts/ThemeButton';



const Header = ({ theme, setTheme }) => {
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);


  return (
    <div className="header-box">
      <div className="header-logo">
      <Link
          className="nav-link active"
          style={{ color: 'var(--title-color)'}}
          aria-current="page"
          to="/"
        >
          Austral Power
        </Link>
      </div>
      <div className="header-nav">
        <Link
          id="home"
          className="nav-link active"
          style={{ color: 'var(--text-color)'}}
          aria-current="page"
          to="/"
        >
          home
        </Link> <span id="home">|</span>

         | <ThemeButton onClick={toggleTheme} flipped={theme === 'dark'} />
      </div>
    </div>
  );
};

export default Header;