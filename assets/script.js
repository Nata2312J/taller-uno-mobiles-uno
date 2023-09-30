//Ejercicio Uno 
function calcularParesImpares(){
    let numUno=Number(prompt("Este ejercicio te permite saber la cantidad de numeros pares e impares que contiene el numero que ingreses a partir del numero 1\n Ingrese el numero: "));
    
    if(numUno>=1){
    let cont=0; 
    let contImpar=0;
    let Par=0; 
    let Impar=1; 
    while(Par<=numUno){
        Par++; 
        if(Par % 2 == 0){
            cont++; 
        }
    }
    console.log("Hay " + cont + " numeros pares en tu numero")
   
    while(Impar<=numUno){
        Impar++;
        if(Impar % 2 != 0){
            contImpar++; 
        }
    }
        
        console.log("Hay " + contImpar + " numeros impares en tu numero")

    }else
    console.log("Ingrese un numero valido");
    
}
//Ejercicio Dos 
function calculadoraFactorial(num){
    let numDos; 
    for(let i=1; i<=num;i++ ){
    numDos=1; 
         for(let j=1; j<=i;j++ ){
         numDos=numDos*j; 
         }
    }
    return numDos; 
}
//Ejercicio Tres 
function validacionContraseña(){
    let contraseña=prompt("Este ejercicio valida si la contraseña que ingresas es la correcta o no\n Ingrese la contraseña: ");
    if(contraseña=="secreto123"){
        console.log("Contraseña correcta, acceso concedido ");
    }else {
    console.log("Contraseña incorrecta, acceso denegado");
    }
} 
//Ejercicio Cuatro
function tablasMultiplicar(){
    let num=Number(prompt("Este ejercicio te mostrará la tabla de multiplicar correspondiente al numero que elijas\nIngresa el numero: ")); 
    for(let i=1; i<=10; i++)
console.log(i + "x" + num + "=" + (i*num));
}
//Ejercicio Cinco 
function adivinaNumero(){
let num=Math.random()*100; 
let entero=Math.floor(num); 
let repetir=true;
while(repetir){
    let numDos=Number(prompt("Debes adivinar el numero entero que se encuentra entre el 1 y 100\n Ingresa un numero: "))
    if(numDos<entero){
        console.log("El numero es mayor");
    }else if(numDos>entero){
        console.log("El numero es menor");
    }else{
        console.log("Ha adivinado el numero!El numero era: " + entero);
        repetir=false;
    }
}
}
//Ejercicio Seis
function numerosPrimos(){
  let num=Number(prompt("Este ejercicio encontrará si hay numeros primos dentro de su numero y los sumara\n Ingrese un numero ")); 
  let suma = 0;
  let contador = 0;
  let candidato = 2;

while (contador < num) {
    let primo = true;
    for (let i = 2; i <= Math.sqrt(candidato); i++) {
        if (candidato % i == 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        suma += candidato;
        contador++;
    }
    candidato++;
}
console.log("La suma de los primeros", num, "números primos es:", suma);

}
//Ejercicio Siete
function fibonacci(){
    let num=Number(prompt("Este ejercicio te mostrara la secuencia fibonacci del numero que ingreses\nIngresa un numero: "))
    let a=1; 
    let b=1; 
    let i=1; 
    while(i<=num){
        console.log("Secuencia: " + a)
      b=a+b; 
      a=b-a; 
      i++; 
      
    }
}
//Ejercicio Ocho 
    function conversionGrados(){
        let resp=Number(prompt("Este ejercicio convierte los grados Celsius a Fahrenheit y viceversa \nSelecciona el numero de la opcion que deseas realizar: \n1-Convertir celsius a fahrenheit \n2-Convertir fahrenheit a celsius"));
     let grado=Number(prompt("Ingrese el numero que desea convertir: "));
    switch(resp){
        case 1: 
        let fahrenheit=((grado*9)/5)+32; 
        console.log( grado + "°C convertido en °F es: " + fahrenheit + "°F" );
        break;
        case 2: 
        let celsius=((grado-32)*5)/9; 
        console.log(grado+ "°F convertido en °C es: " + celsius + "°C");
        break; 
        default:
            console.log("Ingrese un numero valido");
    }
}
//Ejercicio nueve 
function potencias(){
    let num=Number(prompt("Este es un programa que elevará el numero que eligas a la potencia que desees\nIngresa el numero: "))
    let potencia=Number(prompt("Ingresa la potencia: "))
    let num2=num;
    for(let i=1; i<potencia;i++){
      num2=num2*num;
    }
    console.log("El resultado de la potencia seria: " + num2); 
} 
//Ejercicio diez
function piedraPapel(){
    let opc=Number(prompt("Este es el juego de piedra papel o tijeras elige el numero del que deseas: \n1-Piedra\n2-Papel\n3-Tijeras"));
    let random=Math.floor(Math.random() * 3) + 1;
   
    if (opc==random){
        console.log("Empate")
    }else if(opc==1 && random==2){
        console.log("Te han ganado :(");
    }else if(opc==2 && random==3){
        console.log("Te han ganado :("); 
    }else if(opc==3 && random==1){
        console.log("Te han ganado :(")
    }else{
        console.log("Ganastee!");
    }
}


//INICIAR 

function menuPrincipal(){
  let repetir=true;
  let opcion;
  let resp;
  while(repetir){
    opcion=Number(prompt("Ingrese la opcion que desea realizar: \n1-Calcular numeros pares e impares \n2-Calcular numeros factoriales\n3-Validar conytraseña \n4-Visualizar tablas de multiplicar \n5-Juego adivina el numero \n6-Calcular numeros primos \n7-Calcular secuencia de fibonancci \n8-Convertidor de temperatura \n9-Calculadora de potencia \n10-Juego piedra,papel o tijeras \n11-Salir")); 
    resp=prompt("Seguro que desea ingresar a el ejercicio? (Si)(No)");
        if (resp=="Si" || resp=="si"){
            switch(opcion){
                case 1:
                    calcularParesImpares();
                    break; 
                case 2: 
                let num = Number(prompt(" En este ejercicio podras ingresar un numero y obtener el factorial del mismo: \nIngrese un número"));
                 console.log("El factorial del numero " + num + " es igual a: " + calculadoraFactorial(num));
                   
                    break; 
                case 3: 
                    validacionContraseña();
                    break;  
                case 4: 
                    tablasMultiplicar(); 
                    break; 
                case 5: 
                    adivinaNumero();
                    break; 
                case 6: 
                    numerosPrimos(); 
                    break; 
                case 7: 
                    fibonacci(); 
                    break;
                case 8: 
                    conversionGrados();
                break;
                case 9:
                    potencias();
                    break; 
                case 10: 
                piedraPapel();
                    break; 
                case 11: 
                    repetir=false; 
                    break; 
            
                default: 
                    console.log("Ingrese un numero valido")
            }

                    

            
        }else{
            opcion=Number(prompt("Ingrese la opcion que desea realizar: \n1-Calcular numeros pares e impares \n2-Calcular numeros factoriales\n3-Validar conytraseña \n4-Visualizar tablas de multiplicar \n5-Juego adivina el numero \n6-Calcular numeros primos \n7-Calcular secuencia de fibonancci \n8-Convertidor de temperatura \n9-Calculadora de potencia \n10-Juego piedra,papel o tijeras \n11-Salir")); 
            resp=prompt("Seguro que desea ingresar a el ejercicio? (Si)(No)")
        }
     
}

}

menuPrincipal();

