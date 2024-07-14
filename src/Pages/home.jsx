import { Link } from "react-router-dom";
import Header from "../Componen/Header";
import Layout from "../Componen/Layout";
import Navbar from "../Componen/Navbar";
import Utama from "../Componen/Utama";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return ( 
        <>
            <Layout>
                <Navbar/>
                <Header/>
                <div className="my-8">
                    <Link to= "/landingpage"
                        className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
                        Landing Page
                    </Link>
                    <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate('/landingpage')}>
                            Landing Page
                    </button>
                </div>   
                <Utama/>
            </Layout>
        </>
     );
}


 
export default Home;