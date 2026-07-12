import RestarauntCard from "./RestarauntCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./shimmerUi";
const Body = () => {
  const [Restarauntlist, setRestarauntlist] = useState([]);
  const [Searched, setSearched] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setRestarauntlist(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    ); // optional chaining
  };
  return Restarauntlist.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={Searched}
            onChange={(e) => {
              setSearched(e.target.value);
            }}
          />
            <button onClick={() => {
             const filteredRes= Restarauntlist.filter((res) => {
                return res.info.name.toLowerCase().includes(Searched.toLowerCase())
             }
              )
              setRestarauntlist(filteredRes)
          }}>search</button>
        </div>
        <button
          onClick={() => {
            // Logic for searching 4+ star restaurants
            setRestarauntlist(
              Restarauntlist.filter(
                (restaraunt) => restaraunt.info.avgRating > 4.5,
              ),
            );
          }}
        >
          click to search 4+ star Restaurants
        </button>
      </div>
      <div className=" res-container">
        {Restarauntlist.map((restaraunt) => {
          return (
            <RestarauntCard key={restaraunt.info.id} resData={restaraunt} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
