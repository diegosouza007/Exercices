const shoppingCart = [{
    name: "Console Playstation 4 Slim",
    description: "Console Sony Playstation 4 Slim 1TB Modelo 2215b / Caixa Branca",
    price: "R$ 3.490,00",
    quantidade: 2
}, {
    name: "iPhone 11 Apple",
    description: "iPhone 11 Apple 64GB Preto, Tela de 6,1”, Câmera Dupla de 12MP, iOS",
    price: "R$ 3.959,10",
    quantidade: 1
}, {
    name: 'Smart TV LED 50"',
    description: 'Smart TV LED 50" UHD 4K Samsung 50TU8000 Crystal UHD',
    price: "R$ 2.799,00",
    quantidade: 3
}]

// ### MAP ###

// Returns a new array with only products name of the cart

const cartProductsList = shoppingCart.map(element => element.name)

// ### FILTER ###

// Search for certain keyword in the cart and returns the matched product

let keyWord = "iPhOnE"

const searchShoppingCart = shoppingCart.filter(e => {
    let name = e.name.toLowerCase()
    if (name.includes(keyWord.toLowerCase())) {
        return true;
    }
});


// ### REDUCE ###

// Returns the total order

const totalOrder = convertPrice(shoppingCart.reduce((total, item) => total += (item.quantidade * convertPrice(item.price)), 0))


// ### BONUS ###

// Convert a value between string X float for use in math operations

function convertPrice(price) {

    let value = ""
    let newValue = ""

    if (typeof price === typeof 'String') {
        value = parseFloat(price.replace('R$ ', ''))
        newValue = parseFloat(Array.from(value.toString()).slice(0, 5).join(''))
    } else {
        newValue = `R$ ${price},00`
    }
    return newValue
}