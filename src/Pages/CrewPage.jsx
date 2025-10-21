import {NavigationBar} from "../Components/NavigationBar.jsx";
export function CrewPage (){
    return (
            <div className={`min-h-screen bg-center bg-cover 
        bg-[url('/assets/crew/background-crew-mobile.jpg')]
        sm:bg-[url('/assets/crew/background-crew-tablet.jpg')]
        lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]`}>
                <NavigationBar/>
                <h1>This is Crew Page</h1>
        </div>
    )
}