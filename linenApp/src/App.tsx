import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import CategoryTablesContainer from './components/CategoryTable/CategoryTablesContainer';
import ItemDetails from './components/CategoryTable/ItemDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CategoryTablesContainer />} />
        <Route path="/category/:id" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
