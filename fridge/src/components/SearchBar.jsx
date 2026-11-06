import { searchRecipes } from "../utils/recipes";

const ICON_PATH = `${import.meta.env.BASE_URL}icons/`;

// 검색창 + 검색 결과 목록
const SearchBar = ({ query, onChange }) => {
  const results = searchRecipes(query);
  const searching = query.trim() !== "";

  return (
    <div className="search">
      <label className="search-box">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m16.5 16.5 4 4" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="레시피나 재료를 검색해보세요"
          aria-label="레시피나 재료 검색"
        />
      </label>

      {searching && (
        <ul className="search-results">
          {results.length === 0 && (
            <li className="search-empty">'{query}' 레시피가 없어요</li>
          )}
          {results.map((r) => (
            <li key={r.id} className="result-card">
              <img src={`${ICON_PATH}${r.icon}.png`} alt="" />
              <div>
                <strong>{r.title}</strong>
                <p className="result-ings">{r.ingredients.join(" · ")}</p>
                <p className="result-text">{r.recipe}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
