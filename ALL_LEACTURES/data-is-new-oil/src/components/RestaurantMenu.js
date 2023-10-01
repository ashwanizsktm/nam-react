import MenuShimmer from "./MenuShimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from '../utils/constants';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from './RestaurantCategory'
import { useState } from "react";

const RestaurantMenu = () => {
    const { id } = useParams();

    const resInfo = useRestaurantMenu(id);

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <MenuShimmer />;
    const itemCards = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card.card['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    const { name, cuisines, costForTwoMessage, cloudinaryImageId, areaName, city } = resInfo?.data?.cards[0]?.card?.card.info;
    return (
        <div className="menu">
            <div>
                <h1>{name}</h1>
                <img className="menu-img" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            </div>
            <div className="details">
                <h2>{cuisines.join(', ')}</h2>
                <h2>{costForTwoMessage}</h2>
                <p> {areaName} </p>
                <p>{city}</p>
            </div>
            <div className="manu-items">
              {itemCards.map((category, index) => (
                 /*
                    here it becomes the controlled component of Restaurant category component bcz it's this RestaurantMenu component
                    is controlling the RestaurantCategory component.
                */
              <RestaurantCategory key={index} category={category}
               showItems={index===showIndex && true}  setShowIndex={()=> setShowIndex(index)}/>
              ))}
            </div>
        </div>
    )

}
export default RestaurantMenu;