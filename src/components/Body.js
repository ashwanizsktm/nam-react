import RestaurantCard from '../components/RestaurantCard';
import restaurantsDataList from "../utils/mockData";
import { useState } from 'react';

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(restaurantsDataList);
    return (
        <div className='body'>
            <button className='filter-btn' onClick={() => {
                const filteredList = listOfRestaurant.filter(res => res.avgRating > 4);
                setListOfRestaurant(filteredList);
            }}>Top rated restaurants</button>
            <div className='res-container'>
                {  
                    listOfRestaurant.map((resturantData) => (
                        <RestaurantCard key={resturantData.cloudinaryImageId} restData={resturantData} />
                    ))
                }
            </div>
        </div>
    )
}
export default Body;
/* End of Body Component*/