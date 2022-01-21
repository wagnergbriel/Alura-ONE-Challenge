function CriptografarMensagem() {
    const msgOriginal = document.getElementById('msg-original');
    const listaDePalavras = msgOriginal.value.split('');

    for (var i = 0; i < listaDePalavras.length; i++) {
        if (listaDePalavras[i] == "e" || listaDePalavras[i] == "e".toUpperCase()) listaDePalavras[i] = "enter";
    }

    let msgCodificada = document.getElementById('msg-codificada').innerHTML = listaDePalavras.join('');
    return msgCodificada;
}

function DescriptografarMensagem() {
    return null;
}

function CopiarMensagem() {
    return null;
}