import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation bar - shows on all pages except 404 */}
      <Routes>
        <Route path="*" element={null} />
        <Route path="/" element={<Navbar />} />
        <Route path="/browse" element={<Navbar />} />
        <Route path="/browse/:category" element={<Navbar />} />
        <Route path="/book/:id" element={<Navbar />} />
        <Route path="/add-book" element={<Navbar />} />
      </Routes>

      <main className="container mx-auto px-4 py-8">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Browse Books Page with category filtering */}
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/browse/:category" element={<BrowseBooks />} />

          {/* Book Details Page */}
          <Route path="/book/:id" element={<BookDetails />} />

          {/* Add Book Page */}
          <Route path="/add-book" element={<AddBook />} />

          {/* 404 Page - Catch all undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;