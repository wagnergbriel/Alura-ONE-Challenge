function CriptografarMensagem() {
    const msgOriginal = document.getElementById('msg-original');
    const listaDePalavras = msgOriginal.value.split('');

    for (var i = 0; i < listaDePalavras.length; i++) {
        if (listaDePalavras[i] == "e" || listaDePalavras[i] == "e".toUpperCase()) listaDePalavras[i] = "enter";
        if (listaDePalavras[i] == "i" || listaDePalavras[i] == "i".toUpperCase()) listaDePalavras[i] = "imes";
        if (listaDePalavras[i] == "a" || listaDePalavras[i] == "a".toUpperCase()) listaDePalavras[i] = "ai";
        if (listaDePalavras[i] == "o" || listaDePalavras[i] == "o".toUpperCase()) listaDePalavras[i] = "ober";
        if (listaDePalavras[i] == "u" || listaDePalavras[i] == "u".toUpperCase()) listaDePalavras[i] = "ufat";
    }

    let msgCodificada = document.getElementById('msg-codificada').innerHTML = listaDePalavras.join('');
    return msgCodificada;
}

function DescriptografarMensagem() {
    const msgOriginal = document.getElementById('msg-original');
    const listaDePalavras = msgOriginal.value.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a')
        .replace(/ober/g, 'o').replace(/ufat/g, 'u');

    let msgDecodificada = document.getElementById('msg-codificada').innerHTML = listaDePalavras;
    return msgDecodificada;
}

function LimparMensagem() {
    const limparMsg = document.getElementById('msg-original').value = "";
    return limparMsg;

}

function CopiarMensagem() {
    return null;
}