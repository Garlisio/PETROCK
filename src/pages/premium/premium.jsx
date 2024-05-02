import Header from "../../components/header/Header.jsx"
import Footer from "../../components/footer/Footer"
import { useState,useEffect } from "react";
import "./premium.css"
import rocksService from "../../../rocks.service.js";

function Premium(){

    const [rocks,setRocks] = useState([])

    useEffect(() => {
        rocksService.getRocks().then(rocks => {
            let auxRocks = []
            rocks.forEach(rock => {
                const key = rock.key
                const data = rock.val()

                auxRocks.push(
                    {
                        key: key,
                        name: data.name,
                        cost: data.cost,
                        description: data.description,
                        img: data.img
                    }
                )
            })

            setRocks(auxRocks)
        })
    }, [])

    return(
        <>
            <Header />
                <div className="data-premium">
                    <h1 className="title-premium">PREMIUM STORE</h1>
                    <p>THE BEST OF THE BEST IN THE WHOLE WORLD</p>
                    <div className="products">
                        {rocks.map((r) => {
                            return (
                                <>
                                    <div className="product" key={r.key}>
                                        <img src={r.img} alt={r.name} className="product-image" />
                                        <p className="product-data">{r.name} | {r.cost}</p>
                                        <p className="product-data">{r.description}</p>
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

export default Premium;