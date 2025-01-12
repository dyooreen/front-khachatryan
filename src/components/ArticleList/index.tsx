import styles from "./index.module.scss"
import { useArticleContext } from "../../context/ArticleContext"
import Loading from "../Icons/LoadingIcon"
import Popup from "../Popup"
import { useState } from "react"
import { ArticleType } from "../../types/ArticleType"
import Article from "../Article"

const ArticleList = () => {
    const { articles, isLoading, searchText } = useArticleContext()
    const [popupData, setPopupData] = useState<ArticleType | null>(null)
    return <>
        {isLoading ? <div className={styles.loadingScreen}><Loading /></div> : null}
        {<Popup article={popupData} onClose={() => setPopupData(null)} />}
        <div
            className={styles.articleContainer + " " + (isLoading ? styles.containerLoading : " ")}>

            {!articles?.length &&
                <p className={styles.notFound}>
                    No article found with - <span>{searchText}</span>
                </p>}

            {articles?.map((article, j) =>
                <Article key={j} article={article} onClick={() => setPopupData(article)} />
            )}
        </div>
    </>
}
export default ArticleList