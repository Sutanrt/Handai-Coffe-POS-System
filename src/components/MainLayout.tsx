import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout=()=>{
    const [isExtended,setIsExtended]=useState(true);
    return(
        <div className="flex h-screen bg-gray-100">
            <Sidebar 
        setExtended={() => setIsExtended(!isExtended)} 
        isExtended={isExtended} 
        title="POS" 
        image="image"
            />
            <div className={`flex-1  transition-all duration-300`}>
                <Outlet />
            </div>
        </div>
        
    );
}
export default MainLayout;