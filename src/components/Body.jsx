import  RestarauntCard  from "./RestarauntCard";
import ResList from "../utils/MockData";
import { useState } from "react";
const Body = () => {
    const [Restarauntlist, setRestarauntlist] = useState(ResList);
  return (
    <div className="body">
          <div className="search">
              <button onClick={() => {
                  // Logic for searching 4+ star restaurants
                  setRestarauntlist(Restarauntlist.filter((restaraunt) => restaraunt.info.avgRating > 4.5
                  ));
              }}>click to search 4+ star Restaurants</button>
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