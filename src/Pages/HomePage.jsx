import {NavigationBar} from "../Components/NavigationBar.jsx";

export function HomePage() {
    return (
        <div className={`min-h-screen bg-center bg-cover 
    bg-[url('/assets/home/background-home-mobile.jpg')]
    sm:bg-[url('/assets/home/background-home-tablet.jpg')]
    lg:bg-[url('/assets/home/background-home-desktop.jpg')]`}>
            <NavigationBar/>

            <main className='border border-2 border-gray-200 w-full h-[100vh]'>
                <section className='content'>
                    <p className='text-center text-gray-50 font-intro'>
                        SO YOU WANT TO TRAVEL TO
                    </p>
                    <p className='font-heading text-center text-gray-50'>SPACE</p>
                    <p className='text-center text-gray-50 font-para'>
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </section>
                <div className='w-[200px] h-[200px] flex justify-center items-center border border-2 border-gray-50 rounded-full bg-gray-50'>
                    <p className='font-heading'>EXPLORE</p>
                </div>
                <section>
                </section>
            </main>
        </div>
    )
}