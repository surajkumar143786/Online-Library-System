import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookCard from '../components/Bookcard';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';

const BrowseBooks = () => {
    const { category } = useParams();
    const allBooks = useSelector((state) => state.books.books);
    const [filteredBooks, setFilteredBooks] = useState(allBooks);
    const [sortBy, setSortBy] = useState('newest');

    useEffect(() => {
        let filtered = [...allBooks];

        // Filter by category
        if (category && category !== 'browse') {
            filtered = filtered.filter(book => book.category === category);
        }

        // Sort books
        if (sortBy === 'newest') {
            filtered.sort((a, b) => b.year - a.year);
        } else if (sortBy === 'rating') {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        setFilteredBooks(filtered);
    }, [allBooks, category, sortBy]);

    const handleSearch = (query) => {
        if (!query.trim()) {
            setFilteredBooks(allBooks);
            return;
        }

        const searchTerm = query.toLowerCase();
        const searched = allBooks.filter(
            book =>
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm)
        );
        setFilteredBooks(searched);
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
                    {category ? `${category} Books` : 'All Books'}
                </h1>

                <div className="flex items-center gap-4">
                    <span className="text-gray-600">Sort by:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="newest">Newest First</option>
                        <option value="rating">Highest Rated</option>
                    </select>
                </div>
            </div>

            <CategoryList />
            <SearchBar onSearch={handleSearch} />

            {filteredBooks.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-600">No books found. Try a different search or category.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BrowseBooks;