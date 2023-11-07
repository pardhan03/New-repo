import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { API_DATA } from "./utils/constant";

const RestaurantMenu = () =>{

    const[resinfo, setresinfo]=useState(null); 
    
    const {resid}=useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu= async () =>{
        const data=await fetch(API_DATA+resid);
        const json= await data.json();
        //console.log(json);
        //console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        //console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        //console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
        setresinfo(json?.data);
    }

    if(resinfo===null) 
        return <Shimmer/>

    const items=resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console .log(items); 
    
    return(
        <div>
            <ul>
                <li>restaurant</li>
                <li>Menu</li> 
                <li>{items[0]?.card?.info?.name}</li>  
                <li> {items.map((item)=>(<li key={item?.card?.info?.id}>
                    {
                        item?.card?.info?.name
                    }             
                </li>))}</li>
            </ul>
        </div>
    )
};

export default RestaurantMenu;