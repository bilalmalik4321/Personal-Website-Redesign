import { useWindowSize } from "useWindowSize";

export const HomePage = () => {
    const {width}=useWindowSize();
    return (<>Home {width}</>);
}