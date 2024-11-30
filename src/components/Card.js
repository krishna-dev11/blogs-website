import React from 'react'

const Card = (props) => {
  return (
      <div className='flex flex-col gap-1 '>
        <div className=' font-bold text-lg '>{props.post.title}</div>
        <div> By <span> {props.post.author} </span> on <span className='font-semibold underline  '> {props.post.category}</span></div>
        <div>Posted on <span>{props.post.date}</span></div>
        <div>{props.post.content}</div>
        <div className=' flex gap-3'>
            {
                (props.post.tags).map((tag)=>(
                    <span className=' text-blue-700 font-semibold cursor-pointer underline text-base'>#{tag}</span>
                ))
            }
        </div>
    </div>
  )
}

export default Card