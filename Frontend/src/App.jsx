import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ChatPanel from "./Components/ChatPanel";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import OCR from "./Components/Ocr";
import Dashboard from "./Components/Dashboard/Page/Dashboard";
export default function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/taxbot" element={<ChatPanel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ocr-ai" element={<OCR />} />
            <Route path="/profile" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
