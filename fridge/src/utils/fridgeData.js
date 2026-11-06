// 냉장고 칸별 재료 데이터
// items: { name, icon, count, bowl? }
// y: 선반 위치 (냉장고 위에서부터의 높이)

export const fridgeShelves = [
  {
    id: "shelf-1",
    y: 140,
    items: [
      { name: "우유", icon: "🥛", count: 2 },
      { name: "방울토마토", icon: "🍅", count: 3, bowl: true },
      { name: "상추", icon: "🥬", count: 3, bowl: true },
    ],
  },
  {
    id: "shelf-2",
    y: 250,
    items: [
      { name: "토마토", icon: "🍅", count: 2 },
      { name: "파프리카", icon: "🍋", count: 2 },
      { name: "브로콜리", icon: "🥦", count: 2 },
    ],
  },
  {
    id: "shelf-3",
    y: 360,
    items: [
      { name: "토마토", icon: "🍅", count: 3 },
      { name: "양배추", icon: "🥬", count: 1 },
      { name: "오이", icon: "🥒", count: 2 },
    ],
  },
];

// 아래 냉동 서랍 (앞으로 빠져나와 있음)
export const fridgeFreezer = [
  { name: "소고기", icon: "🥩", count: 2 },
  { name: "닭고기", icon: "🍗", count: 2 },
  { name: "베이컨", icon: "🥓", count: 2 },
];

// 문 안쪽 선반
export const fridgeDoor = [
  { id: "door-1", items: [{ name: "달걀", icon: "🥚", count: 5 }] },
  {
    id: "door-2",
    items: [
      { name: "소스", icon: "🧴", count: 2 },
      { name: "식초", icon: "🍶", count: 2 },
    ],
  },
  {
    id: "door-3",
    items: [
      { name: "오렌지주스", icon: "🧃", count: 2 },
      { name: "우유", icon: "🥛", count: 1 },
    ],
  },
];
