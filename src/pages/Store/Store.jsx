import "./Store.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import products from "../../models/products";

function Store() {

    return(
        <>
            <Header />
            <div className="data-home">
                <h1>STORE</h1>
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
