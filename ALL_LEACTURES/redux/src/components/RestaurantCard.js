import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, locality } = props?.resturantData?.info
    return (
        <div className='res-card'>
            <img src={CDN_URL + cloudinaryImageId} alt='res-logo' className='res-logo' />
            <h3>{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <p>rating - {avgRating}</p>
            <p>Address - {locality}</p>
            <p>{costForTwo}</p>
        </div>
    )
};

// Higher order component
// input ==> restaurantCard ==> RestaurntCardWithLabeled

export const withLabeled = (RestaurantCard) => {

    return (props) => {
        return (
            <div className='recommended'>
                <label>recommened</label>
                <RestaurantCard {...props}/>
            </div>
        )
    };
}

export default RestaurantCard;