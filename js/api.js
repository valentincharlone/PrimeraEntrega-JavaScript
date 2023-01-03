// API DOLAR

const urlDolar = "https://criptoya.com/api/dolar";
const listaDolar = document.getElementById('lista-dolar')

const apiDolar = async () => {
    const response = await fetch(urlDolar);
    const data = await response.json();
    
    const {oficial, solidario, blue} = data

    listaDolar.innerHTML = `
        <p> Dolar Oficial: ${oficial} </p>
        <p> Dolar Blue: ${blue} </p>
        <p> Dolar Solidario: ${solidario} </p>
    `
    
}

apiDolar()
