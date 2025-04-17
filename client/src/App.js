import logo from "./logo.svg";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import { BookContextProvider } from './Context/BookDetails';
import BookPage from './Pages/BookPage';
import UserPage from './Pages/UserPage';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/book/:bookId" element={<BookPage />} />
                <Route path="/user" element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
