import React, { FormEvent, useState } from "react";
import "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex align-items-center text-center Main">
      <main className={`w-50 m-auto p-2`}>
        <form onSubmit={handleFormSubmit}>
          <h1 className="h3 mb-3 fw-normal">Login Here:</h1>
          <div className="form-floating mb-2">
            <input
              type="email"
              value={email}
              name="email"
              id="email"
              placeholder="email@email.com"
              onChange={handleEmailChange}
              className="form-control"
            />
            <label htmlFor="email">Email address:</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="password"
              value={password}
              name="password"
              id="password"
              placeholder="password"
              onChange={handlePasswordChange}
              className="form-control"
            />
            <label htmlFor="password">Password:</label>
          </div>
          <button type="submit" className="w-25 btn btn-lg btn-primary">
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
