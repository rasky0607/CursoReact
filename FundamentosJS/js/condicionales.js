//Condificonales
/* 
Operadores
<=, >=, <, > !=, ==, ===, &&, ||
*/
let disponible = 4000;
const retirar = 232;

for(let i = 0; i <= 17; i++){
    if(disponible >= 200){
        console.log("Retirando de " + disponible + "€ la cantidad " + retirar + "€");
        disponible = disponible - retirar;
        console.log("Disponible restante en la cuenta: " + disponible + "€");
    }else{
        console.log("No puede retirar "+retirar+"€ ,el saldo disponible " + disponible + "€");
    }
}

//condificonales o If ternarios:
const autenticado = false;
autenticado ? console.log("usuario autenticado") : console.log("usuario NO autenticado, dirigir hacia login");

//Doble ternario
 const saldo = 600;
 const pagar = 800;
 const tarjeta = true;
 saldo > pagar ? console.log("Puedes pagar") : console.log("No puedes pagar");

 saldo > pagar ? console.log("Puedes pagar") : tarjeta ? console.log("Puedes pagar con tarjeta") : console.log("No puedes pagar");

