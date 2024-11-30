import {createContext,  useState } from "react";
import { baseUrl } from "../baseurl";

export const Appcontext = createContext();

export default function AppContextProvider({children})
{
    // usestates
    const [loading,setloading] = useState(false)
    const [page,setpage] = useState(1)
    const [posts,setposts] = useState([])
    const [totalpages,settotalpages] = useState(null)

    // async
    async function fetchpostsdata(page=1) 
    {  
        setloading(true)
         let url = `${baseUrl}?page=${page}`
        try
        {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data)
          setpage(data.page)
          setposts(data.posts)
          settotalpages(data.totalPages)
        }
        
        catch(error)
        {
            console.log("error in Api")
        }  
        setloading(false);  
    }

    function handlepagechange(page)
    {
        setpage(page)
        fetchpostsdata(page)
    }


    // object
    const value = {
        loading,
        setloading,
        posts,
        setposts,
        totalpages,
        settotalpages,
        page,
        setpage,
        fetchpostsdata,
        handlepagechange
        
    }

    // console.log(value)
     
    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>
}