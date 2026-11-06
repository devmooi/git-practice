// 냉장고 칸별 재료 데이터
// section: 칸 이름 / items: { name, icon, count }
export const fridgeShelves = [
  {
    id: "shelf-1",
    items: [
      { name: "우유", icon: "🥛", count: 2 },
      { name: "방울토마토", icon: "🍅", count: 1, bowl: true },
      { name: "꿀", icon: "🍯", count: 1 },
      { name: "달걀", icon: "🥚", count: 3, tray: true },
    ],
  },
  {
    id: "shelf-2",
    items: [
      { name: "토마토", icon: "🍅", count: 5 },
      { name: "브로콜리", icon: "🥦", count: 3 },
    ],
  },
  {
    id: "shelf-3",
    items: [
      { name: "감자", icon: "🥔", count: 2 },
      { name: "파프리카", icon: "🍋", count: 2 },
      { name: "고추", icon: "🌶️", count: 1 },
      { name: "브로콜리", icon: "🥦", count: 2 },
    ],
  },
];

export const fridgeDrawers = [
  {
    id: "drawer-left",
    items: [
      { name: "대파", icon: "🥬", count: 1 },
      { name: "당근", icon: "🥕", count: 2 },
      { name: "토마토", icon: "🍅", count: 2 },
    ],
  },
  {
    id: "drawer-right",
    items: [
      { name: "양배추", icon: "🥬", count: 1 },
      { name: "방울토마토", icon: "🍒", count: 1 },
      { name: "브로콜리", icon: "🥦", count: 1 },
    ],
  },
];

export const fridgeBottom = [
  { name: "오이", icon: "🥒", count: 2 },
  { name: "두부", icon: "🧈", count: 2 },
];

export const fridgeDoor = [
  { id: "door-1", items: [{ name: "달걀", icon: "🥚", count: 4 }] },
  { id: "door-2", items: [{ name: "달걀", icon: "🥚", count: 4 }] },
  {
    id: "door-3",
    items: [
      { name: "오렌지주스", icon: "🧃", count: 2 },
      { name: "우유", icon: "🍶", count: 1 },
    ],
  },
];
