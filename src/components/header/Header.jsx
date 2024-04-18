import "./Header.css"

function Header(){

    return(
        <>
            <div className="background-header">
                <div className="header">
                    <img src="../../../public/publicphotos/LOGO.png" alt="logo" className="logo"/>
                    <div className="links">
                        <h1>{'>'} <a href="/home">HOME</a></h1>
                        <h1>{'>'} <a href="/store">STORE</a></h1>
                        <h1>{'>'} <a href="/information">INFO</a></h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;