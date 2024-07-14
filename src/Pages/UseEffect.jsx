import Animasi from "../Componen/Animasi";
import FetchApi from "../Componen/FetcApi";
import UpdateState from "../Componen/UpdateState";

function UseEffect() {
    return ( 
        <>
        <div className="container ml-8">
            <h1 className="text-3xl text-bold">Use Effect Reactivity</h1>
            <UpdateState/>
        </div>
        <div className="container ml-8">
            <h1 className="text-3xl text-bold">Animasi Timer</h1>
            <Animasi/>
        </div>
        <div className="container ml-8">
            <h1 className="text-3xl text-bold">Fetch Data API</h1>
            <FetchApi/>
        </div>
        </>
     );
}

export default UseEffect;