import React, { useEffect, useState } from "react";
import '../styles/bimepopup.css';
import bime1 from '../../assets/images/bimetrans.png'

function BimePopup() {
    const quotes = [
        {
            quote: "Don't be fooled by the calendar. There are only as many days in the year as you make use of.",
            author: "Charles Richards"
        },
        {
            quote: "Time management is the mantra of my life.",
            author: "Vir Das"
        },
        {
            quote: "Time is what we want most, but what we use worst.",
            author: "William Penn"
        },
        {
            quote: "The bad news is time flies. The good news is you're the pilot.",
            author: "Michael Altshuler"
        },
        {
            quote: "Ordinary people think merely of spending time, great people think of using it.",
            author: "Arthur Schopenhauer"
        }
    ];

    const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const randomQuote = getRandomQuote();
            setCurrentQuote(randomQuote);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="maincontainer">
            <div className="bimedisplay">
                <img src={bime1} alt="bime" />
            </div>
            <div className="text-">
                <p>PAGE RESTRICTED...</p>
            </div>
            <div className="quote-container">
                <div className="quote-text">"{currentQuote.quote}"</div>
                <div className="quote-author">- {currentQuote.author}</div>
            </div>
        </div>
    );
}

export default BimePopup;
