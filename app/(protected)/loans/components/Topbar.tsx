'use client' 
import { useState } from "react";
import { LuCalendarArrowUp, LuCalendarArrowDown } from "react-icons/lu"; 
import Search from "./Search";

const Topbar = () => {
    const [isDateFilter, setIsDateFilter] = useState(false); 

    return (
        <ul className="flex gap-1 w-full items-center justify-center text-2xl mt-2">
             
            <li>
                <Search />
            </li>
            
            <li 
                className="bg-darkText border border-primary/50 shadow-md px-2 py-2 rounded-md"
                onClick={() => setIsDateFilter(!isDateFilter)}
            >
                { !isDateFilter 
                    ? <LuCalendarArrowDown/> 
                    : <LuCalendarArrowUp/>
                }
            </li>
        </ul>
        )
}

export default Topbar