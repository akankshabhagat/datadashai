import { useSelector, useDispatch } from "react-redux";
import { submitQuery, setResult } from "../store.js";

const SearchHistory = () => {
  const history = useSelector((state) => state.query.history);
  const dispatch = useDispatch();

  const handleHistoryClick = (query) => {
    dispatch(submitQuery(query));

 
    setTimeout(() => {
      let mockData = [];
      if (query.includes("sales")) {
        mockData = [
          { month: "Jan", sales: 5000 },
          { month: "Feb", sales: 7000 },
          { month: "Mar", sales: 6500 },
          { month: "Apr", sales: 8000 },
        ];
      } else if (query.includes("revenue")) {
        mockData = [
          { product: "A", revenue: 10000 },
          { product: "B", revenue: 15000 },
          { product: "C", revenue: 12000 },
        ];
      } else {
        mockData = [{ message: "No data available for this query" }];
      }
      dispatch(setResult(mockData));
    }, 2000);
  };

  return (
    <div className="w-28 sm:w-64 bg-gray-300 h-screen p-1 sm:p-4 shadow-lg">
      <h2 className="text-xs sm:text-lg sm:font-semibold mb-4">Search History</h2>
      <ul>
        {history.map((query, index) => (
          <li
            key={index}
            onClick={() => handleHistoryClick(query)}
            className="p-2 hover:bg-gray-300 cursor-pointer border-b"
          >
            {query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;