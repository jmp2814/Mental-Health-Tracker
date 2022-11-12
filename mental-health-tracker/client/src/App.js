import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
}
  from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Layout from "./pages/Layout/Layout";
import Help from "./pages/help/help";
import Home from "./pages/home/home";
import Login from "./pages/Login/login";
import Profile from "./pages/profile/profile";
import SignUp from "./pages/SignUp/signup";
import RecordData from "./pages/Daily/daily";
import "./pages/styles.module.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/today" element={<RecordData />} />
          </Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
