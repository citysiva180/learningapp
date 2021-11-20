import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StateCheck from "./components/LearningState/LearningState";
function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<StateCheck />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
