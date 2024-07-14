function Props(Props) {
    const {meja, makanan, minuman, pelanggan}= Props.pesanan
    return ( 
        <>
            {pelanggan ?
                <div>
                <h3>Pesan dari meja: {meja}</h3>
                <p>Makanan : {makanan}</p>
                <p>Minuman : {minuman}</p>
                </div> 
                :
                <p>Anda bukan pelanggan</p>
            }
            {/*<p>{props.pesan}</p>*/}
            {/*<p>{pesan}</p>*/}
        </>
     );
}

export default Props;