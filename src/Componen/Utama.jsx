import viteLogo from '/vite.svg'

function Utama() {
    return ( 
        <>
            <h2>Bagian Utama</h2>

            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
            </div>
            
            <p>Paragraf sembarang</p>
        </>
     );
}

export default Utama;