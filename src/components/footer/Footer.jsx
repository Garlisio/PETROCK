import "./Footer.css"
import "bootstrap-icons/font/bootstrap-icons.css"

function Footer(){
    
    return(
        <div className="footer">
            <a href="https://twitter.com" className="link"><i class="bi bi-twitter"></i></a>
            <a href="https://commission.europa.eu/cookies-policy_en">© 2024 PETROCK Todos los derechos reservados | Política de Privacidad y Cookies | Condiciones de Venta</a>
            <a href="https://github.com/Garlisio/PETROCK" className="link"><i class="bi bi-github"></i></a>
        </div>
    )
}

export default Footer;