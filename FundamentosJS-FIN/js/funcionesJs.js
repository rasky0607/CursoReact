function sumar(n1,n2){
    return n1 + n2;
}

function restar(n1, n2){
    return n1 - n2;
}

// *** Exportar una sola funcion ***

/*[export default sumar] Registramos esta funcion y despues la exporta, para que  la podamosimportar en otro archivo
Al usar la exportacion "default"  puedes nombrarla en el archoivo que la importes como quieras*/
//Nota: solo puede haber un "export" por documento
//export default sumar

// *** Exportar mas de una funcion ***
//Esta se exporta como un objeto
/*Nota: en este caso cuando exportamos varias funciones,
 necesitamos que indicar el nombre exacto, a diferencia de cuando importamos una unica funcion*/
export {
    sumar,
    restar
}