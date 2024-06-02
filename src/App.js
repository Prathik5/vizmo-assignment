import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogView from "./Components/BlogView";
import BlogList from "./Components/BlogList";
import BlogEditor from "./Components/BlogEditor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogView />} />
        <Route path="/create" element={<BlogEditor />} />
        <Route path="/edit/:id" element={<BlogEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
