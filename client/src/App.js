import logo from "./logo.svg";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
