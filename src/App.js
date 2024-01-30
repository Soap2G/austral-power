import React, { useRef,  useState, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './components/intro/Introduction';
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Transitions from "./components/Transitions";
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


import './App.css';

function App() {


    const ref = useRef(null);
	
    const location = useLocation();

    // Initialize theme based on localStorage or default to 'light'
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    // Apply theme to body
    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    // Set viewport height
    useEffect(() => {
        const setBodyHeight = () => {
            const vh = window.innerHeight;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setBodyHeight();
        window.addEventListener('resize', setBodyHeight);

        return () => {
            window.removeEventListener('resize', setBodyHeight);
        };
    }, []);

    return (
        <ParallaxProvider>
            <I18nextProvider i18n={i18n}>
                <main ref={ref}>
                    <Header theme={theme} setTheme={setTheme} />
                    <div className={`theme-${theme}`}>
                            <AnimatePresence 
                            initial={false}
                            mode='wait'
                            >
                                <Router basename="/austral-power">
                                <Routes 
                                location={location}
                                key={location.pathname}
                                >
                                    <Route 
                                    exact
                                    path="/" 
                                    element={
                                        <>
                                            <Transitions>
                                                <Introduction />
                                                <Footer />
                                            </Transitions>
                                            
                                        </>
                                    } />
                                </Routes>
                                </Router>
                            </AnimatePresence>
                    </div>
                    
                </main>
            </I18nextProvider>
        </ParallaxProvider>
    );
}

export default App;
