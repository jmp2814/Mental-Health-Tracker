import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Auth from "../../utils/auth";
import { QUERY_USER, QUERY_ME, QUERY_STATS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
const date = new Date().toLocaleDateString();

// const time = new Date().toLocaleTimeString();

export default function Profile() {
  // Store the current date in a useState hook
  // Have a useEffect hook that would get a new date every 1000 ms

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return function () {
      clearInterval(timer);
    };
  });

  const { id } = useParams();

  const { loading, data, error } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });

  console.log(data, error);
  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (!Auth.loggedIn()) {
    return <Navigate to="/home" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(user);

  if (!user?.email) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

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
      <div>
        <ul>
          <li>Depression: {user.responses[0].depressionScale}</li>
          <li>Happiness: {user.responses[0].happyScale}</li>
          <li>Anxiety: {user.responses[0].anxiousScale}</li>
          <li>Irritation: {user.responses[0].irritableScale}</li>
          <li>Energy: {user.responses[0].energeticScale}</li>
          <li>Sleep: {user.responses[0].sleepHours}</li>
        </ul>
      </div>
    </div>
  );
}
