import { ReactNode, useEffect, useState } from "react";
import { MenuItemType } from "../../types/MenuType";
import styles from "./index.module.scss"
import useIsMobile from "../../hooks/useIsMobile";
import { useMenuContext } from "../../context/MenuContext";

type MenuItemLiType = {
    item: MenuItemType,
    children: ReactNode
}
const TreeNode = ({ item, children }: MenuItemLiType) => {
    const { isMenuActive } = useMenuContext()
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = useIsMobile()

    useEffect(() => {
        setIsVisible(false)
    }, [isMenuActive])

    const onClickNode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (isMobile) setIsVisible(!isVisible)
    }
    return <li className={styles.treeNode}>
        <button
            className={` ${isVisible ? styles.active : ""}`}
            onClick={onClickNode}
        >
            {item.name}
        </button>
        <div
            className={isMobile && isVisible ? styles.activeNode : ""}
        >
            {children}
        </div>
    </li >
}
export default TreeNode