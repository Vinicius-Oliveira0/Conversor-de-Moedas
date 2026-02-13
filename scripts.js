
let convertButton = document.querySelector(".botao");
let moedaSelect = document.querySelector(".moeda-select");

function convertValues() {

    const inputMoedaValor = document.querySelector(".input-valor").value
    const moedaValorEntrada = document.querySelector(".moeda-value")
    const moedaValorSaida = document.querySelector(".moeda-value-convert")

    let dolarToday = 5.16;
    let euroToday = 6.141;
    let libraToday = 7.0537;
    let bitcoinToday = 354.804;

    let convertedValue = inputMoedaValor / dolarToday

    if (moedaSelect.value == "dolar") {


        moedaValorSaida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValor / dolarToday)
    }


    if (moedaSelect.value == "euro") {
        moedaValorSaida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValor / euroToday)
    }
    if (moedaSelect.value == "libra") {
        moedaValorSaida.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoedaValor / libraToday)
    }
    if (moedaSelect.value == "bitcoin") {
        moedaValorSaida.innerHTML.HTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputMoedaValor / bitcoinToday)
    
    }

    moedaValorEntrada.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputMoedaValor)

}

function changeMoeda(){

    let moedaNome = document.getElementById("moeda-nome")
    let moedaImg = document.querySelector(".moeda-img")

 if (moedaSelect.value == "dolar") {
     moedaNome.innerHTML = "Dólar americano"
     moedaImg.src = "./assets/estados-unidos (1) 1.svg"
 }   
 

 if (moedaSelect.value == "euro") {
    moedaNome.innerHTML = "Euro"
    moedaImg.src = "./assets/euro.svg"
   }
   
   if (moedaSelect.value == "libra") {
       moedaNome.innerHTML = "Libra"
       moedaImg.src = "./assets/libra 1.svg"
   }

   if (moedaSelect.value == "bitcoin") {
    moedaNome.innerHTML = "Bitcoin"
    moedaImg.src = "./assets/bitcoin 1.svg"
}
   convertValues()
}   
 
 

moedaSelect.addEventListener("change", changeMoeda)

convertButton.addEventListener("click", convertValues)

