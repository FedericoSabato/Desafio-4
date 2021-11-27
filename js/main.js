//Federico Sabato - Desafio 4
//Comienzo de Scripts

const multiply= (x,y) => {return (x*y)}

alert("¡Bienvendido a CRYPTO P2P MARKET!");

let choice = prompt("¿Que criptomoneda desea comprar?\nElija por número (1 al 5)\nPrecios en $USDT\n1 - $BTC: $54128.93\n2 - $ETH: $4140.45\n3 - $ADA: $1.63\n4 - $SOL: $197.81\n5 - $SHIBA: $0.00004");
let pay;
let quantity;

switch((choice)){

    case "1":
        quantity = prompt("¿Cuantos $BTC desea comprar?\nPrecio: $54128.93");
        pay = multiply(54128.93,quantity);
        alert("Usted pagará $"+pay );
        break;
    case "2":
        quantity = prompt("¿Cuantos $ETH desea comprar?\nPrecio: $4140.45");
        pay = multiply(4140.45,quantity);
        alert("Usted pagará $"+pay );
        break
    case "3":
        quantity = prompt("¿Cuantos $ADA desea comprar?\nPrecio: $1.63");
        pay = multiply(1.63,quantity);
        alert("Usted pagará $"+pay );
        break;
    case "4":
        quantity = prompt("¿Cuantos $SOL desea comprar?\nPrecio: $197.81");
        pay = multiply(197.81,quantity);
        alert("Usted pagará $"+pay );
        break;
    case "5":
        quantity = prompt("¿Cuantos $SHIBA desea comprar?\nPrecio: $0.00004");
        pay = multiply(0.00004,quantity);
        alert("Usted pagará $"+pay );
        break;
}
