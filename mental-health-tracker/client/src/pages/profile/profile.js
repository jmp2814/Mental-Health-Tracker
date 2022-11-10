import React, { useEffect, useState } from "react";
import LineChart from "../Components/LineChart";
const date = new Date().toLocaleDateString();
// const time = new Date().toLocaleTimeString();

export default function Profile() {
  // Store the current date in a useState hook
  // Have a useEffect hook that would get a new date every 1000 ms
  // Updatge the useState hook
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return function () {
      clearInterval(timer);
    };
  });
  return (
    <div>
      <h1>Profile</h1>
      <div class="card">
        <div class="card-body">
          <>
            <p>Today's is {date}</p>
            <p>The time is {time.toLocaleTimeString()}</p>
          </>
        </div>
      </div>
      <div class="card">
        <div class="card-body">Make an Entry</div>
      </div>
      <div class="card">
        <div class="card-body">click to add contact</div>
      </div>
      <div class="card">
        <div class="card-body">edit/delete Enrty</div>
      </div>
      <div class="card">
        <div class="card-body">edit/delete Contact</div>
      </div>
      <div class="card">
        <div class="card-body">Graph Place holder</div>
      </div>
      <LineChart />
    </div>
  );
}
