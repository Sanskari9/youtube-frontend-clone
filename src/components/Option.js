import React from 'react'

function Option({Icon,title}) {
  return (
    <div className="flex items-center gap-5 cursor-pointer py-2">
      <Icon/>
      <h2>{title}</h2>
    </div>
  )
}

export default Option
