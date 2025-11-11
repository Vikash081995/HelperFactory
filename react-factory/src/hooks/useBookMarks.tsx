import { useContext } from "react";
import { BookMarkContext } from "../context/BookMarkContext";

export function useBookMarkContext() {
  return useContext(BookMarkContext);
}
