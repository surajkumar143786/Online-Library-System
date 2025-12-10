import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search by title or author..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-6 py-3 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                />
                <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
                >
                    🔍
                </button>
            </div>
        </form>
    );
};

export default SearchBar;