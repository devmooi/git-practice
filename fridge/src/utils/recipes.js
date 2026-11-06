// 레시피 데이터 (recipe 페이지와 같은 내용)
export const recipes = [
  {
    id: 1,
    title: "김치볶음밥",
    icon: "kimchi",
    ingredients: ["김치", "밥", "스팸", "달걀"],
    recipe:
      "1. 팬에 기름을 두르고 다진 김치와 스팸을 볶습니다. 2. 밥을 넣고 함께 볶은 뒤 참기름을 두릅니다. 3. 달걀 후라이를 올려 마무리합니다.",
  },
  {
    id: 2,
    title: "계란말이",
    icon: "egg",
    ingredients: ["달걀", "대파"],
    recipe:
      "1. 달걀을 풀고 소금으로 간을 합니다. 2. 다진 대파를 섞어줍니다. 3. 달군 팬에 달걀물을 나누어 부어가며 돌돌 말아줍니다.",
  },
  {
    id: 3,
    title: "스팸두부조림",
    icon: "spam",
    ingredients: ["스팸", "두부", "대파"],
    recipe:
      "1. 두부와 스팸을 도톰하게 썰어 냄비에 번갈아 깝니다. 2. 간장, 고춧가루, 다진 마늘로 양념장을 만들어 부어줍니다. 3. 대파를 올리고 자작하게 조립니다.",
  },
  {
    id: 4,
    title: "된장찌개",
    icon: "doenjang",
    ingredients: ["두부", "대파", "호박", "감자"],
    recipe:
      "1. 뚝배기에 물을 붓고 된장을 풉니다. 2. 감자, 호박을 먼저 넣어 끓입니다. 3. 두부와 대파를 넣고 한소끔 더 끓여 완성합니다.",
  },
];

// 레시피 이름이나 재료에 검색어가 들어간 레시피 찾기
export const searchRecipes = (query) => {
  const q = query.trim();
  if (!q) return [];
  return recipes.filter(
    (r) => r.title.includes(q) || r.ingredients.some((ing) => ing.includes(q))
  );
};
