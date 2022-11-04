import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";


import Help from "./pages/help/help";
import Home from "./pages/home/home";

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
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
