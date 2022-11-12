import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./login.module.css";
import "../fonts/Nunito_Sans/NunitoSans-Regular.ttf";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          password: formState.password,
        },
      });

      Auth.login(data.login.token);
      loggedInUserId = data.login.user._id;
      console.log(data);
      window.location.assign(`/profile/${loggedInUserId}`);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  // if (data) {
  //   return <Navigate to="/profile" />;
  // }
  return (
    <div className="d-flex align-items-center container Standard-Font text-center Box card w-75 mt-3 pt-3 pb-3">
      <main className={`w-50 m-auto p-2`}>
        <h1 className="h3 mb-3 fw-normal">Login Here:</h1>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="form-floating mb-2 bg-white">
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
            <div className="form-floating mb-2 bg-white">
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
            <button type="submit" className="w-25 btn btn-lg btn-success">
              Login
            </button>
          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </main>
    </div>
  );
};

export default Login;
