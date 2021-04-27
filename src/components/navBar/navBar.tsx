import { NavBarItem } from 'components/navBar/navBarItem';
import "styles/navBar.css";
import { useWindowSize } from 'useWindowSize';
import { NavBarMobile } from './navBarMobile/navBarMobile';

export const NavBar = () => {
    const navBarItems = [
        {itemName:'Home', itemRoute:'/'},
        {itemName:'About', itemRoute:'/about-me'}
    ];

    const {width}=useWindowSize();

    if(width>750){
        return(
        <ul>
            {navBarItems.map((item)=>(
                    <NavBarItem itemName={item.itemName} itemRoute={item.itemRoute}/>
                )
            )}
        </ul>
    );
    }else return <NavBarMobile/>;
    

    
}
