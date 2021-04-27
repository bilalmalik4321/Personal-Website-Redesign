import { Link } from "react-router-dom";

interface PropType {
    itemName:string,
    itemRoute:string
}

export const NavBarItem = ({itemName,itemRoute}:PropType) => (
    <li>
        <Link className="nav-link" to={itemRoute}>
            <h2>{itemName}</h2>
        </Link>
    </li>
);
            