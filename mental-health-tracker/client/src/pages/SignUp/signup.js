import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./signup.css";
import "../fonts/Nunito_Sans/NunitoSans-Regular.ttf";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  let loggedInUserId = "";
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          password: formState.password,
        },
      });

      console.log(data);

      Auth.login(data.addUser.token);
      loggedInUserId = data.addUser.user._id;
      console.log(loggedInUserId);
      window.location.assign(`/profile/${loggedInUserId}`);
    } catch (e) {
      console.error(e);
    }
  };

  // if (loggedInUserId) {
  //   // return <Navigate to={`/profile/${loggedInUserId}`} />;
  //   return <Navigate to="/login" />;
  // }
  return (
    <div className="d-flex align-items-center text-center Standard-Font container card w-75 mt-3 pt-3 pb-3 mb-3">
      <main className={`w-50 m-auto p-2`}>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <h1 className="h3 mb-3 fw-normal">Sign Up:</h1>
            <div className="form-floating mb-2">
              <input
                type="email"
                value={formState.email}
                name="email"
                id="email"
                placeholder="email@email.com"
                onChange={handleChange}
                className="form-control"
              />
              <label htmlFor="email">Email address:</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="password"
                value={formState.password}
                name="password"
                id="password"
                placeholder="password"
                onChange={handleChange}
                className="form-control"
              />
              <label htmlFor="password">Password:</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="firstname"
                value={formState.firstName}
                name="firstName"
                id="firstname"
                placeholder="firstname"
                onChange={handleChange}
                className="form-control"
              />
              <label htmlFor="firstname">First Name:</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="lastname"
                value={formState.lastName}
                name="lastName"
                id="lastname"
                placeholder="lastname"
                onChange={handleChange}
                className="form-control"
              />
              <label htmlFor="lastname">Last Name:</label>
            </div>
            <button type="submit" className="w-25 btn btn-lg btn-success">
              Submit
            </button>
          </form>
        )}
      </main>
    </div>
  );
};

export default Signup;
