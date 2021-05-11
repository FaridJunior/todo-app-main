import React, { useState } from "react";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";
import "./scss/style.css";
import Header from "./components/Header";
import MobileFooter from "./components/MobileFooter";
import MainBgImg from "./components/MainBgImg";
import Attribution from "./components/Attribution";
import { ThemeContext } from "./Context/ThemeContext";

const App = () => {
  let [theme, setTheme] = useState(localStorage.getItem("theme"));
  const themeValue = { theme, setTheme };
  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={`container ${theme}-theme`}>
        <MainBgImg />
        <div className="app-wrapper">
          <Header />
          <AddTodo />
          <VisibleTodoList />
          <Footer />
          <MobileFooter />
          <footer>Drag and drop to reorder list</footer>
          <Attribution />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
