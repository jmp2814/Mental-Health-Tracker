import { useState, useEffect, Component } from 'react';
import { json } from 'react-router-dom';
const QuoteContainer = () => {



    const [quote, setQuote] = useState([])
    // let quote;
    const getQuote = async (query) => {
        const response = await fetch("https://type.fit/api/quotes")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                const quotearray = data[Math.floor(Math.random() * data.length)]
                setQuote(quotearray);
                // quote = data[Math.floor(Math.random() * data.length)]
                // console.log(quote)
            })

    };

    // getQuote();
    useEffect(() => {
        getQuote();
    }, []);


    return (
        <div className="card">
            <div className="card-body">
                <p> {quote.text} </p>
            </div>
        </div>
    )
}

export default QuoteContainer