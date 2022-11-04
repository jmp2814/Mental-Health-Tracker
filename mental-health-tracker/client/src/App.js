import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";


import Help from "./pages/help/help";
import Home from "./pages/home/home"
import Login from "./pages/Login/login";
import Profile from "./pages/profile/profile";
import SignUp from "./pages/SignUp/signup";
import RecordData from "./pages/Daily/daily";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help" element={<Help />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todayentry" element={<RecordData />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
