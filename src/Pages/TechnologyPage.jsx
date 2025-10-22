import {NavigationBar} from "../Components/NavigationBar.jsx";

export function TechnologyPage (){
    return (
        <div className={`min-h-screen bg-center bg-cover 
    bg-[url('/assets/technology/background-technology-mobile.jpg')]
    sm:bg-[url('/assets/technology/background-technology-tablet.jpg')]
    lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]`}>
            <NavigationBar/>
        </div>
    )
}