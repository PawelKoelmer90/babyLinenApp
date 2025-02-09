import React from "react";
import "./App.scss";
import { tablesCategories } from "./data/tablesCategories";
import CategoryTable from "./components/CategoryTable/CateogryTable";

function App() {
  return (
    <>
      {tablesCategories.map((item, index) => {
        return (
          <CategoryTable
            key={`table_${item.id}`}
            index={index}
            tableTitle={item.tableTitle}
          />
        );
      })}
    </>
  );
}

export default App;
