import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Contact from './components/Contact';
import ExamPage from './components/ExamPage';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <About />
                            <Courses />
                            <Faculty />
                            <Contact />
                        </>
                    } />
                    <Route path="/exam/:examId" element={<ExamPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
