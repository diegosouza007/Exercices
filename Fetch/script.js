let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.BTCBRL))