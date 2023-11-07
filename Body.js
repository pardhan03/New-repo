import { useState, useEffect} from "react";
import RestaurantCard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{

    const [listofrestaurants,setListofRestaurant]=useState([]);
    const [filteredRestaurant, setfilteredRestaurant]=useState([]);

    const [searchText, setsearchText]=useState();

    useEffect(()=>{
        fetchdata()
    },[]);

    const fetchdata = async () =>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json);
        setListofRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    return listofrestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="Body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}/>
                        <button onClick={()=>{
                            const filteredRestaurant=listofrestaurants.filter((res)=>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setfilteredRestaurant(filteredRestaurant);
                        }}>Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={()=>{
                        const filteredList=listofrestaurants.filter((res)=>res.data.avgRating>4);
                        setListofRestaurant(filteredList);
                    }}
                >
                    Top Rated estaurant
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant)=>(
                    <Link key={restaurant.parentId}  
                    to={"/restaurant/"+restaurant.parentId}>
                        <RestaurantCard resData={restaurant}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;