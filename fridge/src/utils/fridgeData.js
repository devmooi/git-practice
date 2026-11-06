// 냉장고 칸별 재료 데이터
// items: { name, icon, count, bowl? }
// y: 선반 위치 (냉장고 위에서부터의 높이)

// 위칸 (냉장실)
export const fridgeShelves = [
  {
    id: "shelf-1",
    y: 100,
    items: [
      { name: "우유", icon: "🥛", count: 2 },
      { name: "방울토마토", icon: "🍅", count: 3, bowl: true },
      { name: "상추", icon: "🥬", count: 2, bowl: true },
    ],
  },
  {
    id: "shelf-2",
    y: 190,
    items: [
      { name: "토마토", icon: "🍅", count: 2 },
      { name: "파프리카", icon: "🍋", count: 2 },
      { name: "브로콜리", icon: "🥦", count: 2 },
    ],
  },
  {
    id: "shelf-3",
    y: 278,
    items: [
      { name: "당근", icon: "🥕", count: 2 },
      { name: "양배추", icon: "🥬", count: 1 },
      { name: "오이", icon: "🥒", count: 2 },
    ],
  },
];

// 아래칸 (냉동실)
export const fridgeFreezer = [
  {
    id: "freezer-1",
    y: 380,
    items: [
      { name: "아이스크림", icon: "🍦", count: 2 },
      { name: "얼음", icon: "🧊", count: 3 },
    ],
  },
  {
    id: "freezer-2",
    y: 466,
    items: [
      { name: "소고기", icon: "🥩", count: 2 },
      { name: "닭고기", icon: "🍗", count: 2 },
      { name: "베이컨", icon: "🥓", count: 1 },
    ],
  },
];

// 위 문 안쪽 선반
export const fridgeDoor = [
  { id: "door-1", items: [{ name: "달걀", icon: "🥚", count: 4 }] },
  {
    id: "door-2",
    items: [
      { name: "소스", icon: "🧴", count: 1 },
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

// 아래 문 안쪽 선반
export const freezerDoor = [
  { id: "fdoor-1", items: [{ name: "만두", icon: "🥟", count: 3 }] },
  { id: "fdoor-2", items: [{ name: "얼음", icon: "🧊", count: 3 }] },
];
