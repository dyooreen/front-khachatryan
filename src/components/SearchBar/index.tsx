import { useRef, useState } from "react"
import SearchIcon from "../Icons/SearchIcon"
import styles from "./index.module.scss"
import { useArticleContext } from "../../context/ArticleContext"
import CloseIcon from "../Icons/CloseIcon"


const SearchBar = () => {
    const { setSearchText, searchText, setIsLoading } = useArticleContext()
    const inputRef = useRef<HTMLInputElement>(null)
    const [isSearchFormVisible, setIsSearchFormVisible] = useState(false)

    const onSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isSearchFormVisible) return
        inputRef?.current?.focus()
        setIsSearchFormVisible(true)
    }

    const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setIsSearchFormVisible(false);
        setSearchText("")
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        setSearchText(e.target.value);
    }
    return <form className={styles.searchBox}>
        <div
            className={styles.searchBar + " " + (isSearchFormVisible ? styles.searchBarActive : "")}
        >
            <input
                value={searchText}
                onChange={onChange}
                placeholder="Search"
                ref={inputRef}
                type="text"
            />
        </div>
        {
            isSearchFormVisible ?
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </button> :

                <button
                    className={styles.searchButton}
                    onClick={onSearch}
                >
                    <SearchIcon />
                </button>

        }
    </form>
}
export default SearchBar 