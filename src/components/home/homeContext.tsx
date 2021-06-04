import React, { createContext, useContext, useState } from 'react';

type HomeContent = {
    projectModal: boolean
    setProjectModal:(c: boolean) => void
  }

const HomeContextProvider = createContext<HomeContent>({
    projectModal: false, // set a default value
    setProjectModal: () => {},
})

export const useHomeContext = ()=>useContext(HomeContextProvider);

export const HomeContext = (props:React.HTMLAttributes<any>) => {
    
    const [projectModal, setProjectModal] = useState<boolean>(false)

    return(<HomeContextProvider.Provider value={{projectModal, setProjectModal}}>{props.children}</HomeContextProvider.Provider>);
}
