import { useEffect, useState } from "react";
import { MENU_API } from "../utils/Constants";
import ShimmerUi from "./shimmerUi";
import { useParams } from "react-router-dom";
const RestarauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  console.log("Calling URL:", MENU_API + resId);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    console.log(data);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
    console.log(setResInfo);
  };
  if (resInfo === null) {
    return <ShimmerUi />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          <li>
            {item.card.info.name}-{"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>;
        })}
      </ul>
    </div>
  );
};
export default RestarauntMenu;
