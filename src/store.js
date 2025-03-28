import { createSlice, configureStore } from "@reduxjs/toolkit";

const loadHistory = () => {
  try {
    const savedHistory = localStorage.getItem("searchHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  } catch (error) {
    console.error("Failed to load search history:", error);
    return [];
  }
};

const querySlice = createSlice({
  name: "query",
  initialState: {
    query: "",
    result: null,
    loading: false,
    error: null,
    history: loadHistory(),
  },
  reducers: {
    submitQuery: (state, action) => {
      state.query = action.payload;
      state.loading = true;
      state.error = null;
    },
    setResult: (state, action) => {
      state.result = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addToHistory: (state, action) => {
      if (!state.history.includes(action.payload)) {
        state.history.unshift(action.payload);

        try {
          localStorage.setItem("searchHistory", JSON.stringify(state.history));
        } catch (error) {
          console.error("Failed to save search history:", error);
        }
      }
    },
  },
});

export const { submitQuery, setResult, setError, addToHistory } =
  querySlice.actions;

const store = configureStore({
  reducer: { query: querySlice.reducer },
});

export default store;