import { useEffect } from "react";
import { useState } from "react";

function UpdateState() {
    const [harga, setHarga] = useState(10000)
    const [qty, setQty] = useState(2)
    const [subTotal, setSubTotal] = useState(0)

    useEffect (() => {
        setSubTotal(harga * qty)
    }, [harga * qty]);

    return ( 
        <div className="container ml-8">
            <div className="mt-8">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Harga
                </label>
                <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Masukan nama anda"
                    value={harga}
                    onChange={(e) => { setHarga(e.target.value) }}
                />
            </div>
            <div className="mt-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    qty
                </label>
                <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Masukan nama anda"
                    value={qty}
                    onChange={(e) => { setHarga(e.target.value) }}
                />
            </div>
            <p className="text-bold-600 text-sm italic mt-2">Sub Total : {subTotal}</p>
        </div>
     );
}

export default UpdateState;