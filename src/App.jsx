import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";

import QueryInput from "./components/queryinput.jsx";
import QueryResult from "./components/queryResult.jsx";
import SearchHistory from "./components/searchHistory.jsx";
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
