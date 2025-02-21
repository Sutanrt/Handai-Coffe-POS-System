import { useState  } from "react"; 
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
const LandingPages: React.FC =() => {
    const [isExtended,setIsExtended]=useState(true);
    const setExtended=()=>{
        setIsExtended(!isExtended);
    }
    return(
    <div className="bg-white rounded-1xl w-full flex h-screen">

       
        <Dashboard/>
       
    </div>
    
    );
}

export default LandingPages;