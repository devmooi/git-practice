import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Box from "./components/Box";
import BottomNav from "./components/BottomNav";
import "./styles/app.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("recipe");

  return (
    <div className="app">
      <Header title="레시피를 찾아보세요" />

      <main className="app-main">
        <SearchBar query={query} onChange={setQuery} />
        <section className="fridge-area" aria-label="냉장고">
          <Box />
        </section>
      </main>

      <BottomNav active={tab} onSelect={setTab} />
    </div>
  );
};

export default App;
