import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 max-w-md">
                <p className="text-red-700 font-medium mb-2">Invalid URL:</p>
                <code className="text-red-600 bg-red-100 px-3 py-1 rounded">
                    {location.pathname}
                </code>
            </div>

            <p className="text-gray-600 text-lg mb-8">
                The page you're looking for doesn't exist or has been moved.
            </p>

            <Link
                to="/"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;