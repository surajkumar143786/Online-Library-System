import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
                <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 line-clamp-1">{book.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        {book.category}
                    </span>
                </div>

                <p className="text-gray-600 mb-2">by <span className="font-medium">{book.author}</span></p>

                <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-500 text-sm">📅 {book.year}</span>
                    <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">⭐</span>
                        <span className="font-semibold">{book.rating}/5</span>
                    </div>
                </div>

                <p className="text-gray-700 text-sm line-clamp-2 mb-4">{book.description}</p>

                <Link
                    to={`/book/${book.id}`}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-2 rounded-lg transition-colors"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default BookCard;