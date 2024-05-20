import Header from "../../components/header/Header.jsx"
import Footer from "../../components/footer/Footer"
import { useState, useEffect } from "react"
import "./newsletter.css";
import mailsService from "../../../mails.service.js"

function Newsletter() {
    const [mails, setMails] = useState([])
    const [email, setEmail] = useState("")

    useEffect(() => {
        mailsService.getMails().then((mailsSnapshot) => {
            let auxMails = []
            mailsSnapshot.forEach((mail) => {
                const key = mail.key
                const data = mail.val()

                auxMails.push({
                    key: key,
                    email: data.email
                });
            });

            setMails(auxMails)
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email.trim() !== "") {
            mailsService.insertMail({ email: email })
            setEmail("")
            window.location.reload()
        }
    };

    const handleDelete = (mailId) => {
        mailsService.deleteMail(mailId);
        window.location.reload()
    }

    const handleModify = (mailId, mailEmail) => {
        mailsService.deleteMail(mailId)
        setEmail(mailEmail)
    };

    return (
        <>
            <Header />
            <div className="data-newsletter">
                <div className="data">
                    <div className="pre-form">
                        <h1>NEWSLETTER</h1>
                        <p>Subscribe to our newsletter to get all the news about our famous pet rocks!</p>
                    </div>
                    <form className="form-newsletter" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                            <button type="submit" className="submit-button">SUBMIT MAIL</button>
                        </div>
                    </form>
                    <div className="mails">
                        <h2>REGISTERED EMAILS</h2>
                        {mails.map((r) => {
                            return (
                                <div key={r.key} className="mail-container">
                                    <p> - - - - - - </p>
                                    <p className="mail">{r.email}</p>
                                    <button className="delete-button" onClick={() => handleDelete(r.key)}>DELETE MAIL</button>
                                    <button className="modify-button" onClick={() => handleModify(r.key, r.email)}>MODIFY MAIL</button>
                                </div>
                            );
                        })}
                    </div>
                    <div className="filler"></div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Newsletter;