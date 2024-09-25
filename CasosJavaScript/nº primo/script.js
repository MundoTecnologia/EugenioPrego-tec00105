var btn = document.querySelector("button")

 btn.onclick = function NºPrimo(n){
    var n = prompt("digite um numero")

    if(n%2 != 0){
        alert("numero primo")
        return alert("true")
    }

    else{
        alert("Não é numero primo")
        return alert("false")
    }
}