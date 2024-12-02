import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portofolio from './pages/Portofolio';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portofolio" element={<Portofolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
