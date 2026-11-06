// 상단: 뒤로가기 + 로고 + 제목
const Header = ({ title }) => {
  return (
    <header className="app-header">
      <button
        type="button"
        className="icon-btn back-btn"
        aria-label="뒤로가기"
        onClick={() => window.history.back()}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 4 7 12l8 8" />
        </svg>
      </button>
      <img className="app-logo" src={`${import.meta.env.BASE_URL}logo.png`} alt="" />
      <h1 className="app-title">{title}</h1>
    </header>
  );
};

export default Header;
