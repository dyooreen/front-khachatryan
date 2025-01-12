import Logo from "../Logo/Logo"
import styles from "./index.module.scss"
import Ham from "../Icons/Ham"
import SearchBar from "../SearchBar"
import useIsMobile from "../../hooks/useIsMobile"
import Menu from "../Menu"
import { useMenuContext } from "../../context/MenuContext"

const Header = () => {
    const isMobile = useIsMobile()
    const { setIsMenuActive, isMenuActive } = useMenuContext()

    const onHamClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setIsMenuActive(true)
    }
    return <>
        <header className={styles.header}>
            <div>
                <Logo />
            </div>
            <div>
                <button className={styles.ham} onClick={onHamClick}>
                    <Ham />
                </button>
                <SearchBar />
            </div>
            <div className={isMobile && isMenuActive ? styles.showNav : ""}>
                <Menu />
            </div>
        </header>
    </>
}
export default Header