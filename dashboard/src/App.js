import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
function App() {
  return (
    <Router>
      <div>
        <Sidebar/>
        <Routes>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;