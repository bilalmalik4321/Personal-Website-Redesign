/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Home page, seen when entering the app on route '/'
 */

import { useWindowSize } from "useWindowSize";

export const HomePage = () => {
    const {width}=useWindowSize();
    return (<>Home {width}</>);
}