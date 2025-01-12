export type MenuItemType = {
    name: string;
    link: string;
    sub?: MenuItemType[]
};
export type MenuType = {
    menu: MenuItemType[]
}