import RestaurantCard from '../components/RestaurantCard';
import React, { useEffect, useState } from "react";
import Shimmer from './Shimmer';

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    /*   Whenever there is  a change the in state(i.e value) variable(usesState) 
         React triggers a reconciliation algorithm (rerenders the component)*/ 
    /*   In the Search whenever the we are updating a value(i.e on each key stroke)
         React triggers a reconciliation algorithm (rerenders the component)
         let's check with console.log("body renders") by putting above the comments.
         console.log("body renders");
    */

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9137705&lng=77.6292697&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let json = await data.json();
        let listOfRestaurant = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(listOfRestaurant);
        setFilteredRestaurant(listOfRestaurant);
    }

    return listOfRestaurant.length === 0 ? ( 
          <Shimmer/> 
          ) : 
          (
            <div className='body'>
            <div className='search-filter-container'>
                <button className='filter-btn' onClick={() => {
                    const filteredList = listOfRestaurant.filter(res => res.info.avgRating > 4);
                    setListOfRestaurant(filteredList);
                }}>Top rated restaurants</button>
                <div className='search'>
                    <input type='text' placeholder='search restaurant' value={searchText}
                     onChange={(e) => {
                        setSearchText(e.target.value)
                        if(e.target.value==='') fetchData() }}  />
                    <button onClick={() => {
                        const filteredRestaurantByName = listOfRestaurant.filter(res => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                           setFilteredRestaurant(filteredRestaurantByName);
                    }}>search</button>
                </div>
            </div>
         
            <div className='res-container'>
                {  
                    filteredRestaurant.map((resturantData) => (
                        <RestaurantCard key={resturantData.info.id} resturantData={resturantData} />
                    ))
                }
            </div>
        </div>
    )
}
export default Body;
/* End of Body Component*/