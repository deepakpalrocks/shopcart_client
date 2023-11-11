import { createContext, useState,React} from "react"

const DataContext=createContext(null);
const DataProvider=({children})=>{
    const [account,setAccount]=useState('');
    return (
        <DataContext.Provider 
         value={{account,setAccount}}
        >
            {children}
        </DataContext.Provider>
      )
}
 export {DataProvider,DataContext};