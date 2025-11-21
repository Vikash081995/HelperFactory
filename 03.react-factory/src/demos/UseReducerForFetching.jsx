import React, { useReducer, useEffect } from "react";
import { useCallback } from "react";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const httpReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: true,
        error: null,
        data: null,
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};

const UseReducerForFetching = () => {
  const [httpState, dispatch] = useReducer(httpReducer, initialState);

  const fetchPosts = useCallback(async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error("Failed to fetch the data");
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <header>
      <h1>Complex state blog</h1>
      <button onClick={fetchPosts}>Fetch Posts</button>
      {httpState.loading && <p>Loading...</p>}
      {httpState.error && <p>Error: {httpState.error}</p>}
      {httpState.data && (
        <ul>
          {httpState.data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default UseReducerForFetching;
