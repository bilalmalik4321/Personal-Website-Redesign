import React, { createContext, useContext, useState } from 'react';

type NavBarContent = {
    hamburgerOpen: boolean
    setHamburgerOpen:(c: boolean) => void
  }

const NavBarContextProvider = createContext<NavBarContent>({
    hamburgerOpen: false, // set a default value
    setHamburgerOpen: () => {},
})

export const useNavBarContext = ()=>useContext(NavBarContextProvider);

export const NavBarContext = (props:React.HTMLAttributes<any>) => {

    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

    return(<NavBarContextProvider.Provider value={{hamburgerOpen,setHamburgerOpen}}>{props.children}</NavBarContextProvider.Provider>);
}
