import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';

const categories = [
    'Fantasy', 'Finance', 'Self-Help', 'Fiction',
    'Sci-Fi', 'History', 'Psychology', 'Productivity', 'Biography'
];

const AddBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        year: new Date().getFullYear(),
        category: 'Fiction',
        description: '',
        rating: 4.0,
        coverImage: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg'
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
        }

        if (!formData.author.trim()) {
            newErrors.author = 'Author is required';
        }

        if (formData.year < 1800 || formData.year > new Date().getFullYear()) {
            newErrors.year = 'Please enter a valid year';
        }

        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        }

        if (formData.rating < 0 || formData.rating > 5) {
            newErrors.rating = 'Rating must be between 0 and 5';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsSubmitting(false);
            return;
        }

        // Generate unique ID
        const newBook = {
            ...formData,
            id: Date.now(), // Simple unique ID
            year: parseInt(formData.year),
            rating: parseFloat(formData.rating)
        };

        dispatch(addBook(newBook));

        // Redirect to browse page
        setTimeout(() => {
            navigate('/browse');
        }, 1000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Add a New Book</h1>
            <p className="text-gray-600 mb-8">Fill in the details to add a new book to our library.</p>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Title */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Book Title *
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'
                                }`}
                            placeholder="Enter book title"
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                        )}
                    </div>

                    {/* Author */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Author *
                        </label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.author ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'
                                }`}
                            placeholder="Enter author name"
                        />
                        {errors.author && (
                            <p className="text-red-500 text-sm mt-1">{errors.author}</p>
                        )}
                    </div>

                    {/* Year */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Publication Year *
                        </label>
                        <input
                            type="number"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.year ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'
                                }`}
                            min="1800"
                            max={new Date().getFullYear()}
                        />
                        {errors.year && (
                            <p className="text-red-500 text-sm mt-1">{errors.year}</p>
                        )}
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Category *
                        </label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Rating (0-5) *
                        </label>
                        <input
                            type="number"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            step="0.1"
                            min="0"
                            max="5"
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.rating ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'
                                }`}
                        />
                        {errors.rating && (
                            <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
                        )}
                    </div>

                    {/* Cover Image */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Cover Image URL *
                        </label>
                        <input
                            type="text"
                            name="coverImage"
                            value={formData.coverImage}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="https://example.com/book-cover.jpg"
                            required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Enter a valid image URL (e.g., from Amazon, Unsplash)
                        </p>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Description *
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.description ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'
                            }`}
                        placeholder="Enter book description"
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                    )}
                </div>

                {/* Preview */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2">Cover Preview:</h3>
                    <div className="flex items-center gap-4">
                        <img
                            src={formData.coverImage}
                            alt="Preview"
                            className="w-24 h-32 object-cover rounded border"
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/150x200/3b82f6/ffffff?text=No+Image';
                            }}
                        />
                        <div>
                            <p className="text-sm text-gray-600">
                                Image will appear like this in book cards
                            </p>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                    >
                        {isSubmitting ? 'Adding Book...' : 'Add Book to Library'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBook;