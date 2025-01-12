import { ArticleType } from "../../types/ArticleType"
import styles from "./index.module.scss"

type ArticleProps = {
    article: ArticleType | null
    onClick?: () => void
}
const Article = ({ article, onClick }: ArticleProps) => {
    if (!article) return null

    return <article className={styles.article} onClick={onClick}>
        <div className={styles.image}>
            <img src={article.img} srcSet={`${article.img_2x} 2x`} alt={article.title} />
        </div>
        <div className={styles.content}>
            <span className={styles.category}>{article.tags}</span>
            <h2 className={styles.title}>{article.title}</h2>
            <div className={styles.meta}>
                <span className={styles.author}>{article.autor}</span>
                <span className={styles.date}>{article.date}</span>
                <span className={styles.views}>{article.views} Views</span>
            </div>
            <p className={styles.except}>
                {article.text}
            </p>
        </div>
    </article>
}
export default Article