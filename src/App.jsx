import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./component/home/HomePage";
import CombinedPage from "./component/combined/CombinedPage";
import { MyContextProvider } from "./source/context/MyContext";
import DetailsPage from "./component/combined/DetailsPage";

function App() {
  return (
    <div className="container">
      <MyContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/combinedPage" element={<CombinedPage />} />
        </Routes>
        <Routes>
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </MyContextProvider>
    </div>
  );
}

export default App;
