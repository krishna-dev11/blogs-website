import React, { useContext } from 'react'
import { Appcontext } from '../contexts/Appcontext'
import Card from './Card'
import Spinner from './Spinner'

const Blogs = () => {

 const {loading,posts}= useContext(Appcontext)

  return (
    
      <div className='w-[60%]  mx-auto flex gap-8 flex-col py-14 '>
       {
        loading ? 
      <Spinner/> : posts.map((post)=>(
        <Card post={post} key={post.map} />
      ))
       }
      </div>
      
  )
}

export default Blogs