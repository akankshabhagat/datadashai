import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import QueryInput from "./components/Queryinput.jsx";
import QueryResult from "./components/QueryResult.jsx"
import  SearchHistory from "./components/SearchHistory.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
   
       <div className="">
      <Navbar />
      <div className="flex flex-1">
        <SearchHistory />
        <div className="flex flex-col gap-10 w-full  items-center  ">
          <QueryInput />
          <QueryResult />
        </div>
      </div>


    </div>   
    
  )
}

export default App
