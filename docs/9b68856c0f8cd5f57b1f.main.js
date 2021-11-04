

import { enc, DES, mode as _mode, pad } from "crypto-js";

const ejecutar = document.querySelector('#botones');
const ejecurar = document.querySelector('#boton');

const texto = document.getElementById('TEXTO');
const clave = document.getElementById('CLAVE');

const textoDes = document.getElementById('PALABRA');
const claveDes = document.getElementById('LLAVE');


ejecutar.addEventListener('click', () => {

    const palabra = texto.value 
    const llave = clave.value

    //alert("palabra a descifrar"+palabraDes)
    let resultado1 = encryptByDES(palabra,llave)
    document.getElementById("resultado1").value = resultado1;

})

/*
const cifrar = (palabra, llave) => {

    var Pcifrado= CryptoJS.DES.encrypt(palabra , llave);

    document.getElementById("resultado1").value = Pcifrado;
    //alert("palabra cifrada: " + Pcifrado)
}
*/

function encryptByDES(message, key) {

    var keyHex = enc.Utf8.parse(key);
    var encrypted = DES.encrypt(message, keyHex, {
        mode: _mode.ECB,
        padding: pad.Pkcs7
    });
    return encrypted.toString();
}

ejecurar.addEventListener('click', () => {

    const palabraC = textoDes.value 
    const llaveC = claveDes.value

    let resultado2 = decryptByDES(palabraC,llaveC)

    document.getElementById("resultado2").value = resultado2;


})


function decryptByDES(ciphertext, key) {
    var keyHex = enc.Utf8.parse(key);

    // direct decrypt ciphertext
    var decrypted = DES.decrypt({
        ciphertext: enc.Base64.parse(ciphertext)
    }, keyHex, {
        mode: _mode.ECB,
        padding: pad.Pkcs7
    });

    return decrypted.toString(enc.Utf8);
}

/*
const descifrar = (palabra, llave) => {
    
    
    alert("Hola escucho: "+ palabra)
    alert("clave: "+llave)
    

    var Pdescifrado = CryptoJS.DES.decrypt(palabra , llave);


    document.getElementById("resultado2").value = Pdescifrado;
    alert("palabra cifrada: " + Pcifrado)


}
*/