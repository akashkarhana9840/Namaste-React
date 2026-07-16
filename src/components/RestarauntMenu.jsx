import { useEffect, useState } from "react";
import { api } from "../utils/Constants";
import ShimmerUi from "./shimmerUi";
const RestarauntMenu = () => {
    let [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchMenu()
    }, [])
   const fetchMenu= async ()=>{
       const data = await fetch(api)
       const json = await data.json();
       console.log(json)  
       setResInfo (
         json.data)
       console.log(setResInfo) 
    }
    if (resInfo === null) {
        return <ShimmerUi />
    }
    const { name,cuisines,costForTwo} =
        resInfo?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0].info
        ;
    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")}-{costForTwoMessage}
            </p>

            <ul>
                <li>kabab</li>
                <li>roshGulle</li>
                <li>gulabJamun</li>
            </ul>
        </div>)
    
}
export default RestarauntMenu;