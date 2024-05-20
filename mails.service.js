import db from "./firebaseConfig";
import {get, ref, push, remove} from "firebase/database"

const refMails = ref(db, "/mails")

const getMails = () => {
    return get(refMails)
}

const insertMail = (mail) => {
    push(refMails, mail)
}

const deleteMail = (mailId) => {
    const refMail = ref(db, `/mails/${mailId}`)
    remove(refMail)
}

export default {getMails, insertMail, deleteMail}