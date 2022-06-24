function calcular() {
    let alt = document.getElementById('alt')
    let pes = document.getElementById('pes')
    let alt1 = Number(alt.value)
    let pes1 = Number(pes.value)
    let res = document.getElementById('quarto')
    let ress = alt1 / (pes1 * pes1)
    if(ress < 18) {
        res.innerHTML = `Seu IMC é: ${ress.toFixed(1)} <p> Magreza!! </p>`
        res.style.color = 'brown'
    }else if (ress > 18 && ress < 25.1) {
        res.innerHTML = `Seu IMC é: ${ress.toFixed(1)} <p> Normal!! </p>`
        res.style.color = 'green'
    }else if (ress > 25.1 && ress < 30.1) {
        res.innerHTML = `Seu IMC é: ${ress.toFixed(1)} <p> Sobrepeso!! </p>`
        res.style.color = 'blue'
    }else if (ress > 30.1 && ress < 40.1) {
        res.innerHTML = `Seu IMC é: ${ress.toFixed(1)} <p> Obesidade!! </p>`
        res.style.color = 'orange'
    }else if (ress > 40) {
        res.innerHTML = `Seu IMC é: ${ress.toFixed(1)} <p> Obesidade grave!! </p>`
        res.style.color = 'red'
    }
    
    
}