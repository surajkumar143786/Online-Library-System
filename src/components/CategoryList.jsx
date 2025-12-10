import { Link, useLocation } from 'react-router-dom';

const categories = [
    { name: 'All', path: '/browse' },
    { name: 'Fantasy', path: '/browse/Fantasy' },
    { name: 'Finance', path: '/browse/Finance' },
    { name: 'Self-Help', path: '/browse/Self-Help' },
    { name: 'Fiction', path: '/browse/Fiction' },
    { name: 'Sci-Fi', path: '/browse/Sci-Fi' },
    { name: 'History', path: '/browse/History' },
    { name: 'Psychology', path: '/browse/Psychology' },
    { name: 'Productivity', path: '/browse/Productivity' },
];

const CategoryList = () => {
    const location = useLocation();

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Browse by Category</h2>
            <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                    <Link
                        key={category.name}
                        to={category.path}
                        className={`px-4 py-2 rounded-full transition-all ${location.pathname === category.path
                                ? 'bg-blue-600 text-white font-semibold'
                                : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                            }`}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;