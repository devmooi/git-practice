import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Box from "./components/Box";
import BottomNav from "./components/BottomNav";
import RecipeListPage from "./components/RecipeListPage";
import "./styles/app.css";

// 주소 끝(#/recipes)으로 화면을 나눔 → 브라우저 뒤로가기도 동작
const RECIPES = "#/recipes";

const useHash = () => {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
};

const goRecipes = () => {
  window.location.hash = RECIPES;
};

const goHome = () => {
  if (window.location.hash) window.location.hash = "";
};

const App = () => {
  const [query, setQuery] = useState("");
  const isRecipes = useHash() === RECIPES;

  // 하단 탭: 레시피 → 레시피창, 홈 / 냉장고 → 냉장고 화면
  const selectTab = (id) => {
    if (id === "recipe") goRecipes();
    if (id === "home" || id === "fridge") goHome();
  };

  if (isRecipes) {
    return (
      <div className="app">
        <RecipeListPage />
        <BottomNav active="recipe" onSelect={selectTab} />
      </div>
    );
  }

  return (
    <div className="app">
      <Header title="레시피를 찾아보세요" />

      <main className="app-main">
        <SearchBar query={query} onChange={setQuery} />
        <section className="fridge-area" aria-label="냉장고">
          {/* 위 문이 열린 상태에서 안을 클릭하면 레시피창으로 이동 */}
          <Box onOpenFridge={goRecipes} />
        </section>
      </main>

      <BottomNav active="fridge" onSelect={selectTab} />
    </div>
  );
};

export default App;
