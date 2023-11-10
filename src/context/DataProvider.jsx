import { createContext, useState,React} from "react"

const DataContext=createContext(null);
const DataProvider=({children})=>{
    const [acccount,setAcccount]=useState('');
    return (
        <DataContext.Provider 
         value={{acccount,setAcccount}}
        >
            {children}
        </DataContext.Provider>
      )
}
 export default DataProvider;