import { useContext } from 'react'
import { Appcontext } from '../contexts/Appcontext'



const PaginationActual = () => {

  const {page,handlepagechange,posts ,totalpages}=useContext(Appcontext)
  console.log(page)
  console.log(posts)

  return (
    <div className=' h-[7%] w-screen bg-white   shadow-2xl  shadow-black fixed bottom-0 flex justify-center items-center'>
      <div className='w-[60%] flex justify-between'>
        <div className='flex gap-3'>
           { page != totalpages &&
            <button onClick={()=>handlepagechange(page+1)} className=' bg-green-600 text-black px-3 py-1 rounded-md'>Next</button>
           }

           { 
            page != 1 &&
            <button onClick={()=>handlepagechange(page-1)} className= ' bg-green-600 text-black px-3 py-1 rounded-md'>Previous</button>
           }
        </div>
        <div>Page {page} of {totalpages} </div>
      </div>
    </div>
  )
}

export default PaginationActual