// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommentBox from "./components/CommentBox/CommentBox";
import StateCheck from "./components/LearningState/LearningState";
import ToggleEvents from "./components/ReactEvents/RaisingEvents";
import RenderingTables from "./components/RenderingTables/RenderingTables";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<StateCheck />}></Route>
          <Route path="/events" element={<ToggleEvents />}></Route>
          <Route path="/tables" element={<RenderingTables />}></Route>
          <Route path="/comment" element={<CommentBox />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
