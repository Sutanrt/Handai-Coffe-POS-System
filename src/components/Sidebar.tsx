import { useState } from 'react';
import DropdownSidebar from './DropdownSidebar';
const sideBarContent=[
    {
        title:"Dashboard",
        logo:"/handai_coffee.png",
        dropDownItems:[{
            title:"Dashboard",link:"/Dashboard"
        },{
            title:"Stok Menu",link:"/StokMenu"
        },{
            title:"Pembukuan",link:"/Pembukuan"
        }]
        
    },{
        title:"Dashboard",
        logo:"/handai_coffee.png",
        dropDownItems:[{
            title:"Dashboard",link:"/Dashboard"
        },{
            title:"Stok Menu",link:"/StokMenu"
        },{
            title:"Pembukuan",link:"/Pembukuan"
        }]
        
    },{
        title:"Dashboard",
        logo:"/handai_coffee.png",
        dropDownItems:[{
            title:"Dashboard",link:"/Dashboard"
        },{
            title:"Stok Menu",link:"/StokMenu"
        },{
            title:"Pembukuan",link:"/Pembukuan"
        }]
        
    },{
        title:"Dashboard",
        logo:"/handai_coffee.png",
        dropDownItems:[{
            title:"Dashboard",link:"/Dashboard"
        },{
            title:"Stok Menu",link:"/StokMenu"
        },{
            title:"Pembukuan",link:"/Pembukuan"
        }]
        
    }
]

const Sidebar: React.FC<{title:string,image:string,isExtended:boolean,setExtended:()=>void}> =({title,image,isExtended,setExtended}) => {
    const [openMenus,setOpenMenus]= useState<{[key: number ]: boolean}>({});
    const toggleDropDownMenu=(index:number)=>{
        setOpenMenus((prev)=>({...prev, [index]:!prev[index]}));
    }
    return (
        // text-green  bg-white h-screen shadow-2xl w-full
        // ${isExtended ? "p-[3%] max-sm:max-w-[15%] lg:max-w-[20%]" : "pl-[1%] max-sm:max-w-[10%] lg:max-w-[15%]"}
        // rounded-[10px] transition-all duration-300
        <aside className={`text-green  w-full bg-white h-screen shadow-42l  ${isExtended? "max-sm:max-w-[25%] max-lg:max-w-[25%] max-md:max-w-[20%] lg:max-w-[20%] p-[3%]":"max-sm:max-w-[20%] max-md:max-w-[15%] max-lg:max-w-[10%] lg:max-w-[6%] max-w-[6%]  pl-[1%]"} rounded-[10px] transition-all duration-450`}>
             <div className={`flex  ${isExtended? "justify-between items-center ":"mt-[50%] flex-col items-center justify-center"} mb-4`}>
                <div className='flex items-center pr-[50%]'>
                    <img className={` w-full max-w-[35px] max-sm:max-w-[25px] md:max-w-[25px]  max-md:max-w-[25px] rounded-full  `} src="./handai_coffee.png"/><p className='font-bold text-2xl max-sm:text-xl md:text-2xl  max-md:text-xl' >{title}</p>
                </div>
<img onClick={()=>setExtended()} className={`mt-[5%]] ${isExtended? "items-end justify-end":"items-center justify-center align-middle"}flex max-w-[30px] max-sm:max-w-[20px] max-md:max-w-[20px] w-full`} src={isExtended? 'exit_left.png':'exit_right.png'}/>
             </div>
         {isExtended&&<DropdownSidebar items={sideBarContent} toggleDropDown={toggleDropDownMenu} openMenus={openMenus}/>   }   
         
        </aside>

    );

}
export default Sidebar;