/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Nav bar, it provides conditional rendering to either
* display the desktop navbar or the mobile navbar implemented as a hamburer
 */

import { NavBarItem } from 'components/navBar/navBarItem';
import { useWindowSize } from 'useWindowSize';
import { NavBarMobile } from './navBarMobile/navBarMobile';
import "styles/navBar.css";

export const NavBar: React.FC = () => {
    const navBarItems = [
        {itemName:'Home', itemRoute:'/'},
        {itemName:'About Me', itemRoute:'/about-me'},
        {itemName:'Experience', itemRoute:'/experience'},
        {itemName:'Projects', itemRoute:'/about-me'},
        {itemName:'Resume', itemRoute:'/about-me'}
    ];

    const {width}=useWindowSize();

    if(width>750){
        return(
        <ul className="nav-bar-container">
            {navBarItems.map((item)=>(
                    <NavBarItem itemName={item.itemName} itemRoute={item.itemRoute}/>
                )
            )}
        </ul>
    );
    }else return <NavBarMobile/>;
    

    
}
