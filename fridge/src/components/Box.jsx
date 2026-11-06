import { useRef } from "react";
import {
  fridgeShelves,
  fridgeFreezer,
  fridgeDoor,
  freezerDoor,
} from "../utils/fridgeData";
import "../styles/fridge.css";

// 문이 다 열린 뒤에만 클릭으로 이동하도록 기다리는 시간 (ms)
// (휴대폰: 첫 번째 터치 = 문 열기, 두 번째 터치 = 이동)
const OPEN_DELAY = 350;

// 식재료 그림이 있는 폴더 (public/icons)
const ICON_PATH = `${import.meta.env.BASE_URL}icons/`;

// 재료 하나를 count 만큼 그림으로 펼쳐서 보여줌
const Food = ({ item }) => {
  const icons = Array.from({ length: item.count }, (_, i) => (
    <img
      key={i}
      className="food-icon"
      src={`${ICON_PATH}${item.icon}.png`}
      alt={i === 0 ? item.name : ""}
      draggable={false}
    />
  ));

  return (
    <div
      className={item.bowl ? "food food--bowl" : "food"}
      title={`${item.name} ${item.count}개`}
    >
      {icons}
    </div>
  );
};

// 선반 한 칸 (유리판 + 위에 놓인 재료)
const Shelf = ({ shelf }) => (
  <div style={{ "--y": shelf.y }}>
    <div className="shelf" />
    <div className="shelf-row">
      {shelf.items.map((item, i) => (
        <Food key={i} item={item} />
      ))}
    </div>
  </div>
);

// 문 (바깥면 + 두께 + 안쪽 선반). 오른쪽 경첩으로 열림
const Door = ({ className, bins, children }) => (
  <div className={`door ${className}`}>
    <div className="face door-outer">
      <div className="handle" />
      {children}
    </div>
    <div className="face door-edge" />
    <div className="face door-inner">
      {bins.map((bin) => (
        <div key={bin.id} className="door-bin">
          {bin.items.map((item, i) => (
            <Food key={i} item={item} />
          ))}
          <div className="door-bin-front" />
        </div>
      ))}
    </div>
  </div>
);

// onOpenFridge: 위 문이 열린 상태에서 안을 클릭하면 실행 (없으면 클릭해도 아무 일 없음)
const Box = ({ onOpenFridge }) => {
  const openedAt = useRef(0); // 위 문이 열리기 시작한 시각

  const startOpen = () => {
    if (!openedAt.current) openedAt.current = Date.now();
  };
  const stopOpen = () => {
    openedAt.current = 0;
  };
  const clickInside = () => {
    if (!onOpenFridge) return;
    if (openedAt.current && Date.now() - openedAt.current >= OPEN_DELAY) {
      onOpenFridge();
    }
  };

  return (
    <div className="fridge-wrap">
      {/* 보이지 않는 마우스 감지 영역: 위 = 냉장실 문, 아래 = 냉동실 문
          tabIndex: 휴대폰 터치나 키보드 Tab 으로도 열 수 있게 */}
      <div
        className="zone zone-door"
        tabIndex={0}
        aria-label="냉장실 문 열기"
        onMouseEnter={startOpen}
        onMouseLeave={stopOpen}
        onFocus={startOpen}
        onBlur={stopOpen}
        onClick={clickInside}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onOpenFridge) onOpenFridge();
        }}
      />
      <div className="zone zone-freezer" tabIndex={0} aria-label="냉동실 문 열기" />

      <div className="scene">
        <div className="cabinet">
          {/* ---- 바닥 그림자 + 다리 ---- */}
          <div className="face floor-shadow" />
          <div className="foot foot--left" />
          <div className="foot foot--right" />

          {/* ---- 몸체 ---- */}
          <div className="face face-back" />
          <div className="face face-top" />
          <div className="face ceiling-light" />
          <div className="face face-bottom" />
          <div className="face face-right" />
          <div className="face face-left" />

          {/* ---- 냉장실 / 냉동실 선반 ---- */}
          {fridgeShelves.map((shelf) => (
            <Shelf key={shelf.id} shelf={shelf} />
          ))}
          <div className="face divider-floor" />
          {fridgeFreezer.map((shelf) => (
            <Shelf key={shelf.id} shelf={shelf} />
          ))}

          {/* 앞쪽 테두리 + 가운데 칸막이 */}
          <div className="face face-frame" />
          <div className="face face-divider" />

          {/* ---- 문 2개 ---- */}
          <Door className="door-upper" bins={fridgeDoor}>
            {/* 귀여운 얼굴 */}
            <div className="fridge-face">
              <span className="eye eye--left" />
              <span className="eye eye--right" />
              <span className="mouth" />
            </div>
          </Door>
          <Door className="door-lower" bins={freezerDoor}>
            {/* 로고 */}
            <img
              className="door-logo"
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="로고"
              draggable={false}
            />
          </Door>
        </div>
      </div>
    </div>
  );
};

export default Box;
