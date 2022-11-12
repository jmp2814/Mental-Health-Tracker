import React from "react";
import QuoteContainer from "../Components/quote";
import "./home.css";
import "../fonts/Nunito_Sans/NunitoSans-Regular.ttf";
import "../fonts/Caveat/static/Caveat-Bold.ttf";

export default function Home() {
  return (
    <div className="d-flex align-items-center text-center Standard-Font Box card w-75 mt-3 pt-3 pb-3 container">
      <h1 className="Title-Font">Here With You</h1>
      <h3 className=" Standard-Font">Mental Health Tracking</h3>
      <div className=" Standard-Font">
        <div className="">
          Know that you're not alone and keep better track of your mental
          health!{" "}
        </div>
      </div>

      <div>
        <img src="./hugging.jpg" alt="people hugging"></img>
      </div>

      <div className="">
        <QuoteContainer />
      </div>
      <div className="">
        <div className="w-50 container  Standard-Font">
          <h3 className="col-12">How it works:</h3>
          <p className="col-12">
            Each day you log in, you will be prompted to answer a few questions
            about your mood. Do this each and every day and you'll soon have
            data you can share with your care team!
          </p>
        </div>
      </div>
    </div>
  );
}
