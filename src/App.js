import React from 'react'
import Navbar from './components/Navbar'//added by Rajmal Varma
import Sidebar from './components/Sidebar'
import Home from './pages/Home';
import Video from './pages/Video';
import { BrowserRouter,
        Routes,
        Route
} from "react-router-dom";
import SignIn from './pages/SignIn';


  // Coded by Santosh
const App = () => {
  return (
    <div className="flex">
      <BrowserRouter>
      <Sidebar/>
      <main className="w-[85%] bg-[#1b1b1b]">
        <Navbar/>
       <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="signin" element={<SignIn/>}/>
          <Route path="video">
            <Route path=":id" element={<Video/>}/>
          </Route>
        </Route>
       </Routes>
      </main>
      </BrowserRouter>
    </div>
  )
}

export default App
