import { useState } from "react";
import Layout from "../Componen/Layout"

function State() {
    const [bilangan1, setBilangan1] = useState(0)
    const [bilangan2, setBilangan2] = useState(0)
    const [hasil, setHasil] = useState(0)

    const penambahan = ()=>{
        setHasil(perseInt(bilangan1) + perseInt(bilangan2))
    }
    const pengurangan = ()=>{
        setHasil((bilangan1) - (bilangan2))
    }
    const perkalian = ()=>{
        setHasil((bilangan1) * (bilangan2))
    }
    const pembagian = ()=>{
        setHasil((bilangan1) / (bilangan2))
    }

    return ( 
        <>
            <Layout>
                <p>
                    Bilangan 1 :
                    <input type="text"
                    value={bilangan1}
                    onChange={(e) => setBilangan1(Number(e.target.value))} />
                </p>
                <p>
                    Bilangan 2 :
                    <input type="text"
                    value={bilangan2}
                    onChange={(e) => setBilangan2(Number(e.target.value))} />
                </p>
                <p>Hasil : {hasil}</p>

                <button type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        onClick={penambahan}>
                        Tambah
                </button>
                <button type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        onClick={pengurangan}>
                        Kurang
                </button>
                <button type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        onClick={perkalian}>
                        Kali
                </button>
                <button type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        onClick={pembagian}>
                        Bagi
                </button>


            </Layout>
        </>
     );
}

export default State;