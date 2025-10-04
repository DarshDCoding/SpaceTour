import {NavigationBar} from "../Components/NavigationBar.jsx";

export function HomePage() {
    return (
        <div className={`min-h-screen bg-center bg-cover 
    bg-[url('/assets/home/background-home-mobile.jpg')]
    sm:bg-[url('/assets/home/background-home-tablet.jpg')]
    lg:bg-[url('/assets/home/background-home-desktop.jpg')]`}>
            <NavigationBar/>
            <h1 className="text-center text-white">
                Radhe Radhe...
            </h1>
        </div>
    )
}