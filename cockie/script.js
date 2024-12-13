function createCokie(nome, valor, dias){
    let dataExpiracao = new Date();
    dataExpiracao.setTime(dataExpiracao.getTime() + (dias * 24 * 60 * 60 * 1000));

    let  expires = ";expires =  " + dataExpiracao.toUTCString();

    document.cookie = nome += " = " + valor + expires  + ";" + ";path=/";
}

createCokie("Web", "sexta feira" , 1)