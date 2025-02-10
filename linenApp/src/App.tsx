import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import CategoryTablesContainer from './components/CategoryTable/CategoryTablesContainer';
import ItemDetails from './components/CategoryTable/ItemDetails';
import NavigationHeader from './components/NavigationHeader/NavigationHeader';

function App() {
  return (
    <BrowserRouter>
      <NavigationHeader>
        <Routes>
          <Route path="/" element={<CategoryTablesContainer />} />
          <Route path="/category/:id" element={<ItemDetails />} />
        </Routes>
      </NavigationHeader>
    </BrowserRouter>
  );
}

export default App;
