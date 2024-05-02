import db from "./firebaseConfig";
import {get, ref} from "firebase/database"

const refRocks = ref(db, "/rocks")
const getRocks = () => {
    return get(refRocks)
}

export default {getRocks};