/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  BookMarkContext,
  bookmarksContextValue,
} from "../context/BookMarkContext";

const BookMarksProvider = ({ children }: { children: React.ReactNode }) => {
  const [savedArticles, setSavedArticles] = useState<[]>([]);

  const addArticles = (article: any) => {
    setSavedArticles((prev) => [...prev, article]);
  };

  const removeArticle = (id: string | number) => {
    setSavedArticles((prev) => prev.filter((a) => a.id !== id));
  };

  const contextValue = {
    ...bookmarksContextValue,
    addArticles,
    removeArticle,
    savedArticles,
  };

  return (
    <BookMarkContext.Provider value={contextValue}>
      {children}
    </BookMarkContext.Provider>
  );
};

export default BookMarksProvider;
