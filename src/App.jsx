import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// import Nav from './components/nav';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>page 1</h1>} />
        </Routes>
        {/* <Nav /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
