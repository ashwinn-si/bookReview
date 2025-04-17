import logo from "./logo.svg";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import { BookContextProvider } from './Context/BookDetails';
import BookPage from './Pages/BookPage';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/book/:bookName" element={<BookPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
