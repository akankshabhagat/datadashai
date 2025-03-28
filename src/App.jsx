import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";

import queryInput from "./components/queryinput";
import queryResult from "./components/queryResult";
import searchHistory from "./components/searchHistory";
function App() {
  const [count, setCount] = useState(0)

  return (
   
       <div className="">
      <Navbar />
      <div className="flex flex-1">
        <searchHistory />
        <div className="flex flex-col gap-10 w-full  items-center  ">
          <queryInput />
          <queryResult />
        </div>
      </div>


    </div>   
    
  )
}

export default App
