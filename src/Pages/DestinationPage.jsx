import {NavigationBar} from "../Components/NavigationBar.jsx";
export function DestinationPage (){
    return (
        <div className={`min-h-screen bg-center bg-cover 
    bg-[url('/assets/destination/background-destination-mobile.jpg')]
    sm:bg-[url('/assets/destination/background-destination-tablet.jpg')]
    lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]`}>
            <NavigationBar/>
        <h1>This is Destination Page</h1>
        </div>
    )
}