import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import CategoryTablesContainer from './components/CategoryTable/CategoryTablesContainer';
import ItemDetails from './components/CategoryTable/ItemDetails';
import NavigationHeader from './components/NavigationHeader/NavigationHeader';
import ChangeCategoriesPage from './Pages/ChangeCategoriesPage';

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <NavigationHeader>
        <Routes>
          <Route path="/" element={<CategoryTablesContainer />} />
          <Route path="/category/:id" element={<ItemDetails />} />
          <Route path="/change_categories" element={<ChangeCategoriesPage />} />
        </Routes>
      </NavigationHeader>
    </BrowserRouter>
  );
}

export default App;
