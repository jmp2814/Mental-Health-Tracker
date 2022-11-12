import { useState, useEffect } from "react";

const QuoteContainer = () => {
  const [quote, setQuote] = useState([]);
  // let quote;
  const getQuote = async (query) => {
    const response = await fetch("https://type.fit/api/quotes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const quotearray = data[Math.floor(Math.random() * data.length)];
        setQuote(quotearray);
        // quote = data[Math.floor(Math.random() * data.length)]
        // console.log(quote)
      });
  };

  // getQuote();
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="">
      <div className="mb-3 pb-3">
        <b> {quote.text} </b>
      </div>
    </div>
  );
};

export default QuoteContainer;
