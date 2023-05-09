import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
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
