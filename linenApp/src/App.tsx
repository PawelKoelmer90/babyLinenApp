import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import CategoryTablesContainer from './components/CategoryTable/CategoryTablesContainer';
import ItemDetails from './components/CategoryTable/ItemDetails';
import NavigationHeader from './components/NavigationHeader/NavigationHeader';
import ChangeCategoriesPage from './Pages/ChangeCategories/ChangeCategoriesPage';
import { CategoriesContextProvider } from './store/categoriesContext';
import { ItemsContextProvider } from './store/itemsContext';

function App() {
  return (
    <CategoriesContextProvider>
      <ItemsContextProvider>
        <BrowserRouter basename={'/'}>
          <NavigationHeader />
          <div style={{ paddingTop: '2rem' }}>
            <Routes>
              <Route path="/" element={<CategoryTablesContainer />} />
              <Route path="/category/:id" element={<ItemDetails />} />
              <Route
                path="/change-categories"
                element={<ChangeCategoriesPage />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </ItemsContextProvider>
    </CategoriesContextProvider>
  );
}

export default App;
