import { fridgeShelves, fridgeFreezer, fridgeDoor } from "../utils/fridgeData";
import "../styles/fridge.css";

// 재료 하나를 count 만큼 아이콘으로 펼쳐서 보여줌
const Food = ({ item }) => {
  const icons = Array.from({ length: item.count }, (_, i) => (
    <span key={i} className="food-icon">
      {item.icon}
    </span>
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

const Box = () => {
  return (
    <div className="scene">
      <div className="cabinet">
        {/* ---- 몸체 바깥면 ---- */}
        <div className="face face-back" />
        <div className="face face-top" />
        <div className="face face-bottom" />
        <div className="face face-right" />
        <div className="face face-left">
          {/* 스마트 냉장고 신호 */}
          <div className="signal">
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* ---- 선반 + 재료 ---- */}
        {fridgeShelves.map((shelf) => (
          <div key={shelf.id} style={{ "--y": shelf.y }}>
            <div className="shelf" />
            <div className="shelf-row">
              {shelf.items.map((item, i) => (
                <Food key={i} item={item} />
              ))}
            </div>
          </div>
        ))}

        {/* 앞쪽 테두리 */}
        <div className="face face-frame" />

        {/* ---- 앞으로 빠진 냉동 서랍 ---- */}
        <div className="freezer">
          <div className="face drawer-bottom" />
          <div className="face drawer-back" />
          <div className="face drawer-left" />
          <div className="face drawer-right" />
          <div className="drawer-row">
            {fridgeFreezer.map((item, i) => (
              <div key={i} className="tray">
                <Food item={item} />
              </div>
            ))}
          </div>
          <div className="face drawer-front">
            <div className="handle" />
          </div>
        </div>

        {/* ---- 열린 문 ---- */}
        <div className="door">
          <div className="face door-outer">
            <div className="handle handle--door" />
          </div>
          <div className="face door-edge" />
          <div className="face door-inner">
            {fridgeDoor.map((bin) => (
              <div key={bin.id} className="door-bin">
                {bin.items.map((item, i) => (
                  <Food key={i} item={item} />
                ))}
                <div className="door-bin-front" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
