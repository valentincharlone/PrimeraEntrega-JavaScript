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
            <hr>
            <span> $ ${oficial}</span>
        </div>
        <div class="tipos-dolar">
            <p> Dolar Blue  </p>
            <hr>
            <span> $ ${blue}</span>
        </div>
        <div class="tipos-dolar">
            <p> Dolar Solidario  </p>
            <hr>
            <span> $ ${solidario}</span>
        </div>
        <div class="tipos-dolar">
            <p> Dolar Mep  </p>
            <hr>
            <span> $ ${mep}</span>
        </div>
    `
    
}

apiDolar()
