// coded by santosh
import React from 'react'
import Comment from './Comment'

function Comments() {
  return (
    <div className="py-4">
      <div className="flex items-center gap-2">
        <img src="https://fabceleby.in/wp-content/uploads/2022/12/Sandeep-Maheshwari-Net-Worth.jpg" alt="" className="h-[50px] w-[50px] rounded-[50%]"/>
        <input type="text" placeholder='Add a comment......' className="w-[100%] border-none bg-transparent outline-none p-2 text-white"/>
      </div>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
  )
}

export default Comments
