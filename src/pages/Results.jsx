import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchResultCard from "@/components/SearchResultCard";
import {users} from "@/data/users.js";

const Results = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const results = users.filter(user =>
            user.first_name.toLowerCase().includes(query.toLowerCase()) ||
            user.last_name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(results);
    }, [query]);

    return (
        <div className="p-8">
            {filteredData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredData.map(user => (
                        <SearchResultCard key={user.id} user={user} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No results found</p>
            )}
        </div>
    );
};

export default Results;
