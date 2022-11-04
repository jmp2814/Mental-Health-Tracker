import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

// import Home from "./pages/Home/Home";
import Help from "./pages/help/help";
import Login from "./pages/Login/login";
import SignUp from "./pages/SignUp/signup";
import recordData from "./pages/Daily/daily";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route />
          <Route path="/help" element={<Help />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todayentry" element={<recordData />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
