import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Pages/Homepage';
import Productpage from './components/Pages/Productpage';


function App() {
  return (
<BrowserRouter>
      <div>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productpage" element={<Productpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
