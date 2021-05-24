/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Nav bar items, a reusable components that takes the name
* of the nav bar item, and the route to where it will go
 */

import { Link } from "react-router-dom";

interface PropType {
    itemName:string,
    itemRoute:string
}

export const NavBarItem = ({itemName,itemRoute}:PropType) => (
    <li>
        <Link className="nav-link" to={itemRoute}>
            <h2 className="nav-item">{itemName}</h2>
        </Link>
    </li>
);
            