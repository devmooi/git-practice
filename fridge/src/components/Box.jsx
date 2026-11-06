import { useRef } from "react";
import {
  fridgeShelves,
  fridgeFreezer,
  fridgeDoor,
  freezerDoor,
} from "../utils/fridgeData";
import "../styles/fridge.css";

// 위 문이 이 각도(도) 이상 열려 있을 때만 클릭으로 이동
// (휴대폰: 첫 번째 터치 = 문 열기, 두 번째 터치 = 이동)
const OPEN_ANGLE = 70;

// 문의 지금 회전 각도 구하기 (CSS transform 값에서 계산)
const doorAngle = (el) => {
  if (!el) return 0;
  const m = new DOMMatrix(getComputedStyle(el).transform);
  return Math.abs((Math.atan2(m.m13, m.m11) * 180) / Math.PI);
};

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
const Door = ({ className, bins, children, doorRef }) => (
  <div className={`door ${className}`} ref={doorRef}>
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
  const upperDoor = useRef(null);

  // 위 문이 충분히 열린 상태일 때만 이동
  const clickInside = () => {
    if (onOpenFridge && doorAngle(upperDoor.current) >= OPEN_ANGLE) {
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
          <Door className="door-upper" bins={fridgeDoor} doorRef={upperDoor}>
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
