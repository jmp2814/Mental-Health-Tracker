import React from "react";
import QuoteContainer from "../Components/quote";

export default function Home() {
  return (
    <div className="d-flex align-items-center text-center Box card w-100 mt-3 pt-3 pb-3">
      <h1>Here With You</h1>
      <h3>Mental Health Tracking</h3>
      <div className="">
        <div className="">
          Know that you're not alone and keep better track of your mental
          health!{" "}
        </div>
      </div>

      <div className="">
        <div className="">
          <QuoteContainer />
        </div>
      </div>
      <div className="">
        <div className="">
          <QuoteContainer />
        </div>
      </div>
      <div className="">
        <div className="w-50 ">
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
