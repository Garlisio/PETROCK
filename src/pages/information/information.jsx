import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import "./information.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Information() {

    return (
        <>
            <Header />
            <div className="data-information">
                <div className="data">
                    <h1>INFORMATION</h1>
                    <p>We are currently located in C. Cebrián, 11, Las Palmas de Gran Canaria</p>
                </div>
                <div className="map">
                    <MapContainer center={[28.110275, -15.418349]} zoom={15} style={{ height: "400px", width: "100%" }}>
                        <TileLayer
                            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[28.110275, -15.418349]}>
                            <Popup>
                                WE ARE HERE!!! <br />
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Information;