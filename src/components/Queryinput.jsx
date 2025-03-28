import { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { submitQuery, setResult, setError, addToHistory } from "../store.js";

const querySuggestions = [
  "Show me last month's sales",
  "Compare last year's sales with this year",
  "Top 2 products by revenue",
  "Show total revenue for Q1 2024",
  "Show customer growth this year",
  "Monthly expenses for 2023",
  "Total orders placed this week",
];

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 2) {
      setFilteredSuggestions(
        querySuggestions.filter((q) =>
          q.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredSuggestions([]);
    }
  };

  // Handle search submission
  const handleQuerySubmit = (searchQuery = query) => {
    if (!searchQuery.trim()) {
      dispatch(setError("Query cannot be empty"));
      return;
    }

    dispatch(submitQuery(searchQuery));
    dispatch(addToHistory(searchQuery));  

    setFilteredSuggestions([]);  
    setQuery(searchQuery);  

    setTimeout(() => {
      let mockData = [];
      if (searchQuery.includes("sales")) {
        mockData = [
          { month: "Jan", sales: 1000 },
          { month: "Feb", sales: 2000 },
          { month: "Mar", sales: 3500 },
          { month: "Apr", sales: 6000 },
        ];
      } else if (searchQuery.includes("revenue")) {
        mockData = [
          { product: "A", revenue: 50000 },
          { product: "B", revenue: 10000 },
          { product: "C", revenue: 15000 },
          { product: "D", revenue: 19000 },
        ];
        const match = searchQuery.match(/top (\d+)/i);
        const topN = match ? parseInt(match[1]) : mockData.length;
        mockData = mockData.sort((a, b) => b.revenue - a.revenue).slice(0, topN);
      } else if (searchQuery.includes("customer")) {
        mockData = [
          { year: 2021, customers: 1200 },
          { year: 2022, customers: 1500 },
          { year: 2023, customers: 1800 },
          { year: 2024, customers: 2200 },
        ];
      } else if (searchQuery.includes("expenses")) {
        mockData = [
          { month: "Jan", expenses: 2000 },
          { month: "Feb", expenses: 2500 },
          { month: "Mar", expenses: 2200 },
          { month: "Apr", expenses: 2700 },
        ];
      } else if (searchQuery.includes("orders")) {
        mockData = [
          { day: "Monday", orders: 150 },
          { day: "Tuesday", orders: 200 },
          { day: "Wednesday", orders: 180 },
          { day: "Thursday", orders: 230 },
          { day: "Friday", orders: 210 },
        ];
      } else {
        mockData = [{ message: "No data available for this query" }];
      }

      dispatch(setResult(mockData));
    }, 2000);
  };

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setFilteredSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-4 relative w-full flex items-center justify-center">
      <div className="w-full max-w-2xl flex flex-col" ref={inputRef}>
        {/* Input Box and Search Icon */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="What are you looking for?"
            className="rounded-full bg-gray-200 p-3 w-full text-xs sm:text-xl h-14 outline-none"
          />
          <CiSearch
            onClick={() => handleQuerySubmit()}
            className="bg-blue-500 rounded-full h-10 w-10 p-2 text-white hover:bg-blue-600 cursor-pointer"
          />
        </div>

        {/* Suggestions Dropdown */}
        {filteredSuggestions.length > 0 && (
          <ul className="absolute top-16 left-0    bg-white border w-[40%] rounded shadow-lg mt-2">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleQuerySubmit(suggestion)} // ✅ Immediately search when clicking a suggestion
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default QueryInput;