import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
    const { id } = useParams();
    const books = useSelector((state) => state.books.books);
    const book = books.find(b => b.id === parseInt(id));

    if (!book) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Not Found</h2>
                <Link to="/browse" className="text-blue-600 hover:underline">
                    ← Back to Browse
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <Link
                to="/browse"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
            >
                ← Back to Browse
            </Link>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/3">
                        <img
                            src={book.coverImage}
                            alt={book.title}
                            className="w-full h-64 md:h-full object-cover"
                        />
                    </div>

                    <div className="md:w-2/3 p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
                                <h2 className="text-xl text-gray-700 mb-4">by {book.author}</h2>
                            </div>
                            <span className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full">
                                {book.category}
                            </span>
                        </div>

                        <div className="flex items-center gap-6 mb-6">
                            <div className="flex items-center">
                                <span className="text-yellow-500 text-xl mr-2">⭐</span>
                                <span className="text-lg font-semibold">{book.rating}/5</span>
                            </div>
                            <div className="text-gray-600">
                                <span className="font-medium">Published:</span> {book.year}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Description</h3>
                            <p className="text-gray-700 leading-relaxed">{book.description}</p>
                        </div>

                        <div className="flex gap-4">
                            <Link
                                to="/browse"
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-3 rounded-lg transition-colors"
                            >
                                Browse More Books
                            </Link>
                            <Link
                                to="/add-book"
                                className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-center font-semibold py-3 rounded-lg transition-colors"
                            >
                                Add New Book
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;