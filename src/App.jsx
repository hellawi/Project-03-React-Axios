import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/HomePage";
import NewsPage from "./components/NewsPage/NewsPage";
import Politics from "./components/Politics/Politics";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/news" element={<NewsPage />}/>
        <Route path="/terms" element={<Politics />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
