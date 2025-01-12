import { useContext } from "react";
import { ArticleContext } from "./ArticleProvider";

export const useArticleContext = () => {
    const context = useContext(ArticleContext);
    if (!context) {
        throw new Error("useClassesContext must be used within a ClassesProvider");
    }
    return context;
};