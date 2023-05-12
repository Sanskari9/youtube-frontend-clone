import React from 'react'

function Option({Icon,title}) {
  return (
    <div className="flex items-center gap-5 cursor-pointer py-2 hover:bg-[#aaaaaa] px-2 my-2 rounded-md">
      <Icon/>
      <h2>{title}</h2>
    </div>
  )
}

export default Option
