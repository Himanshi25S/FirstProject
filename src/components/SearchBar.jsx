import React, { useState } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);

    const items = ["Paracetamol", "Dolo 650", "Vicks", "Cough Syrup", "Crocin"];

    const handleSearch = (text) => {
        setQuery(text);

        const filtered = items.filter((item) =>
            item.toLowerCase().includes(text.toLowerCase())
        );

        setResult(filtered);
    };

    return (
        <div className="w-full max-w-md mx-auto mt-6">

            {/* Search Box */}
            <div className="w-full">
                <input
                    type="text"
                    placeholder="Search medicine and products"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="
                        w-full px-4 py-3 
                        border border-red-300 
                        rounded-xl 
                        outline-none
                        text-gray-700
                        focus:ring-2 focus:ring-blue-400
                        focus:border-blue-400
                        transition-all
                    "
                />
            </div>

            {/* Results */}
            {query.length > 0 && (
                <div className="
                    mt-2 bg-white 
                    shadow-md rounded-xl 
                    border border-gray-200
                    overflow-hidden
                ">
                    {result.length > 0 ? (
                        result.map((item, index) => (
                            <p
                                key={index}
                                className="
                                    px-4 py-3 
                                    border-b border-gray-100
                                    text-gray-700 
                                    hover:bg-blue-50 
                                    cursor-pointer 
                                    transition
                                "
                            >
                                {item}
                            </p>
                        ))
                    ) : (
                        <p className="px-4 py-3 text-gray-500 text-center">
                            No results found
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
