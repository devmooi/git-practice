import { useEffect, useRef, useState } from "react";
import { categories, recipeCards } from "../utils/recipeList";
import "../styles/recipeList.css";

const BASE = import.meta.env.BASE_URL;

// Figma 그림(public/figma)이 있으면 그것을, 없으면 식재료 아이콘을 보여줌
const FigmaImage = ({ name, fallback, className, style }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`${className} is-fallback`} style={style}>
        <img src={`${BASE}icons/${fallback}.png`} alt="" />
      </span>
    );
  }
  return (
    <img
      className={className}
      style={style}
      src={`${BASE}figma/${name}.png`}
      alt=""
      onError={() => setFailed(true)}
    />
  );
};

// Figma 숫자를 그대로 쓰기 위한 작은 도우미
const box = ({ left, top, w, h }) => ({
  left,
  top,
  ...(w !== undefined && { width: w }),
  ...(h !== undefined && { height: h }),
});

const Chevron = ({ className, label }) => (
  <button type="button" className={`chevron ${className}`} aria-label={label}>
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 18 9 12l6-6" />
    </svg>
  </button>
);

const RecipeCard = ({ card }) => (
  <article className="recipe-card-f" style={{ top: card.top, height: card.height }}>
    <FigmaImage
      className="rc-img"
      name={card.image}
      fallback={card.fallback}
      style={{ ...box(card.img), borderRadius: card.img.radius }}
    />
    <h3 className="rc-title" style={box(card.titleBox)}>
      {card.title}
    </h3>
    <span
      className="rc-avatar"
      style={{ left: card.avatar.left, top: card.avatar.top, width: card.avatar.size, height: card.avatar.size }}
    />
    <span className="rc-author" style={box(card.authorBox)}>
      {card.author}
    </span>
    {card.stars.lefts.map((left) => (
      <span
        key={left}
        className="rc-star"
        style={{ left, top: card.stars.top, width: card.stars.size, height: card.stars.size }}
      />
    ))}
    <span className="rc-views" style={box(card.viewsBox)}>
      {card.views}
    </span>
  </article>
);

// 레시피창_1: 420 x 852 (하단 바 60 은 App 에서 붙임)
// 화면이 420 보다 좁으면 전체를 같은 비율로 줄여서 보여줌
const RecipeListPage = () => {
  const wrapRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    const update = () => setScale(Math.min(1, el.clientWidth / 420));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="recipe-page-wrap" ref={wrapRef}>
      {/* 줄어든 크기만큼만 자리를 차지하게 (852 = 912 - 하단 바 60) */}
      <div style={{ height: 852 * scale, overflow: "hidden" }}>
      <div className="recipe-page" style={{ transform: `scale(${scale})` }}>
        {/* ---- 헤더: 뒤로가기 / 로고 / 검색창 ---- */}
        <header className="rp-header">
          <div className="rp-header-bg" />
          <button
            type="button"
            className="rp-back"
            aria-label="뒤로가기"
            onClick={() => window.history.back()}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18 9 12l6-6" />
            </svg>
          </button>
          <img className="rp-logo" src={`${BASE}logo.png`} alt="" />
          <label className="rp-search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m16.5 16.5 4 4" />
            </svg>
            <input
              type="search"
              placeholder="냉장고 안 재료를 검색해보세요"
              aria-label="냉장고 안 재료 검색"
            />
          </label>
        </header>

        {/* ---- 레시피 분류 ---- */}
        <section className="rp-category" aria-label="레시피 분류">
          <h2 className="rp-category-title">레시피 분류</h2>
          <Chevron className="chevron--left" label="이전 분류" />
          <Chevron className="chevron--right" label="다음 분류" />
          {categories.map((c) => (
            <button key={c.name} type="button" className="rp-cat" aria-label={c.name}>
              <FigmaImage
                className="rp-cat-img"
                name={c.image}
                fallback={c.fallback}
                style={{ left: c.img.left, width: c.img.w, height: c.img.h, top: `calc(50% - ${c.img.h / 2}px - 0.5px)` }}
              />
              <span className="rp-cat-label" style={{ left: c.label.left, top: c.label.top, width: c.label.w }}>
                {c.name}
              </span>
            </button>
          ))}
        </section>

        {/* ---- 레시피 카드 ---- */}
        {recipeCards.map((card) => (
          <RecipeCard key={card.id} card={card} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default RecipeListPage;
