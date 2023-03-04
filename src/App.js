import './App.css';
import { Landing } from './Pages/Landing';
import { Routes, Route, Navigate } from "react-router-dom";
import { Projects } from './Pages/Projects';
import { Blogs } from './Pages/Blogs';

function App() {
  return (
    <div className="App">
             <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blogs" element={<Blogs/>} />

      </Routes>
    </div>
  );
}

export default App;
