import OutsideAlerter from "../../hooks/outsideAlerter"
import styles from "./index.module.scss"
import { ArticleType } from "../../types/ArticleType"
import CloseIcon from "../Icons/CloseIcon"
import Article from "../Article"

type PopupProps = {
    article: ArticleType | null
    onClose: () => void
}

const Popup = ({ article, onClose }: PopupProps) => {
    return <div
        className={styles.popupContainer + " " + (article ? styles.popupContainerActive : "")}>
        <OutsideAlerter callback={onClose} >
            <div className={styles.popup} >
                <button className={styles.closeButton} onClick={onClose}>
                    <CloseIcon />
                </button>
                <Article article={article} />
            </div>
        </OutsideAlerter >
    </div>
}
export default Popup