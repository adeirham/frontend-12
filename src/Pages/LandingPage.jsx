import { children } from "react";

function LandingPage({children}) {
    return ( 
        <>
            <header className="Header fixed top-0 left-0 right-0 bg-blue-400 text-3xl">
                Header
            </header>
            <main className="mx-24 my-12">
                {children}
            </main>
            <footer className="fixed bottom-0 left-0 right-0 bg-blue-400 text-xl">
                Footer
            </footer>

        </>
     );
}

export default LandingPage;