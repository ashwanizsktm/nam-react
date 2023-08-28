import { CDN_URL } from "../utils/constants";
// named export will be imported as in {} whereas default export doesn't need this.

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
}

export default RestaurantCard;