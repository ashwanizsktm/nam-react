import MenuShimmer from "./MenuShimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from '../utils/constants';
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {id} = useParams();
    const resInfo = useRestaurantMenu(id);
    if(resInfo === null) return <MenuShimmer />;
    const {name, cuisines, costForTwoMessage, cloudinaryImageId, areaName, city} = resInfo?.data?.cards[0]?.card?.card?.info;
    console.log(resInfo?.data?.cards[0]?.card?.card?.info);

    return(
            <div className="menu">
                <div>
                <h1>{name}</h1>
                   <img className="menu-img" src={CDN_URL + cloudinaryImageId}  alt="res-logo"/>
                </div>
                <div className="details">
                    <h2>{cuisines.join(',')}</h2>
                    <h2>{costForTwoMessage}</h2>
                    <p> { areaName } </p>
                    <p>{ city }</p>
                </div>
            </div>
        )
}
export default RestaurantMenu;