// API DOLAR

const urlDolar = "https://criptoya.com/api/dolar";
const listaDolar = document.getElementById('lista-dolar')

const apiDolar = async () => {
    const response = await fetch(urlDolar);
    const data = await response.json();
    console.log(data)
    const {oficial, solidario, blue,  mep}  = data

    listaDolar.innerHTML = `
        <div class="tipos-dolar">
            <p> Dolar Oficial  </p>
            <span> $ ${oficial}</span>
        </div>
        <div class="tipos-dolar">
            <p> Dolar Blue  </p>
            <span> $ ${blue}</span>
        </div>
        <div class="tipos-dolar">
            <p> Dolar Solidario  </p>
            <span> $ ${solidario}</span>
        </div>
        <div class="tipos-dolar">
            <p> Dolar Mep  </p>
            <span> $ ${mep}</span>
        </div>
    `
    
}

apiDolar()
