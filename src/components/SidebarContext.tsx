import { createContext,useContext,useState,ReactNode, Children } from "react";

type SidebarContextType={
    isExtended:boolean;
    setIsextended:(value:boolean)=>void;
}
const SidebarContext= createContext<SidebarContextType|undefined>(undefined);

export const SidebarProvider=({Children}:{Children:ReactNode})=>{
    const [isExtended,setIsextended]= useState<boolean>(false);
    return(
        <SidebarContext.Provider value={{isExtended,setIsextended}}>
            {Children}
        </SidebarContext.Provider>
    );
}
export const useSideBar=()=>{
    const context=useContext(SidebarContext);
    if (!context) {
        throw new Error("gk di sidebar provider");
      }
    return context;
}