import Footer from "./components/Footer";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useState, createContext } from "react";

export const AppContext = createContext();
export const AppView = "Single Page"; // "Single Page" OR "Multi Page"

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  useEffect(() => {
    const storedMenu = localStorage.getItem("selectedMenu");
    if (storedMenu) {
      setSelectedMenu(storedMenu);
    } else {
      setSelectedMenu("Home");
    }
  }, []);

  const contextData = {
    selectedMenu: selectedMenu,
    setSelectedMenu: setSelectedMenu,
  };
  return (
    <AppContext.Provider value={contextData}>
      <div className="flex flex-col font-sans bg-white min-h-screen dark:bg-slate-950 mb-0">
        <Header />
        <Main />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
