import { useContext,useEffect } from "react"
import { Appcontext } from "./contexts/Appcontext"
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import PaginationActual from "./components/PaginationActual"

const App = () => {

  const {fetchpostsdata} = useContext(Appcontext)

  useEffect(()=>{
    fetchpostsdata()
},[])
 
  return (
    <div >
      <Header/>
      <Blogs/>
      <PaginationActual/>
    </div>
  )
}

export default App