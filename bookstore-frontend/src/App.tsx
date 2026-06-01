import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import About from "./pages/AboutPage";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />

      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Books Page */}
        <Route path="/books" element={<BookList />} />

        {/* Book Details */}
        <Route path="/books/:id" element={<BookDetails />} />

        {/*  About Page */}
        <Route path="/about" element={<About />} />

        {/*  Add Book */}
        <Route path="/add-book" element={<AddBook />} />

        {/*  Edit Book */}
        <Route path="/edit/:id" element={<EditBook />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;