import RestaurantCard from '../components/RestaurantCard';
import React, { useEffect, useState } from "react";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import {REST_LIST_API} from '../utils/constants';

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(REST_LIST_API);
        let json = await data.json();
        let listOfRestaurant = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(listOfRestaurant);
        setFilteredRestaurant(listOfRestaurant);
    }

    return listOfRestaurant.length === 0 ? ( 
          <Shimmer /> 
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
                        setSearchText(e.target.value);
                        if(e.target.value==='') fetchData();
                    }}  />
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
                       <Link to={`/restaurant/${resturantData.info.id}`}><RestaurantCard key={resturantData.info.id} resturantData={resturantData} /></Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;