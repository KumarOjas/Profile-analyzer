import React, { useState, useEffect } from 'react';
import './MotivationalQuotes.css';

const MotivationalQuotes = () => {
    const [currentQuote, setCurrentQuote] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://hindi-quotes.vercel.app/api/random');
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }
            const data = await response.json();
            setCurrentQuote(data.quote || 'सफलता मेहनत का परिणाम है।');
            setError(null);
        } catch (err) {
            setError('Unable to load quote. Please try again.');
            setCurrentQuote('सफलता मेहनत का परिणाम है।');
        } finally {
            setLoading(false);
        }
    };

    const getNewQuote = () => {
        fetchQuote();
    };

    return (
        <div className="motivational-quotes">
            <div className="quote-header">
                <h2>💪 Daily Motivation</h2>
                <p>Inspiring words in Hindi to fuel your study journey</p>
            </div>

            <div className="quote-card">
                <div className="quote-text">
                    "{currentQuote}"
                </div>
                <div className="quote-actions">
                    <button className="new-quote-btn" onClick={getNewQuote}>
                        🔄 Get Another Quote
                    </button>
                </div>
            </div>

            <div className="quote-info">
                <p>🌅 A new quote appears every day to keep you motivated!</p>
                <p>📚 Remember: Consistency is the key to success in JEE preparation.</p>
            </div>
        </div>
    );
};

export default MotivationalQuotes;
