import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === "Enter" && searchTerm.trim() !== "") {
            navigate(`/results?query=${searchTerm}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-20">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleSearch}
                className="w-80 p-4 text-lg border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default Home;
