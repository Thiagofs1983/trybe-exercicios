const fetchCoin = async () => {
    try {
    const coin = await fetch(`https://api.coincap.io/v2/assets`)
    console.log(coin)
    const { data } = await coin.json()
    const listaCripto = document.getElementById('criptos');
    console.log(listaCripto)
    console.log(data);
    const dataFilter = data.filter((element) => element.rank <= 10) 
    dataFilter.map((element) => {
        const newLi = document.createElement('li')
        newLi.innerHTML = `${element.id} (${element.symbol}): $${parseFloat(element.priceUsd)
            .toFixed(2)}`
        listaCripto.appendChild(newLi)
    })

    //listaCripto.innerHTML = data.map((element) => `${element.id} (${element.symbol}): $${parseFloat(element.priceUsd).toFixed(2)}`)
    }catch(error) {
        console.log(error)
    }
}

fetchCoin()
