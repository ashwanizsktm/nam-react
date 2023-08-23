import React from 'react';
import ReactDom from "react-dom/client";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OCbzvRLLbTMEOxv1E5fFBQ4N2cfJW-PSg6MeEtLJ&s' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// there is something called inline styling but this is not the prefered way.
// we can write like this or we can take the varible out and put in in obj.. and use it.
//  <div className='res-card' style={{backgroundColor: '#f0f0f0'}}>

// we can receive props as an arguments an js object & from here we can set the all props property or argument.
// we can destructure also in case in props obj we've got a lot of values & we need only few in that case 
//  destructuring will get applied.
/*
const RestaurantCard = ({resName, resStar}) => { // it could be written in this way as well.

 const RestaurantCard = (props) => { 
    const {resName, resStar} = props;
    // return(
        <div>
           <h3>{resName}</h3>
           <p>{resStar}</p>
        </div> 
    )}
 */
const imageCdnId = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, avgRating, totalFee, deliveryTime } = props?.restData;
    return (
        <div className='res-card'>
            <img src={imageCdnId + cloudinaryImageId} alt='res-logo' className='res-logo' />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>Ratings - {avgRating}</h4>
            <h4>Delivery time - {deliveryTime} minutes</h4>
            <h4>cost - {`₹ ${totalFee / 100}`}</h4>
        </div>
    )
}

const restaurantsDataList = [
    {
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "cloudinaryImageId": "onhkq8nwfxrje79dfhe9",
        "locality": "5th Phase",
        "areaName": "JP Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "American",
            "Snacks",
            "Turkish",
            "Portuguese",
            "Continental"
        ],
        "avgRating": 4.2,
        "totalFee": 4000,
        "deliveryTime": 36,
    },
    {
        "name": "Meghana Foods",
        "cloudinaryImageId": "cvo1djhbwrgfqd64k0tl",
        "locality": "Bannergatta Main Road",
        "areaName": "Arakere",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Biryani",
            "Andhra",
            "South Indian",
            "North Indian",
            "Chinese",
            "Seafood"
        ],
        "avgRating": 4.4,
        "totalFee": 4500,
        "deliveryTime": 40,
    },
    {
        "name": "KFC",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "2nd Stage",
        "areaName": "BTM Layout",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
        ],
        "avgRating": 4,
        "totalFee": 3000,
        "deliveryTime": 43,
    },
    {
        "name": "Corner House Ice Cream",
        "cloudinaryImageId": "d8jow58gubldufetgytj",
        "locality": "Panduranganagar",
        "areaName": "Arekere",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts"
        ],
        "avgRating": 4.7,
        "totalFee": 4000,
        "deliveryTime": 26,
    },
    {
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "2nd Stage",
        "areaName": "BTM Layout",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Pizzas"
        ],
        "avgRating": 4.1,
        "totalFee": 3000,
        "deliveryTime": 28,
    },
    {
        "name": "Chowman",
        "cloudinaryImageId": "06d12ec700e4118d159fab6c3a7256dd",
        "locality": "bilekahalli",
        "areaName": "Arekere",
        "costForTwo": "₹800 for two",
        "cuisines": [
            "Chinese",
            "Asian",
            "Thai",
            "Oriental",
            "Burmese",
            "Tibetan"
        ],
        "avgRating": 4.1,
        "totalFee": 4000,
        "deliveryTime": 34,
    },
    {
        "name": "McDonald's",
        "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
        "locality": "2nd Stage",
        "areaName": "BTM Layout",
        "costForTwo": "₹400 for two",
        "totalFee": 3000,
        "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
        ],
        "avgRating": 4.2,
        "deliveryTime": 29
    },
    {

        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "lczhp9lptdzbqn09nfns",
        "locality": "2nd Stage",
        "areaName": "BTM Layout",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.1,
        "totalFee": 3000,
        "deliveryTime": 25,
        "totalFee": 3000
    },
    {
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "Vega City Mall",
        "areaName": "Bannerghatta Main Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Fast Food",
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 3.9,
        "deliveryTime": 32,
        "totalFee": 3200
    }
]

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>search</div>
            <div className='res-container'>
                {
                    restaurantsDataList.map((resturantData, index) => (
                        <RestaurantCard key={resturantData.cloudinaryImageId} restData={resturantData} />
                    ))
                }
                {/* we pass property from the component which is called props */}
            </div>
        </div>
    )
}
export const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />)