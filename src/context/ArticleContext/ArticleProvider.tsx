import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { ArticleType } from "../../types/ArticleType";
import getData from "../../lib/fetchData";

type ArticleContextProps = {
    articles: ArticleType[] | null,
    setSearchText: (text: string) => void,
    searchText: string,
    isLoading: boolean,
    setIsLoading: (isLoading: boolean) => void
}
const ArticleContext = createContext<ArticleContextProps | null>(null);

const ArticleProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [articles, setArticles] = useState<ArticleType[] | null>(null);
    const [filteredArticles, setFilteredArticles] = useState<ArticleType[] | null>(articles)
    const [searchText, setSearchText] = useState("")
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (!articles) return
        setFilteredArticles(
            articles?.filter((article) => article.title.includes(searchText) || article.text.includes(searchText))
        )
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [searchText, articles])

    useEffect(() => {
        (async () => {
            const res = await getData<ArticleType[]>("https://cloud.codesupply.co/endpoint/react/data.json")
            if (res) setArticles(res)
        })()
    }, []);

    return (
        <ArticleContext.Provider value={{ articles: filteredArticles, setSearchText, searchText, isLoading, setIsLoading }}>
            {children}
        </ArticleContext.Provider>
    );
}
export { ArticleContext, ArticleProvider }