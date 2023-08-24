import { CDN_URL } from "../utils/constants";
// named export will be imported as in {} whereas default export doesn't need this.

const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, avgRating, totalFee, deliveryTime } = props?.restData;
    return (
        <div className='res-card'>
            <img src={CDN_URL + cloudinaryImageId} alt='res-logo' className='res-logo' />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>Ratings - {avgRating}</h4>
            <h4>Delivery time - {deliveryTime} minutes</h4>
            <h4>cost - {`₹ ${totalFee / 100}`}</h4>
        </div>
    )
}

export default RestaurantCard;