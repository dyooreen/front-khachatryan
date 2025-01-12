import { MenuItemType } from "../../types/MenuType";
import TreeNode from "../TreeNode";

type MenuTreeProps = {
    items: MenuItemType[] | null
}

const MenuTree = ({ items }: MenuTreeProps): JSX.Element | null => {

    if (!items) return null;
    return (
        <ul>
            {items.map((item, j) => (
                <TreeNode item={item} key={j}>
                    {item.sub && <MenuTree items={item.sub} />}
                </TreeNode>
            ))}
        </ul>
    );
};
export default MenuTree