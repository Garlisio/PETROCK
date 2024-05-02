import "./Store.css"
import Header from "../../components/header/Header.jsx"
import Footer from "../../components/footer/Footer"
import products from "../../models/products";

function Store() {

    return(
        <>
            <Header />
            <div className="data-store">
                <h1 className="title">STORE</h1>
                <p>Our classics along with some new partners</p>
                <div className="store-products">
                    {products.map((product) => {
                        return (
                            <>
                                <div className="store-product">
                                    <img src={product.img} alt={product.name} className="store-product-image" />
                                    <p className="store-product-data">{product.name} | {product.cost}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Store;
