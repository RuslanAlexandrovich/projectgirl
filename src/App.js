import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="AppMAIN">
      <Routes>
        {/* <Route path="/" element={tokenTrue ? <Home /> : <Registration />} />
        <Route path="/" element={<Registration />} /> */}
      </Routes>
    </div>
  );
}

export default App;
