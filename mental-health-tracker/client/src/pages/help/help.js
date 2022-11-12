import React from "react";
import "./help.css";
import "../fonts/Nunito_Sans/NunitoSans-Regular.ttf";

export default function Help() {
  return (
    <div className="card d-flex container align-items-center text-center w-75 mt-3 pt-3 pb-3 Standard-Font">
      <h1 className="mb-3">Resources:</h1>

      <div className="">
        <div className="mb-3 ms-3 ps-3">
          <p>
            The National Suicide Prevention Lifeline is now 988. Simply dial to
            get on the line with someone willing to help.{" "}
          </p>
          <b>
            Remember: You are loved. You are important. You are going to be
            okay. We're with you.
          </b>
        </div>
      </div>
      <div className="">
        <div className="">
          <a href="https://www.aa-meetings.com/" target="_button">
            Find A Local AA meeting{" "}
          </a>
        </div>
      </div>
      <div className="">
        <div className="">
          <a href="https://www.narcotics.com/na-meetings/" target="_button">
            Find A Local NA meeting{" "}
          </a>
        </div>
      </div>
      <div className="">
        <div className="">
          <a href="https://www.lgbthotline.org/" target="_button">
            LGBT National Help Center
          </a>
        </div>
      </div>
    </div>
  );
}
