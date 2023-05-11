import React from 'react'
import Navbar from './components/Topbar/Navbar'   //added by Rajmal Varma
import Sidebar from './components/Sidebar/Sidebar'
import "./App.css"


const App = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <main className="w-[85%]">
        <Navbar/>
        <videocontainer>
          video cards
        </videocontainer>
      </main>
    </div>
  )
}

export default App
