import {nomes} from "./trechos/nomes.js"
import {sobrenome} from "./trechos/sobrenome.js"

export default function fakename() {
    const first = nomes;
    const last = sobrenome;
    let firstName = first[parseInt(Math.random()*first.length)];
    let lastName = last[parseInt(Math.random()*last.length)];
    return firstName+" "+lastName;
    }