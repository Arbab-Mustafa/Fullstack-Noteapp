import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import SignUp from "./page/SignUp/SignUp";

// Making Routes

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
);

const App = () => {
  return <>{routes}</>;
};

export default App;
