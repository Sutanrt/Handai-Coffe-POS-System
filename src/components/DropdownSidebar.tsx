
import { Link } from 'react-router-dom';
interface DropDownProps{
    items:{
    title:string;
    logo:string;
    dropDownItems:{
        title:string;
        link:string;
    }[]}[];
    toggleDropDown:(index:number)=>void;
    openMenus:{[key:number]:boolean};
}

const DropdownSidebar : React.FC<DropDownProps> = ({items,toggleDropDown,openMenus}) =>{

    return(
        <div >
            {items.map((item,index)=>(
                    <div  className="  text-[20px] max-lg:text-[15px] lg:text-[20px] max-md:text-[15px] max-sm:text-[15px] mt-[15%] transition-all duration-500" key={index}>
                        <div className="flex justify-between mt-[5%]" onClick={()=>toggleDropDown(index)}>
                            <div className='flex align-left justify-left items-center '><img className='w-full  max-w-[25px] md:max-w-[25px] max-md:max-w-[15px] max-sm:max-w-[15px]  rounded-4xl mr-[5%] transition-all duration-500' src={item.logo} />
                            <p>{item.title}</p></div>
                            <span className='ml-[25%]'>{openMenus[index]? "▲" : "▼"}</span>
                        </div>
                        {openMenus[index]&&<ul className='flex-col justify-center align-center ml-[15%] transition-all duration-500'>
                            {item.dropDownItems.map((subItem,subIndex)=>(
                                <li className=" mt-[5%]" key={subIndex}><Link to={subItem.link}>{subItem.title}</Link></li>
                            ))}
                            
                            </ul>}
                    </div>
                
            ))}
            
            
            
        </div>
    );
}

export default DropdownSidebar;