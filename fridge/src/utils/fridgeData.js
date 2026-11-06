// 냉장고 칸별 재료 데이터
// items: { name, icon, count, bowl? }
//   icon: public/icons 폴더의 그림 파일 이름 (.png 빼고)
// y: 선반 위치 (냉장고 위에서부터의 높이)

// 위칸 (냉장실)
export const fridgeShelves = [
  {
    id: "shelf-1",
    y: 100,
    items: [
      { name: "우유", icon: "milk", count: 2 },
      { name: "치즈", icon: "cheese", count: 1 },
      { name: "김치", icon: "kimchi", count: 1 },
      { name: "두부", icon: "tofu", count: 1 },
    ],
  },
  {
    id: "shelf-2",
    y: 190,
    items: [
      { name: "토마토", icon: "tomato", count: 2 },
      { name: "오이", icon: "cucumber", count: 1 },
      { name: "상추", icon: "lettuce", count: 1 },
      { name: "사과", icon: "apple", count: 1 },
    ],
  },
  {
    id: "shelf-3",
    y: 278,
    items: [
      { name: "당근", icon: "carrot", count: 2 },
      { name: "양파", icon: "onion", count: 1 },
      { name: "배추", icon: "napa-cabbage", count: 1 },
      { name: "고추장", icon: "gochujang", count: 1 },
    ],
  },
];

// 아래칸 (냉동실)
export const fridgeFreezer = [
  {
    id: "freezer-1",
    y: 380,
    items: [
      { name: "아이스크림", icon: "ice-cream", count: 2 },
      { name: "만두", icon: "dumpling", count: 1 },
      { name: "피자", icon: "pizza", count: 1 },
    ],
  },
  {
    id: "freezer-2",
    y: 466,
    items: [
      { name: "소고기", icon: "beef", count: 1 },
      { name: "돼지고기", icon: "pork", count: 1 },
      { name: "새우", icon: "shrimp", count: 1 },
      { name: "생선", icon: "fish", count: 1 },
    ],
  },
];

// 위 문 안쪽 선반
export const fridgeDoor = [
  { id: "door-1", items: [{ name: "달걀", icon: "egg", count: 2 }] },
  {
    id: "door-2",
    items: [
      { name: "간장", icon: "soy-sauce", count: 1 },
      { name: "양념소스", icon: "sauce", count: 1 },
      { name: "마요네즈", icon: "mayonnaise", count: 1 },
    ],
  },
  {
    id: "door-3",
    items: [
      { name: "콜라", icon: "cola", count: 1 },
      { name: "주류", icon: "soju", count: 1 },
    ],
  },
];

// 아래 문 안쪽 선반
export const freezerDoor = [
  { id: "fdoor-1", items: [{ name: "떡갈비", icon: "tteokgalbi", count: 2 }] },
  {
    id: "fdoor-2",
    items: [
      { name: "오징어", icon: "squid", count: 1 },
      { name: "조개", icon: "clam", count: 1 },
    ],
  },
];
