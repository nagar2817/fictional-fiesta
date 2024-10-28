import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Results from "@/pages/Results";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="bg-gradient-to-r from-gray-200 to-gray-300"> {/* Minimalistic gradient */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/results" element={<Results />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
