import styles from "./index.module.scss"
import Logo from "../Logo/Logo"
import CloseIcon from "../Icons/CloseIcon"
import MenuTree from "../MenuTree"
import { useMenuContext } from "../../context/MenuContext"


const Menu = () => {
    const { menu, setIsMenuActive, isMenuActive } = useMenuContext()
    const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setIsMenuActive(false)
    }

    return (
        <>
            {
                isMenuActive ? <div className={styles.navBackground} ></div> : null
            }
            <nav className={styles.nav}>
                <div className={styles.mobileMenuTopPart}>
                    <Logo />
                    <button className={styles.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </button>
                </div>
                <MenuTree items={menu} />
            </nav>
        </>
    );
}
export default Menu