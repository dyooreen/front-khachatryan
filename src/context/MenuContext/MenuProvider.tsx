import { createContext, FC, ReactNode, useEffect, useState } from "react";
import getData from "../../lib/fetchData";
import { MenuItemType, MenuType } from "../../types/MenuType";

type MenuContextProps = {
    menu: MenuItemType[] | null,
    isMenuActive: boolean,
    setIsMenuActive: (isMenuActive: boolean) => void
}
const MenuContext = createContext<MenuContextProps | null>(null);

const MenuProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [menu, setMenu] = useState<MenuItemType[] | null>(null);
    const [isMenuActive, setIsMenuActive] = useState(false);


    useEffect(() => {
        (async () => {
            const res = await getData<MenuType>("/menu.json");
            if (res)
                setMenu(res.menu);
        })();
    }, [])



    return (
        <MenuContext.Provider value={{ menu, isMenuActive, setIsMenuActive }}>
            {children}
        </MenuContext.Provider>
    );
}
export { MenuContext, MenuProvider }