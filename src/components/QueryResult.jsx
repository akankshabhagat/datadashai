import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const QueryResult = () => {
  const { result, loading, error } = useSelector((state) => state.query);

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!result || result.length === 0)
    return <p className="text-center text-gray-500">Enter a query to see results</p>;

  return (
    <div className="p-4 w-full flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Query Results</h2>

      {/* Sales Data Chart */}
      {result[0]?.month && (
        <div className="w-full max-w-3xl bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium mb-2">Monthly Sales Data</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={result}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Revenue Data Chart */}
      {result[0]?.product && (
        <div className="w-full max-w-3xl bg-white p-4 shadow-lg rounded-lg mt-6">
          <h3 className="text-lg font-medium mb-2">Product Revenue Data</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={result}>
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* No Matching Data */}
      {result[0]?.message && (
        <p className="text-center text-gray-600 mt-4">{result[0].message}</p>
      )}
    </div>
  );
};

export default QueryResult;