import Menu from "../Componen/Menu";
import Props from "../Componen/Props";

const IndukProps = () => {
    const meja = 1;
    const makanan = "Nasi Goreng Spesial"
    const minuman = "Teh Panas"
    const pesanan ={"makanan" : "Pelasan Oling",
                    "minuman" : "Es Jeruk Nipis",
                    "pelanggan" : true};
    const pesanan2 ={"makanan" : "Pelasan Oling",
                    "minuman" : "Es Jeruk Nipis",
                    "pelanggan" : false};
    const pesanan3 ={"makanan" : "Nasi Cawuk",
                    "minuman" : "Sinom",
                    "pelanggan" : true};
    const menuMakanan = [   "Nasi Goreng", 
                            "Soto Unto", 
                            "Pelasan Oling"
                        ];
    const menuMinuman = [   "Es Jeruk Nipis", 
                            "Es Lumpur", 
                            "Sinom"
                        ];  
    return ( 
        <>
            <h1 className="font-3xl font-bold text-slate-700 underline ">Induk Props</h1>
            <Menu className="mb-4" menuMakanan={menuMakanan} menuMinuman={menuMinuman} />
                <Props pesanan={pesanan} />
            <hr />
            <Props pesanan={pesanan2} />
            <hr />
            <Props pesanan={pesanan3} /> 
            {/*    meja={meja}
                makanan={makanan}
                minuman={minuman}
                pelanggan = {true}
            />
            <hr />
            <Props
                meja="2" 
                makanan="Sate Kodok"
                minuman="Es Susu Beruang"
                pelanggan = {false}
            />
            <hr />
            {/*<Props pesan="Pesan dari induk ke-1"/>
            <Props pesan="Pesan dari induk ke-2"/>
            <Props pesan="Pesan dari induk ke-3"/>*/}
        </>
     );
}
 
export default IndukProps;