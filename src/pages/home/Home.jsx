import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import "./Home.css"

function Home(){

    return(
        <>
            <Header />
                <div className="data-home">
                    <h1 className="title-home">THE PETROCK SHOP</h1>
                    <p className="info-home">WELCOME to the only specialized pet rock website on the whole internet, marvel yourself at our exquisite rocks, collected from all over the world!</p>
                    <img src="../../../public/publicphotos/JamesROCK.png" alt="mascot" className="mascot"/>
                </div>
            <Footer />
        </>
    );
}

export default Home;