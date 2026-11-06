// 하단 탭: 홈 / 냉장고 / 레시피 / 마이페이지
const tabs = [
  {
    id: "home",
    label: "홈",
    icon: (
      <>
        <path d="M3.5 11 12 4l8.5 7v8.5a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5Z" />
        <path d="M9.5 21v-6h5v6" />
      </>
    ),
  },
  {
    id: "fridge",
    label: "냉장고",
    icon: (
      <>
        <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
        <path d="M6 9h12M15 5.5v1.5M15 11.5v3" />
      </>
    ),
  },
  {
    id: "recipe",
    label: "레시피",
    icon: (
      <>
        <rect x="4.5" y="2.5" width="15" height="19" rx="1.5" />
        <path d="M4.5 18h15M9 6v4.5M8 6v2.5a1 1 0 0 0 2 0V6M14.5 6c1.3 0 1.8 1.2 1.8 2.6s-.7 2-1.8 2V14" />
      </>
    ),
  },
  {
    id: "mypage",
    label: "마이페이지",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
  },
];

const BottomNav = ({ active, onSelect }) => {
  return (
    <nav className="bottom-nav">
      {/* 아이콘 줄: 360 x 40, 아이콘 사이 65px */}
      <div className="nav-icons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={tab.id === active ? "nav-btn is-active" : "nav-btn"}
            aria-label={tab.label}
            aria-current={tab.id === active ? "page" : undefined}
            onClick={() => onSelect(tab.id)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {tab.icon}
            </svg>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
