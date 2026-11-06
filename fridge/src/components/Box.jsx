import {
  fridgeShelves,
  fridgeDrawers,
  fridgeBottom,
  fridgeDoor,
} from "../utils/fridgeData";
import "../styles/fridge.css";

// 재료 하나를 count 만큼 아이콘으로 펼쳐서 보여줌
const Food = ({ item }) => {
  const icons = Array.from({ length: item.count }, (_, i) => (
    <span key={i} className="food-icon">
      {item.icon}
    </span>
  ));

  let className = "food";
  if (item.bowl) className += " food--bowl";
  if (item.tray) className += " food--tray";

  return (
    <div className={className} title={`${item.name} ${item.count}개`}>
      {icons}
    </div>
  );
};

const Box = () => {
  return (
    <div className="fridge">
      {/* 냉장고 본체 */}
      <div className="fridge-body">
        <div className="fridge-light" />

        {fridgeShelves.map((shelf) => (
          <div key={shelf.id} className="shelf">
            {shelf.items.map((item, i) => (
              <Food key={i} item={item} />
            ))}
          </div>
        ))}

        <div className="drawers">
          {fridgeDrawers.map((drawer) => (
            <div key={drawer.id} className="drawer">
              {drawer.items.map((item, i) => (
                <Food key={i} item={item} />
              ))}
              <div className="drawer-front" />
            </div>
          ))}
        </div>

        <div className="bottom-drawer">
          {fridgeBottom.map((item, i) => (
            <Food key={i} item={item} />
          ))}
          <div className="drawer-front" />
        </div>
      </div>

      {/* 열린 문 */}
      <div className="fridge-door">
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
  );
};

export default Box;
