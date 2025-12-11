import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import BookCard from '../components/Bookcard';
import { setBooks } from '../redux/booksSlice';
import booksData from '../data/booksData';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Initialize books in Redux
        dispatch(setBooks(booksData));
    }, [dispatch]);

    const popularBooks = booksData.slice(0, 4);

    return (
        <div>
            {/* Hero Section */}
            <section className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Welcome to Our Digital Library
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Discover thousands of books across various genres. Explore, learn, and get lost in the world of literature.
                </p>
                <Link
                    to="/browse"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                >
                    Start Browsing
                </Link>
            </section>

            {/* Categories */}
            <section className="mb-12">
                <CategoryList />
            </section>

            {/* Popular Books */}
            <section>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">Popular Books</h2>
                    <Link
                        to="/browse"
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                        View All →
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {popularBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;