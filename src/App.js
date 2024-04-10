import { Home } from "./components/pages/home";
import {Login} from './components/pages/login';
import {Feed} from './components/pages/feed'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
        <Route path="/feed" element={<Feed/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
