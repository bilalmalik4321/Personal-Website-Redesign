import React, { createContext, useContext, useState } from 'react';

type AppContent = {
    hamburgerOpen: boolean
    setHamburgerOpen:(c: boolean) => void
  }

const AppContextProvider = createContext<AppContent>({
    hamburgerOpen: false, // set a default value
    setHamburgerOpen: () => {},
})

export const useAppContext = ()=>useContext(AppContextProvider);

export const NavBarContext = (props:React.HTMLAttributes<any>) => {

    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

    return(<AppContextProvider.Provider value={{hamburgerOpen,setHamburgerOpen}}>{props.children}</AppContextProvider.Provider>);
}
