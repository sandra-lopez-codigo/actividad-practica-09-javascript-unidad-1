/* Actividad Práctica 09 - JavaScript Unidad 1 */

/* _________________________________________________________________________________________________________________________ 
1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
*/
function aparecerAlert() { // boton "Aparecer Alert"
      alert("Hello World");
}

/* _________________________________________________________________________________________________________________________ 
2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
*/
function aparecerTexto() { // boton "Aparecer Texto"
      document.getElementById("ej-2-texto-hello").innerText = "Hello World";
}

/* _________________________________________________________________________________________________________________________ 
3. Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
*/
// defino variables
a = 3;
b = 5;
resultado = 0;
function aparecerResultado() { // boton "Aparecer Suma"
      resultado = a + b;
      document.getElementById('ej-3-texto-resultado').innerText = resultado;
}

/* _________________________________________________________________________________________________________________________ 
4. Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”.
*/
function aparecerPrompt() {// boton "Aparecer Prompt"
      const nombreUsuario = prompt('Escribe tu nombre'); // 
      document.getElementById('ej-4-texto-saludo').innerText = "Hola " + nombreUsuario;
}

/* _________________________________________________________________________________________________________________________ 
5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
*/
function calcularSuma() { // boton "Calcular suma" 
      const numero1 = document.getElementById('ej-5-num-1').value;
      const numero2 = document.getElementById('ej-5-num-2').value;
      //parseInt() analiza un argumento de cadena y devuelve un número entero de la raíz o base especificada.
      let resultadoSuma = parseInt(numero1) + parseInt(numero2);
      document.getElementById('ej-5-suma').innerText = resultadoSuma;
}

/* _________________________________________________________________________________________________________________________ 
6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
*/
function calcularMayorEj6() { // boton "Calcular mayor"
      const num1 = document.getElementById('ej-6-num-1');
      const num2 = document.getElementById('ej-6-num-2');

      const numero1 = Number(num1.value);
      const numero2 = Number(num2.value);

      if (numero1 > numero2) {
            document.getElementById('ej-6-mayor').innerText = 'El número mayor es: ' + numero1;
      } else if (numero1 < numero2) {
            document.getElementById('ej-6-mayor').innerText = 'El número mayor es: ' + numero2;
      } else {
            document.getElementById('ej-6-mayor').innerText = 'No hay número mayor';
      }
}

/* _________________________________________________________________________________________________________________________ 
7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
*/
function calcularMayorEj7() { // boton "Calcular mayor"
      const numero1 = Number(document.getElementById('ej-7-num-1').value);
      const numero2 = Number(document.getElementById('ej-7-num-2').value);
      const numero3 = Number(document.getElementById('ej-7-num-3').value);

      if (((numero1) > (numero2)) && ((numero1) > (numero3))) {
            document.getElementById('ej-7-mayor').innerText = 'El número mayor es: ' + numero1;
      } else if (((numero2) > (numero1)) && ((numero2) > (numero3))) {
            document.getElementById('ej-7-mayor').innerText = 'El número mayor es: ' + numero2;
      } else if (((numero3) > (numero1)) && ((numero3) > (numero2))) {
            document.getElementById('ej-7-mayor').innerText = 'El número mayor es: ' + numero3;
      } else {
            document.getElementById('ej-7-mayor').innerText = 'No hay número mayor' + numero1 + numero2 + numero3;
      }
}

/* _________________________________________________________________________________________________________________________ 
8. Escribe un programa que pida un número y diga si es divisible por 2
*/
function calcularDivisiblePor2() { // boton "Divisibilidad por 2" 
      const numero1 = document.getElementById('ej-8-num-1').value;

      if ((numero1 % 2) == 0) { // % calcula el resto de una división
            document.getElementById('ej-8-divisible').innerText = 'El número ' + numero1 + ' es divisible por 2';
      } else {
            document.getElementById('ej-8-divisible').innerText = 'El número ' + numero1 + ' NO es divisible por 2';
      }
}

/* _________________________________________________________________________________________________________________________ 
9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a.
*/
// // PRIMERA OPCIÓN: 
// function calcularAparicionesEj9() {
// // defino las variables
//       const letra = 'aAáÁ'; // entre comillas porque es un string
//       const frase = document.getElementById('ej-9-frase').value; // capturo lo que se escriba en el input
// contadorDeLetra = 0;
// // un for que recorra la frase como un array.
//       for (let i = 0; i < frase.length; i++) {
//             if (letra == frase[i]) {
//                   contadorDeLetra = contadorDeLetra + 1;
//             }
//       }
// // ahora se debe actualiar el parrafo donde debe contener el número de apariciones solicitado.
// document.getElementById('ej-9-apariciones-letra-a').innerText = contadorDeLetra;
// }


// SEGUNDA OPCIÓN: USO DEL METODO INDEXOF()
/* El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente. */
function calcularAparicionesEj9() { // boton "Contar letra a" 
      // defino las variables
      const letra = 'aAáÁ'; // entre comillas porque es un string
      const frase = document.getElementById('ej-9-frase').value; // capturo lo que se escriba en el input
      contadorDeLetra = 0;
      // un for que recorra la frase como un array.
      for (let i = 0; i < frase.length; i++) {
            if (letra.indexOf(frase[i]) !== -1) {
                  contadorDeLetra = contadorDeLetra + 1;
            }
      }
      // ahora se debe actualiar el parrafo donde debe contener el número de apariciones solicitado.
      document.getElementById('ej-9-apariciones-letra-a').innerText = contadorDeLetra;
}
/* _________________________________________________________________________________________________________________________ 
10. Escribe un programa que pida una frase y escriba las vocales que aparecen.
*/
/* El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente. */
function calcularAparicionesEj10() { // boton "Contar vocales"
      // defino las variables
      const vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ'; // entre comillas porque es un string
      const frase = document.getElementById('ej-10-frase').value; // capturo lo que se escriba en el input
      contadorDeVocales = 0;
      // un for que recorra la frase como un array.
      for (let i = 0; i < frase.length; i++) {
            if (vocales.indexOf(frase[i]) !== -1) {
                  contadorDeVocales = contadorDeVocales + 1;
            }
      }
      // ahora se debe actualiar el parrafo donde debe contener el número de apariciones solicitado.
      document.getElementById('ej-10-apariciones-vocales').innerText = contadorDeVocales;
}
/* _________________________________________________________________________________________________________________________ 
11. Escribe un programa que pida una frase y escriba cuántas de las letras que
tiene son vocales.
*/
function calcularAparicionesEj11() { // boton "Contar vocales y Letras"
      // defino las variables
      const vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ'; // entre comillas porque es un string
      const letras = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ';
      const frase = document.getElementById('ej-11-frase').value; // capturo lo que se escriba en el input
      contadorDeVocales = 0;
      contadorDeLetras = 0;
      // un for que recorra la frase como un array.
      for (let i = 0; i < frase.length; i++) {
            if (letras.indexOf(frase[i]) !== -1) {
                  contadorDeLetras = contadorDeLetras + 1;
                  if (vocales.indexOf(frase[i]) !== -1) {
                        contadorDeVocales = contadorDeVocales + 1;
                  }
            }
      }
      // ahora se debe actualiar el parrafo donde debe contener el número de apariciones solicitado.
      document.getElementById('ej-11-apariciones-vocales-sobre-total').innerText = 'De un total de ' + contadorDeLetras + ' letras ' + contadorDeVocales + ' son vocales.';
}

/* _________________________________________________________________________________________________________________________ 
12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
cada una de las vocales.
*/

function calcularAparicionesEj12() { // boton "Contar vocales y Letras" 

      // defino las variables
      const vocal_a = 'aAáÁ'; // entre comillas porque es un string
      const vocal_e = 'eEéÉ';
      const vocal_i = 'iIíÍ';
      const vocal_o = 'oOóÓ';
      const vocal_u = 'uUúÚ';
      // vocales = [vocal_a, vocal_e, vocal_i, vocal_o, vocal_u];

      const frase = document.getElementById('ej-12-frase').value; // capturo lo que se escriba en el input
      contadorDeVocal_a = 0;
      contadorDeVocal_e = 0;
      contadorDeVocal_i = 0;
      contadorDeVocal_o = 0;
      contadorDeVocal_u = 0;

      // un for que recorra la frase como un array.
      for (let i = 0; i < frase.length; i++) {
            if (vocal_a.indexOf(frase[i]) !== -1) {
                  contadorDeVocal_a = contadorDeVocal_a + 1;
            } if (vocal_e.indexOf(frase[i]) !== -1) {
                  contadorDeVocal_e = contadorDeVocal_e + 1;
            } if (vocal_i.indexOf(frase[i]) !== -1) {
                  contadorDeVocal_i = contadorDeVocal_i + 1;
            } if (vocal_o.indexOf(frase[i]) !== -1) {
                  contadorDeVocal_o = contadorDeVocal_o + 1;
            } if (vocal_u.indexOf(frase[i]) !== -1) {
                  contadorDeVocal_u = contadorDeVocal_u + 1;
            }
      }
      // ahora se debe actualiar el parrafo donde debe contener el número de apariciones solicitado.
      document.getElementById('ej-12-apariciones-vocales').innerText = 'Cantidad de vocales: \n a = ' + contadorDeVocal_a + '\n e = ' + contadorDeVocal_e + '\n i = ' + contadorDeVocal_i + '\n o = ' + contadorDeVocal_o + '\n u = ' + contadorDeVocal_u;
}

/* _________________________________________________________________________________________________________________________ 
13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro)
*/
function esDivisible() { // boton "Es divisible?"
      const numero = document.getElementById("ej-13-numero").value; // capturo lo que se escriba en el input.
      if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0) {
            document.getElementById('ej-13-es-divisible').innerText = 'Es divisible'
      } else {
            document.getElementById('ej-13-es-divisible').innerText = 'No es divisible'
      }
}
/* _________________________________________________________________________________________________________________________ 
14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay
que decir todos por los que es divisible)
*/
function porCualesEsDivisibleEj14() { // boton "Es divisible?"
      const numero = document.getElementById("ej-14-numero").value; // capturo lo que se escriba en el input.
      divisiblePor = []; // en este array se irán guardando los números por los cuales es divisible número.

      if (numero % 2 == 0) {
            divisiblePor.push(2);
      } if (numero % 3 == 0) {
            divisiblePor.push(3);
      } if (numero % 5 == 0) {
            divisiblePor.push(5);
      } if (numero % 7 == 0) {
            divisiblePor.push(7);
      }

      if (divisiblePor.length < 1) {
            document.getElementById('ej-14-es-divisible').innerText = 'El número escrito NO es divisible por 2, 3, 5 y 7.';
      } else {
            document.getElementById('ej-14-es-divisible').innerText = 'El número escrito SI es divisible por: ' + divisiblePor;
      }
}

/* _________________________________________________________________________________________________________________________ 
15. Escribir un programa que escriba en pantalla los divisores de un número dado.
*/
function porCualesEsDivisibleEj15() { // boton "Calcular divisores"
      const numero = document.getElementById("ej-15-numero").value; // capturo lo que se escriba en el input.
      divisiblePor = []; // en este array se irán guardando los números por los cuales es divisible número.
      for (let i = 0; i < numero / 2; i++) {
            if (numero % i == 0) {
                  divisiblePor.push(i);
            }
      }
      /* Ahora tiene que mostrar en pantalla todos los divisores de número, y si no encontramos ninguno, 
      deberá mostrarse el mismo número, ya que todos los numeros son divisibles por si mismo. */
      divisiblePor.push(numero);
      document.getElementById('ej-15-divisores').innerText = 'El número escrito SI es divisible por: ' + divisiblePor;
}
/* _________________________________________________________________________________________________________________________  
16. Escribir un programa que escriba en pantalla los divisores comunes de dos
números dados.
*/
function divisorComun() { // boton "Calcuar divisor común"
      const numero1 = document.getElementById("ej-16-numero-1").value; // capturo lo que se escriba en el input.
      const numero2 = document.getElementById("ej-16-numero-2").value; // capturo lo que se escriba en el input.
      divisiblePor = []; // en este array se irán guardando los números por los cuales es divisible número.

      if (numero1 > numero2) {
            for (let i = 0; i < numero2 + 1; i++) {
                  if (numero1 % i == 0 && numero2 % i == 0) {
                        divisiblePor.push(i);
                  }
            }
            document.getElementById('ej-16-divisores').innerText = 'Los divisores comunes de los números escritos son: ' + divisiblePor;
      } else {
            for (let i = 0; i < numero1 + 1; i++) {
                  if (numero1 % i == 0 && numero2 % i == 0) {
                        divisiblePor.push(i);
                  }
            }
            document.getElementById('ej-16-divisores').innerText = 'Los divisores comunes de los números son: ' + divisiblePor;
      }
}
/* _________________________________________________________________________________________________________________________ 
17. Escribir un programa que nos diga si un número dado es primo (no es divisible
por ninguno otro número que no sea él mismo o la unidad)
*/
function esPrimo() { // boton "Es primo?"
      const numero = document.getElementById("ej-17-numero").value; // capturo lo que se escriba en el input. 
      contadorDivisores = 0;

      for (let i = 2; i < numero / 2; i++) { // hasta que (i<numero/2) porque después se repetirían los divisores.
            if (numero % i == 0) { // el resto de dividir un primo por cualquier número que no sea 1 o el mismo, es diferente a cero.
                  contadorDivisores = contadorDivisores + 1;
            }
      }

      if (contadorDivisores != 0) {
            document.getElementById('ej-17-primo').innerText = 'El número ingresado NO es un número primo';
      } else {
            document.getElementById('ej-17-primo').innerText = 'El número ingresado SI es un número primo';
      }

}
/* _________________________________________________________________________________________________________________________  
18. Pide la edad y si es mayor de 18 años indica que ya puede conducir.
(visto en clase 25/04/2024)*/
function determinar() { // boton "Calular permiso"
      const edadEnHtml = document.getElementById('ej-18-numero'); // selecciono el elemennto input del docuemnto.
      const edad = Number(edadEnHtml.value); // captura el valor del y lo convierte a número con la funcion Number().

      // como quiero validar que exista un valor
      if (!edad) { // si cuando el input este vacío (sea diferente a la variable)
            edadEnHtml.classList.add('error'); // cambia la clase del input, para que coincida con una clase determinada en el .css que cambia el color a rojo.
            return;
      } else {
            edadEnHtml.classList.remove('error'); // remueve la clase si el input no esta vacío.
      }

      // invoco a la función con el parametro
      if (esMayorDeEdad(edad)) {
            // tomar el p y acualizar su innerText || innerHTML
            document.getElementById('ej-18-permiso').innerHTML = '<b>SI es mayor de edad, puede conducir.</b>';
      } else {
            document.getElementById('ej-18-permiso').innerHTML = '<b>NO es mayor de edad, puede conducir.</b>';
      }
}
/*
// si edad < 18 años => false
// si edad => 18 años => true
*/
function esMayorDeEdad(edad) {
      //aca va la logica!
      if (edad >= 18) {
            return true;
      } else {
            return false;
      }
}
// // otra opción a utilizar
// function esMayorDeEdad(edad){
//       return edad >= 18; // true || false
// }

/* _________________________________________________________________________________________________________________________  
19. Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente
*/
const calificacion = ['Muy deficiente', 'Insuficiente', 'Suficiente', 'Bien', 'Notable', 'Sobresaliente'];
const escribir = document.getElementById('ej-19-calificacion');
function calificarNota() { //boton "Calificación"
      const nota = document.getElementById('ej-19-nota'); // selecciono el elemennto input del docuemnto.
      const nota_numero = Number(nota.value); // captura el valor del y lo convierte a número con la funcion Number().

      if (nota_numero <= 3) {
            escribir.innerHTML = calificacion[0];
      } if (nota_numero > 3 && nota_numero <= 5) {
            escribir.innerHTML = calificacion[1];
      } if (nota_numero > 5 && nota_numero <= 6) {
            escribir.innerHTML = calificacion[2];
      } if (nota_numero > 6 && nota_numero <= 7) {
            escribir.innerHTML = calificacion[3];
      } if (nota_numero > 7 && nota_numero <= 9) {
            escribir.innerHTML = calificacion[4];
      } if (nota_numero == 10) {
            escribir.innerHTML = calificacion[5];
      }
}
/* _________________________________________________________________________________________________________________________ 
20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión.
*/


let cadenas = ""; // variable que guardará las cadenas de texto

const respuesta_ej_20 = document.getElementById('ej-20-cadena-texto'); // este parrafo esta destinado para la respuesta al ejercicio

function concatenar() { //boton "Agregar texto"
      const mientras = true; // inicia con el valor true 
      const texto = document.getElementById('ej-20-encadenar'); // agarro el texto introducido en el input       
      while (mientras) {
            cadenas = cadenas + '-' + texto.value;
            mientras = false;
            texto.innerText = '';
      }
}

function cancelarConcatenacion() { // boton "Cancelar"
      respuesta_ej_20.innerText = cadenas;
}
/* _________________________________________________________________________________________________________________________ 
21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
deberá indicarse la suma total de los números introducidos.
*/
let sumaTotal_ej_21 = 0; // variable que guardará las sumas de los números
const respuesta_ej_21 = document.getElementById('ej-21-suma-total'); // este parrafo esta destinado para la respuesta al ejercicio

function sumarTodos() { //boton "Sumar número"
      debugger;
      let mientras_ej_21 = true; // inicia con el valor true
      let numero_ej_21 = document.getElementById('ej-21-numero').value; // agarro el valor introducido en el input
      console.log(isNaN(numero_ej_21));

      // validación de que numero_ej_21 es de tipo Number 
      if (isNaN(numero_ej_21)) {
            alert('Recuerde que debe ingresar un valor numérico.');
            document.getElementById('ej-21-numero').value = " "; // limpia el input
      } else {
            while (mientras_ej_21 == true) {
                  sumaTotal_ej_21 = sumaTotal_ej_21 + Number(numero_ej_21);
                  mientras_ej_21 = false; // con esto sale del while
                  document.getElementById('ej-21-numero').value = " "; // limpia el input
            }
      }
}
function terminarSumaTotal() { // boton "Cancelar"
      respuesta_ej_21.innerText = sumaTotal_ej_21;
}
/* _________________________________________________________________________________________________________________________  
22. Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento Nacional de Identidad).
El algoritmo para calcular la letra del dni es el siguiente :
● El número debe ser entre 0 y 99999999.
● Debemos calcular el resto de la división entera entre el número y el número 23.
● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
● Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/
const letra_dni_ej_22 = document.getElementById('ej-22-letra-dni'); // este parrafo esta destinado para la respuesta al ejercicio

function calcularLetraDni() { // boton "Calcular letra"
      let letra_dni = "";
      let numero_ej_22 = document.getElementById('ej-22-numero-dni').value; // agarro el valor introducido en el input
      let num_ej_22 = Number(numero_ej_22);

      let mientras_ej_22 = true;
      while (mientras_ej_22 == true) {
            // validación si numero_ej_22 es un número      
            if (isNaN(numero_ej_22)) {
                  alert('Recuerde que debe ingresar un valor numérico.');
                  letra_dni_ej_22.innerText = 'Por favor reingrese el número DNI.';
                  document.getElementById('ej-22-numero-dni').value = " "; // limpia el input
            } else {

                  if (num_ej_22 > 0 && num_ej_22 < 99999999) {

                        let resto = num_ej_22 % 23;

                        switch (resto) {
                              case 0: letra_dni = "T";
                                    break;
                              case 1: letra_dni = "R";
                                    break;
                              case 2: letra_dni = "W";
                                    break;
                              case 3: letra_dni = "A";
                                    break;
                              case 4: letra_dni = "G";
                                    break;
                              case 5: letra_dni = "M";
                                    break;
                              case 6: letra_dni = "Y";
                                    break;
                              case 7: letra_dni = "F";
                                    break;
                              case 8: letra_dni = "P";
                                    break;
                              case 9: letra_dni = "D";
                                    break;
                              case 10: letra_dni = "X";
                                    break;
                              case 11: letra_dni = "B";
                                    break;
                              case 12: letra_dni = "N";
                                    break;
                              case 13: letra_dni = "J";
                                    break;
                              case 14: letra_dni = "Z";
                                    break;
                              case 15: letra_dni = "S";
                                    break;
                              case 16: letra_dni = "Q";
                                    break;
                              case 17: letra_dni = "V";
                                    break;
                              case 18: letra_dni = "H";
                                    break;
                              case 19: letra_dni = "L";
                                    break;
                              case 20: letra_dni = "C";
                                    break;
                              case 21: letra_dni = "K";
                                    break;
                              case 22: letra_dni = "E";
                                    break;
                        } // termmina el switch
                  } else {
                        alert('Recuerde que el valor del número ingresado debe ser entre 0 y 99999999');
                        document.getElementById('ej-22-numero-dni').value = " "; // limpia el input
                  }
                  letra_dni_ej_22.innerText = 'El número ingresado fue: ' + num_ej_22 + ' y su letra DNI es: ' + letra_dni;
                  document.getElementById('ej-22-numero-dni').value = " "; // limpia el input    
            }
            mientras_ej_22 = false // sale del while
      } // termina el while
}


function cancelarLetraDNI() { // boton "cancelar"
      letra_dni_ej_22.innerText = "-";
      numero_ej_22 = "";
}


/* _________________________________________________________________________________________________________________________ 
23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 
1---------1    = 1
22--------11   = 1+1  string
333-------111
4444------1111
55555-----11111
666666----111111
…….
*/

let respuestas_ej_23 = "";
function armarPiramide() { // boton "Piramide"
      for (let i = 0; i <= 30; i++) {
            respuestas_ej_23 = ""; /* cuando ingresa al primer for, 
            la variable respuestas_ej_23 se reinicia en vacío, 
            esto es para lograr que no se reescriba las respuestas caca vez que ingresa al segundo for */
            // unos = unos + 1;   
            for (let j = 0; j < i; j++) {
                  respuestas_ej_23 = respuestas_ej_23 + i;
            }
            /* cada vez que sale del segundo for, 
            se imprime en el parrafo destinado a eso,
            la concatenación de valores i, desde j=0 mientras j<i*/
            document.getElementById('ej-23-armar-piramide').innerHTML += respuestas_ej_23 + "<br>";
      }
}
/* _________________________________________________________________________________________________________________________ 
24. Haz un script que escriba una pirámide inversa de los números del 1 al
número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
666666
55555
4444
333
22
1
2
*/
let respuestas_ej_24 = ""
function armarPiramideInversa() { // boton "Piramide inversa"
      const numero_del_usuario = document.getElementById('ej-24-numero-usuario').value; // valor ingresado al input, con este número inicia la piramide invertida     
      /* la variable i, debe iniciar con el valor numérico ingresado por el usuario,
      y en cada iteración reducir una unidad el valor de i,
      mientras i sea mayor a cero. */
      for (let i = numero_del_usuario; i > 0; i--) {
            respuestas_ej_24 = ""; /* cuando ingresa al primer for, 
            la variable respuestas_ej_23 se reinicia en vacío, 
            esto es para lograr que no se reescriba las respuestas caca vez que ingresa al segundo for */
            // unos = unos + 1;   
            for (let j = 0; j < i; j++) {
                  respuestas_ej_24 = respuestas_ej_24 + i;
            }
            /* cada vez que sale del segundo for, 
            se imprime en el parrafo destinado a eso,
            la concatenación de valores i, desde j=0 mientras j<i*/
            document.getElementById('ej-24-armar-piramide').innerHTML += respuestas_ej_24 + "<br>";
      }
}
/* _________________________________________________________________________________________________________________________ 
25. Un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5
————————————————————
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/
let respuestas_ej_25 = ""
function armarListaNumeros() { // boton "Numeros"  
      /*   */
      for (let i = 1; i <= 500; i++) { 
            let numero_ej_25 = ""
            // escribe números del 1 al 500.   
            
            // condiciones:
            // idicar cuáles son múltiplos de 4.
            console.log('dentro del for');
            if(i % 4 ==  0){
                  numero_ej_25 = i + " (Múltiplo de 4)" + "<br>";
                  if(i % 4 ==  0 && i % 5 == 0 ){
                        numero_ej_25 = i + " (Múltiplo de 4)" + "<br>" + "_____________________________________" + "<br>";
                  }
                  if(i % 4 ==  0 && i % 9 == 0 ){
                        numero_ej_25 = i + " (Múltiplo de 4) y (Múltiplo de 9)" + "<br>";
                  }
                  if(i % 4 ==  0 && i % 5 == 0 && i % 9 == 0 ){
                        numero_ej_25 = i + " (Múltiplo de 4) y (Múltiplo de 9)" + "<br>" + "_____________________________________" + "<br>";   
                  }
            }
            // idicar cuáles son múltiplos de 9.
            else if(i % 9 == 0 ){
                  numero_ej_25 = i + " (Múltiplo de 9)" + "<br>";
                  if(i % 9 == 0 && i % 5 == 0 ){
                        numero_ej_25 = i + " (Múltiplo de 9)" + "<br>" + "_____________________________________" + "<br>";
                  }
            }
            // cada 5 línea que muestre una línea horizontal.
            else if(i % 5 == 0 ){
                  numero_ej_25 =  i + "<br>" + "_____________________________________" + "<br>";
            }else {
                  numero_ej_25 = i + "<br>";
            }
            console.log('último else');
            document.getElementById('ej-25-armar-lista').innerHTML += numero_ej_25;
      }
}