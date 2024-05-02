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
                <div className="products">
                    {products.map((product) => {
                        return (
                            <>
                                <div className="product">
                                    <img src={product.img} alt={product.name} className="product-image" />
                                    <p className="product-data">{product.name} | {product.cost}</p>
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
