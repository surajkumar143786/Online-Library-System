import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Browse Books', path: '/browse' },
        { name: 'Add Book', path: '/add-book' },
    ];

    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                        <Link to="/" className="text-2xl font-bold tracking-tight">
                            📚 Online Library
                        </Link>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg transition-colors ${location.pathname === link.path
                                        ? 'bg-blue-700 font-semibold'
                                        : 'hover:bg-blue-500'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;