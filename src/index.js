import React from 'react'
import { StrictMode } from 'react/cjs/react.development';
import { reactdom } from "reactdom";
function index() {
  return (
    <div>
      
      <StrictMode>
        reactdom.render(document.getElementById('root'));
      </StrictMode>

    </div>
  )
}

export default index
