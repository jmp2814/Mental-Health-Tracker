import React from "react";
import QuoteContainer from "../Components/quote";

export default function Home() {
  return (
    <div>
      <h1>Mental Health Tracker</h1>
      <div className="card">
        <div className="card-body">app discription/ intro text</div>
      </div>

      <div className="card">
        <div className="card-body">
          <QuoteContainer />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <QuoteContainer />
        </div>
      </div>
      <div className="card">
        <div className="card-body">how it works</div>
      </div>
    </div>
  );
}
