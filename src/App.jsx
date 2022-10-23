import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavHeader from './components/layouts/NavHeader';
import Traces from './components/pages/Traces';
import Excavation from './components/pages/Excavation';
import WorkingLegal from './components/pages/WorkingLegal';
import Administrative from './components/pages/Administrative';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavHeader />}>
            <Route path="/trace" element={<Traces />} />
            <Route path="/excavation" element={<Excavation />} />
            <Route path="/working_legal" element={<WorkingLegal />} />
            <Route path="/administrative" element={<Administrative />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
