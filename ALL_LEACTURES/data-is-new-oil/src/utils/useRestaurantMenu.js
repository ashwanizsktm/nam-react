import { useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const[resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL+resId);
        const resMenudata  = await data.json();
        const resInfo = resMenudata;
        setResInfo(resInfo);
    }
    return resInfo;
}

export default useRestaurantMenu;