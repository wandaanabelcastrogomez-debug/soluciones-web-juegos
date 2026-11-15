/* datos.js — catálogo completo: 10 juegos y 56 retos
   No hace falta servidor: se carga como script normal. */
window.__JUEGOS__ = {
  "juegos": [
    {
      "id": "semana-01",
      "semana": 1,
      "tipo": "semana",
      "concepto": "variables",
      "titulo": "Cajas con nombre: variables",
      "explicacion": "Una variable es una caja con nombre donde guardas un valor para usarlo más tarde. Al escribir let edad = 15; le dices a la computadora «guarda 15 en una caja llamada edad». Cada vez que nombras la caja después, estás pidiendo lo que hay dentro.",
      "retos": [
        {
          "tipo": "orden",
          "enunciado": "Ordena las instrucciones para crear una variable llamada monedas, sumarle 5 y mostrar el resultado.",
          "bloques": [
            "let monedas = 10;",
            "monedas = monedas + 5;",
            "console.log(monedas);"
          ],
          "pistas": [
            "Antes de usar una variable hay que crearla: fíjate en cuál de las tres líneas la crea.",
            "La línea que solo muestra el resultado no puede ir antes de haber cambiado el valor.",
            "Primero se declara con su valor inicial, luego se modifica y al final se imprime."
          ],
          "exito": "Orden perfecto: crear, modificar y mostrar. Ese es el ciclo de vida de una variable."
        },
        {
          "tipo": "completar",
          "enunciado": "Completa la línea para crear una variable llamada edad que guarde el número 15.",
          "plantilla": "___ edad ___ 15;",
          "respuesta": [
            "let",
            "="
          ],
          "opciones": [
            [
              "let",
              "const",
              "print"
            ],
            [
              "=",
              "==",
              "->"
            ]
          ],
          "pistas": [
            "Para crear una variable que después puede cambiar se usa una palabra clave de tres letras.",
            "Una sola línea no compara nada: solo guarda un valor en la caja.",
            "La palabra clave es let y el símbolo que asigna es un solo igual."
          ],
          "exito": "Correcto: la palabra clave declara la caja y el = mete el valor dentro."
        },
        {
          "tipo": "predecir",
          "enunciado": "¿Qué número imprime este programa?",
          "codigo": "let vida = 3;\nvida = vida * 2;\nvida = vida - 1;\nconsole.log(vida);",
          "aceptadas": [
            "5"
          ],
          "pistas": [
            "Ve paso a paso: ¿cuánto vale vida después de la segunda línea?",
            "La segunda línea guarda 6 en la misma caja; la tercera le resta 1.",
            "El resultado es un número de una cifra, mayor que 4."
          ],
          "exito": "Exacto: la variable va cambiando y cada línea usa el valor que dejó la anterior."
        },
        {
          "tipo": "predecir",
          "enunciado": "Y ahora con texto: ¿qué imprime este programa?",
          "codigo": "let nombre = \"Ana\";\nnombre = nombre + \"!\";\nconsole.log(nombre);",
          "aceptadas": [
            "Ana!",
            "ana!"
          ],
          "pistas": [
            "Las comillas indican texto, así que el + aquí no suma números: pega una cosa detrás de otra.",
            "El valor de nombre cambia de \"Ana\" a \"Ana\" más el signo.",
            "Escribe el nombre tal cual estaba y añade el signo de exclamación."
          ],
          "exito": "¡Bien! Una variable también puede guardar texto, y el + lo concatena."
        }
      ]
    },
    {
      "id": "semana-02",
      "semana": 2,
      "tipo": "semana",
      "concepto": "condicionales",
      "titulo": "Decisiones en el camino: condicionales",
      "explicacion": "Un condicional deja que el programa elija entre dos caminos: si se cumple una condición hace una cosa y, si no, hace otra. Se escribe con if (si) y else (si no), y la condición siempre es algo que puede ser verdadero o falso. Así el mismo código responde distinto según los datos.",
      "retos": [
        {
          "tipo": "orden",
          "enunciado": "Ordena las líneas para comprobar si una persona puede votar y, si no puede, avisarlo.",
          "bloques": [
            "if (edad >= 18) {",
            "  console.log(\"Puedes votar\");",
            "} else {",
            "  console.log(\"Todavía no puedes votar\");",
            "}"
          ],
          "pistas": [
            "El bloque if va primero: dentro de sus llaves solo está lo que pasa cuando la condición se cumple.",
            "else es el camino alternativo, así que no puede ir antes que su if.",
            "Primero la condición con su cuerpo, después else con el suyo, y al final se cierra todo."
          ],
          "exito": "Correcto: if abre el primer camino, else el segundo y las llaves cierran cada bloque."
        },
        {
          "tipo": "completar",
          "enunciado": "Completa el programa para que avise de calor solo cuando la temperatura supere los 30 grados.",
          "plantilla": "if (temperatura ___ 30) {\n  console.log(\"Hace calor\");\n} ___ {\n  console.log(\"Hace fresco\");\n}",
          "respuesta": [
            ">",
            "else"
          ],
          "opciones": [
            [
              ">",
              "<",
              "=="
            ],
            [
              "else",
              "if",
              "then"
            ]
          ],
          "pistas": [
            "«Supere los 30» significa que la temperatura tiene que ser mayor, no igual ni menor.",
            "El segundo hueco es la palabra que abre el camino alternativo.",
            "El primero es un símbolo de comparación y el segundo una palabra clave de cuatro letras."
          ],
          "exito": "Muy bien: > compara y else abre el camino de los días frescos."
        },
        {
          "tipo": "predecir",
          "enunciado": "¿Qué imprime este programa? (escribe el texto tal cual, sin las comillas)",
          "codigo": "let puntos = 12;\nif (puntos >= 10) {\n  console.log(\"Nivel 2\");\n} else {\n  console.log(\"Nivel 1\");\n}",
          "aceptadas": [
            "Nivel 2",
            "nivel 2"
          ],
          "pistas": [
            "Compara el valor guardado en puntos con 10, no con 12.",
            "12 es mayor o igual que 10, así que la condición se cumple.",
            "Se ejecuta solo la línea que está dentro del primer bloque."
          ],
          "exito": "Exacto: como 12 >= 10 es verdadero, el else ni se toca y solo se imprime una línea."
        },
        {
          "tipo": "predecir",
          "enunciado": "Aquí hay tres caminos. ¿Qué se imprime si hora vale 14?",
          "codigo": "let hora = 14;\nif (hora < 12) {\n  console.log(\"Buenos días\");\n} else if (hora < 20) {\n  console.log(\"Buenas tardes\");\n} else {\n  console.log(\"Buenas noches\");\n}",
          "aceptadas": [
            "Buenas tardes",
            "buenas tardes"
          ],
          "pistas": [
            "Las condiciones se revisan de arriba abajo y se detiene en la primera que sea verdadera.",
            "14 no es menor que 12, así que el primer bloque se descarta: prueba el segundo.",
            "14 sí es menor que 20, así que la respuesta es el saludo de la tarde."
          ],
          "exito": "Perfecto: con else if el programa prueba en orden y se queda con el primer camino verdadero."
        }
      ]
    },
    {
      "id": "semana-03",
      "semana": 3,
      "tipo": "semana",
      "concepto": "bucles",
      "titulo": "Repetir sin copiar: bucles",
      "explicacion": "Un bucle repite las mismas instrucciones muchas veces sin que las escribas de nuevo. En vez de copiar diez líneas iguales, escribes el paso una sola vez y le dices a la computadora cuántas veces repetirlo o hasta cuándo seguir. Con for repites un número conocido de veces; con while repites mientras una condición siga siendo verdadera.",
      "retos": [
        {
          "tipo": "orden",
          "enunciado": "Ordena las líneas del bucle que suma los números 1, 2 y 3 y luego muestra el total.",
          "bloques": [
            "let suma = 0;",
            "for (let i = 1; i <= 3; i++) {",
            "  suma = suma + i;",
            "}",
            "console.log(suma);"
          ],
          "pistas": [
            "Antes del bucle hace falta una caja donde ir acumulando, empezando en cero.",
            "La línea que suma va dentro del bucle; la que muestra el total, después.",
            "El orden es: acumulador, cabecera del for, cuerpo que suma, llave de cierre y muestra final."
          ],
          "exito": "Perfecto: el acumulador empieza en 0 y crece en cada vuelta del bucle."
        },
        {
          "tipo": "completar",
          "enunciado": "Completa el bucle para que imprima del 1 al 5, incluido el 5.",
          "plantilla": "for (let i = 1; i ___ 5; i___ ) {\n  console.log(i);\n}",
          "respuesta": [
            "<=",
            "++"
          ],
          "opciones": [
            [
              "<=",
              "<",
              ">="
            ],
            [
              "++",
              "--",
              "+1"
            ]
          ],
          "pistas": [
            "Si la comparación deja fuera al 5, el bucle se detiene antes de imprimirlo.",
            "En cada vuelta el contador tiene que subir, no bajar.",
            "Necesitas «menor o igual que» y el operador que suma uno al contador."
          ],
          "exito": "Bien: con <= el 5 entra en el bucle, y ++ hace avanzar el contador."
        },
        {
          "tipo": "predecir",
          "enunciado": "¿Cuántas líneas imprime este programa? (responde solo con el número)",
          "codigo": "let n = 0;\nwhile (n < 3) {\n  console.log(n);\n  n = n + 1;\n}",
          "aceptadas": [
            "3",
            "tres"
          ],
          "pistas": [
            "No mires el valor que imprime: cuenta cuántas veces entra al cuerpo del bucle.",
            "El bucle se repite mientras n sea menor que 3, y n empieza en 0.",
            "Cada vuelta suma 1 a n; fíjate en cuántos valores distintos de n cumplen la condición."
          ],
          "exito": "Exacto: el cuerpo se ejecuta una vez por cada valor de n que cumple la condición."
        },
        {
          "tipo": "predecir",
          "enunciado": "¿Qué número imprime este programa al final?",
          "codigo": "let total = 0;\nfor (let i = 1; i <= 4; i++) {\n  total = total + i;\n}\nconsole.log(total);",
          "aceptadas": [
            "10"
          ],
          "pistas": [
            "El bucle no imprime nada: solo va acumulando dentro de total.",
            "En cada vuelta suma el valor actual de i: primero 1, después 2, y así hasta 4.",
            "El resultado es la suma de 1 + 2 + 3 + 4, un número de dos cifras que empieza por 1."
          ],
          "exito": "Correcto: la variable total guarda lo sumado en todas las vueltas, y se imprime una sola vez al salir."
        }
      ]
    },
    {
      "id": "semana-04",
      "semana": 4,
      "tipo": "semana",
      "concepto": "funciones",
      "titulo": "Máquinas reutilizables: funciones",
      "explicacion": "Una función es un bloque de instrucciones con nombre que puedes usar todas las veces que quieras sin volver a escribirlo. Le pasas datos entre paréntesis (los parámetros) y con return devuelve un resultado que puedes guardar o imprimir. Así divides un problema grande en piezas pequeñas que puedes probar por separado.",
      "retos": [
        {
          "tipo": "orden",
          "enunciado": "Ordena el código para crear una función que salude y usarla después.",
          "bloques": [
            "function saludar(nombre) {",
            "  return \"Hola, \" + nombre;",
            "}",
            "console.log(saludar(\"Ana\"));"
          ],
          "pistas": [
            "Una función no hace nada por sí sola: primero se define y solo después se llama.",
            "La línea que devuelve el saludo va dentro de las llaves de la función.",
            "El orden es: cabecera con el nombre, cuerpo con return, llave de cierre y, al final, la llamada."
          ],
          "exito": "Correcto: primero defines la máquina y después la pones a trabajar con el dato «Ana»."
        },
        {
          "tipo": "completar",
          "enunciado": "Completa la función para que devuelva la suma de sus dos parámetros.",
          "plantilla": "___ sumar(a, b) {\n  ___ a + b;\n}",
          "respuesta": [
            "function",
            "return"
          ],
          "opciones": [
            [
              "function",
              "let",
              "def"
            ],
            [
              "return",
              "console.log",
              "var"
            ]
          ],
          "pistas": [
            "Para crear una función se usa una palabra clave de ocho letras, no la de las variables.",
            "Si solo lo imprimes con console.log, la función no entrega el valor a quien la llama.",
            "El primer hueco es la palabra que declara la función; el segundo, la que entrega el resultado."
          ],
          "exito": "Muy bien: function la declara y return entrega el resultado a quien la llamó."
        },
        {
          "tipo": "predecir",
          "enunciado": "¿Qué número imprime este programa?",
          "codigo": "function doble(n) {\n  return n * 2;\n}\nconsole.log(doble(4) + 1);",
          "aceptadas": [
            "9"
          ],
          "pistas": [
            "Primero se resuelve la llamada doble(4); lo de fuera se calcula después.",
            "doble(4) devuelve 8, y a ese resultado todavía le queda una operación por hacer.",
            "El resultado final es un número de una cifra, mayor que 8."
          ],
          "exito": "Exacto: la función devuelve un valor normal y con él se sigue calculando."
        },
        {
          "tipo": "predecir",
          "enunciado": "¿Qué texto imprime este programa? (escríbelo sin comillas)",
          "codigo": "function estado(puntos) {\n  if (puntos >= 50) {\n    return \"Aprobado\";\n  }\n  return \"Reprobado\";\n}\nconsole.log(estado(40));",
          "aceptadas": [
            "Reprobado",
            "reprobado"
          ],
          "pistas": [
            "Mira el valor que recibe la función: no llega al número de la condición.",
            "Si la condición es falsa, el return de dentro no se ejecuta: el programa sigue bajando.",
            "La respuesta es la palabra que aparece en el último return, cuando no se cumple la condición."
          ],
          "exito": "Perfecto: return termina la función en el momento en que se ejecuta, y saltó directo al último."
        }
      ]
    },
    {
      "id": "semana-05",
      "semana": 5,
      "tipo": "semana",
      "concepto": "arrays/listas",
      "titulo": "Listas ordenadas: arrays",
      "explicacion": "Un array es una lista ordenada de valores guardada en una sola variable: números, textos o lo que necesites. Cada elemento tiene una posición llamada índice, y lo importante es que la primera posición es la 0, no la 1. Con length sabes cuántos elementos hay y con un bucle puedes recorrerlos todos.",
      "retos": [
        {
          "tipo": "orden",
          "enunciado": "Ordena el código para crear una lista de frutas, añadir una y mostrar la primera.",
          "bloques": [
            "let frutas = [\"manzana\", \"pera\"];",
            "frutas.push(\"uva\");",
            "console.log(frutas[0]);"
          ],
          "pistas": [
            "No puedes añadir a una lista que todavía no existe.",
            "La línea que muestra la primera fruta necesita que la lista ya esté creada.",
            "Primero se crea la lista con corchetes, después se añade y al final se lee una posición."
          ],
          "exito": "Bien: la lista se crea, crece con push y se lee por su índice."
        },
        {
          "tipo": "completar",
          "enunciado": "Completa el código para que imprima «verde» y después cuántos colores hay en la lista.",
          "plantilla": "let colores = [\"rojo\", \"verde\", \"azul\"];\nconsole.log(colores[___]);\nconsole.log(colores.___);",
          "respuesta": [
            "1",
            "length"
          ],
          "opciones": [
            [
              "0",
              "1",
              "2"
            ],
            [
              "length",
              "size",
              "count"
            ]
          ],
          "pistas": [
            "«verde» no es el primer elemento de la lista: cuenta desde cero.",
            "Para saber cuántos elementos hay se usa una propiedad, no una función con paréntesis.",
            "El índice de «verde» es el número que va después del 0, y la propiedad se llama length."
          ],
          "exito": "Correcto: el índice 1 es el segundo elemento, y length devuelve 3."
        },
        {
          "tipo": "predecir",
          "enunciado": "¿Qué número imprime este programa?",
          "codigo": "let notas = [7, 9, 5];\nconsole.log(notas[1] + notas[2]);",
          "aceptadas": [
            "14"
          ],
          "pistas": [
            "Ojo: notas[1] no es el primer valor de la lista.",
            "notas[1] es 9 y notas[2] es 5.",
            "El resultado es la suma de esos dos, un número de dos cifras que empieza por 1."
          ],
          "exito": "Exacto: el índice 0 es el 7, así que notas[1] es el segundo valor."
        },
        {
          "tipo": "predecir",
          "enunciado": "¿Qué número imprime al final este recorrido de la lista?",
          "codigo": "let numeros = [2, 4, 6];\nlet total = 0;\nfor (let i = 0; i < numeros.length; i++) {\n  total = total + numeros[i];\n}\nconsole.log(total);",
          "aceptadas": [
            "12"
          ],
          "pistas": [
            "El bucle no imprime nada en cada vuelta: solo acumula.",
            "i va de 0 a 2, así que en cada vuelta se suma un elemento distinto de la lista.",
            "El resultado es la suma de los tres números de la lista, un número de dos cifras que empieza por 1."
          ],
          "exito": "Perfecto: con length el bucle se adapta solo al tamaño de la lista y suma cada elemento."
        }
      ]
    },
    {
      "id": "semana-06",
      "semana": 6,
      "tipo": "semana",
      "concepto": "recursión",
      "titulo": "Mirarse al espejo: recursión",
      "explicacion": "Una función recursiva se llama a sí misma para resolver una versión más pequeña del mismo problema, como cuando te miras en dos espejos enfrentados. Para que no se repita para siempre necesita un caso base: una condición que la detiene y devuelve un valor. Si falta el caso base, la función se llama sin parar hasta que el programa falla.",
      "retos": [
        {
          "tipo": "orden",
          "enunciado": "Ordena la función recursiva que cuenta hacia atrás desde n hasta 1.",
          "bloques": [
            "function cuentaAtras(n) {",
            "  if (n === 0) return;",
            "  console.log(n);",
            "  cuentaAtras(n - 1);",
            "}"
          ],
          "pistas": [
            "El caso base tiene que comprobarse antes de imprimir nada, o nunca se detendría.",
            "La llamada a sí misma va al final, y debe pasarle un número más pequeño.",
            "Orden: cabecera, caso base que corta, mostrar, llamada con n-1 y llave de cierre."
          ],
          "exito": "Perfecto: primero el freno, después el trabajo y al final la llamada con el problema más pequeño."
        },
        {
          "tipo": "completar",
          "enunciado": "Completa el caso base del factorial: cuando n vale 1, la función devuelve 1 y se detiene.",
          "plantilla": "function factorial(n) {\n  if (n ___ 1) {\n    return ___;\n  }\n  return n * factorial(n - 1);\n}",
          "respuesta": [
            "===",
            "1"
          ],
          "opciones": [
            [
              "===",
              ">=",
              "!="
            ],
            [
              "0",
              "1",
              "n"
            ]
          ],
          "pistas": [
            "El caso base es el momento exacto en que ya no hay que seguir bajando.",
            "Comparar con >= haría que el caso base se cumpliera en casi todos los valores y rompería el resultado.",
            "Necesitas comparar igualdad estricta y devolver el número que hace que el factorial termine."
          ],
          "exito": "Bien: === detiene la cadena justo en 1, y ese 1 es el valor que empieza a multiplicarse hacia arriba."
        },
        {
          "tipo": "predecir",
          "enunciado": "¿Qué imprime este programa? (escríbelo sin comillas)",
          "codigo": "function cuentaAtras(n) {\n  if (n === 0) {\n    console.log(\"¡Fin!\");\n    return;\n  }\n  cuentaAtras(n - 1);\n}\ncuentaAtras(2);",
          "aceptadas": [
            "¡Fin!",
            "¡fin!",
            "Fin!"
          ],
          "pistas": [
            "La función no imprime nada hasta llegar al caso base.",
            "Con n = 2 se llama con 1, y con 1 se llama con 0.",
            "Solo hay un console.log en todo el código, dentro del caso base."
          ],
          "exito": "Exacto: cada llamada baja un escalón hasta llegar a 0 y ahí se imprime una única vez."
        },
        {
          "tipo": "predecir",
          "enunciado": "¿Qué número imprime este programa?",
          "codigo": "function sumaHasta(n) {\n  if (n === 0) return 0;\n  return n + sumaHasta(n - 1);\n}\nconsole.log(sumaHasta(3));",
          "aceptadas": [
            "6"
          ],
          "pistas": [
            "La función se llama con 3, que a su vez llama con 2, luego con 1 y termina en 0.",
            "Las sumas se resuelven de dentro hacia fuera: primero el 0, después 1 + 0, luego 2 + 1…",
            "El resultado es la suma de 1 + 2 + 3, un número de una cifra."
          ],
          "exito": "Correcto: la recursión construye la respuesta al volver de cada llamada, de dentro hacia fuera."
        }
      ]
    },
    {
      "id": "semana-07",
      "semana": 7,
      "tipo": "semana",
      "concepto": "algoritmos básicos (buscar y ordenar)",
      "titulo": "Buscar sin perderte: algoritmos básicos",
      "explicacion": "Un algoritmo es una receta de pasos ordenados que resuelve un problema. Buscar es recorrer una lista hasta dar con lo que quieres, y ordenar es colocar los elementos en un orden claro para encontrarlos después mucho más rápido.",
      "retos": [
        {
          "tipo": "orden",
          "enunciado": "Ordena las piezas de una búsqueda lineal: recorrer la lista de nombres y guardar la posición del que buscas.",
          "bloques": [
            "let posicion = -1;",
            "for (let i = 0; i < nombres.length; i++) {",
            "  if (nombres[i] === buscado) posicion = i;",
            "}"
          ],
          "pistas": [
            "Antes de recorrer la lista conviene dejar preparada una respuesta por si el nombre no aparece.",
            "Para revisar la lista entera hace falta abrir un bucle con for y cerrarlo al final.",
            "Primero prepara la variable, luego abre el bucle, dentro compara cada nombre con el buscado y al final cierra la llave."
          ],
          "exito": "Esa es la búsqueda lineal: mirar uno por uno hasta encontrar."
        },
        {
          "tipo": "completar",
          "enunciado": "Completa el recorrido para que revise la lista desde la primera posición hasta la última.",
          "plantilla": "for (let i = 0; i ___ numeros.length; i++) {\n  if (numeros[___] === buscado) posicion = i;\n}",
          "respuesta": [
            "<",
            "i"
          ],
          "opciones": [
            [
              "<",
              ">",
              "=="
            ],
            [
              "i",
              "buscado",
              "0"
            ]
          ],
          "pistas": [
            "El bucle debe seguir dando vueltas mientras la posición no llegue al final de la lista.",
            "En cada vuelta se mira el elemento que está en la posición actual del recorrido."
          ],
          "exito": "Mientras el índice no llegue al final, seguimos mirando."
        },
        {
          "tipo": "predecir",
          "enunciado": "¿Qué imprime este programa?",
          "codigo": "let numeros = [3, 1, 2];\nfor (let i = 0; i < numeros.length - 1; i++) {\n  if (numeros[i] > numeros[i + 1]) {\n    let aux = numeros[i];\n    numeros[i] = numeros[i + 1];\n    numeros[i + 1] = aux;\n  }\n}\nconsole.log(numeros.join(\"-\"));",
          "aceptadas": [
            "1-2-3"
          ],
          "pistas": [
            "El bucle pasa una sola vez por la lista comparando cada número con el que tiene a su derecha.",
            "Cuando el de la izquierda es mayor, se intercambian: primero 3 con 1, y en la siguiente vuelta 3 con 2.",
            "Al terminar, la lista queda de menor a mayor; escríbela uniendo los números con guiones."
          ],
          "exito": "Ordenar es ir dejando los mayores a la derecha, paso a paso."
        },
        {
          "tipo": "completar",
          "enunciado": "Completa la búsqueda binaria: mira el centro de la lista y descarta la mitad donde el valor ya no puede estar.",
          "plantilla": "while (inicio <= fin) {\n  let medio = Math.floor((inicio + fin) / ___);\n  if (lista[medio] === buscado) return medio;\n  if (lista[medio] ___ buscado) inicio = medio + 1;\n  else fin = medio - 1;\n}",
          "respuesta": [
            "2",
            "<"
          ],
          "opciones": [
            [
              "2",
              "3",
              "10"
            ],
            [
              "<",
              ">",
              "==="
            ]
          ],
          "pistas": [
            "El centro de un intervalo se obtiene repartiéndolo en dos partes iguales.",
            "La segunda condición compara el valor del centro con el buscado: piensa qué relación se cumple cuando el buscado es mayor y toca mirar a la derecha.",
            "El valor del centro es más pequeño que el buscado, por eso se descarta toda la mitad izquierda avanzando inicio."
          ],
          "exito": "Cada comparación tira la mitad de la lista: eso es búsqueda binaria."
        }
      ]
    },
    {
      "id": "semana-08",
      "semana": 8,
      "tipo": "semana",
      "concepto": "variables y tipos",
      "titulo": "Cada dato en su caja: tipos de datos",
      "explicacion": "No todos los datos son iguales: un número, un texto y un booleano se comportan de forma distinta. El tipo decide qué puedes hacer con el valor, por ejemplo sumar dos números o pegar dos textos. A veces hay que convertir un dato de un tipo a otro para no llevarte sorpresas.",
      "retos": [
        {
          "tipo": "completar",
          "enunciado": "Completa las declaraciones para que cada variable guarde el tipo de dato que indica el comentario.",
          "plantilla": "let edad = 42;            // número\nlet precio = ___;         // número decimal\nlet disponible = ___;     // booleano",
          "respuesta": [
            "19.99",
            "true"
          ],
          "opciones": [
            [
              "19.99",
              "\"19.99\"",
              "19,99"
            ],
            [
              "true",
              "\"true\"",
              "1"
            ]
          ],
          "pistas": [
            "Un decimal se escribe con punto, no con coma, y sin comillas.",
            "Las comillas convertirían el valor en texto: fíjate en cuáles sobran.",
            "Un booleano solo puede ser verdadero o falso, y en JavaScript se escribe sin comillas."
          ],
          "exito": "Mismo dato, tipos distintos: número decimal y booleano."
        },
        {
          "tipo": "predecir",
          "enunciado": "¿Qué imprime este programa?",
          "codigo": "let edad = 7;\nlet sufijo = \" años\";\nconsole.log(edad + sufijo);",
          "aceptadas": [
            "7 años"
          ],
          "pistas": [
            "Cuando uno de los dos lados del + es texto, JavaScript pega en vez de sumar.",
            "El número se convierte en texto y se une al otro texto sin añadir nada.",
            "La consola muestra el número y la unidad juntos; escríbelo tal cual aparece."
          ],
          "exito": "Con texto en medio, el + concatena: el número se vuelve texto."
        },
        {
          "tipo": "orden",
          "enunciado": "Ordena los pasos para convertir el texto \"25\" en número y sumarle 5.",
          "bloques": [
            "let entrada = \"25\";",
            "let numero = Number(entrada);",
            "let total = numero + 5;",
            "console.log(total);"
          ],
          "pistas": [
            "Lo primero es tener el dato tal como llega: un texto entre comillas.",
            "Sin convertir, el + pegaría el 5 al texto y daría \"255\".",
            "Convierte antes de operar: guarda el texto, conviértelo, suma y muestra el total."
          ],
          "exito": "Convertir primero evita que 25 + 5 se convierta en 255."
        },
        {
          "tipo": "predecir",
          "enunciado": "¿Qué imprime este programa? Escribe la palabra del tipo y el valor, separados por un espacio.",
          "codigo": "let cantidad = \"3\";\nlet total = cantidad * 2;\nconsole.log(typeof total + \" \" + total);",
          "aceptadas": [
            "number 6"
          ],
          "pistas": [
            "Con el operador * JavaScript intenta convertir el texto en número antes de multiplicar.",
            "typeof devuelve el nombre del tipo, en inglés y en minúsculas.",
            "La consola muestra una palabra y un número separados por un espacio."
          ],
          "exito": "Multiplicar fuerza la conversión: el resultado ya es un número."
        }
      ]
    },
    {
      "id": "semana-09",
      "semana": 9,
      "tipo": "semana",
      "concepto": "condicionales anidados",
      "titulo": "Caminos dentro de caminos: condicionales anidados",
      "explicacion": "A veces una decisión no basta: dentro de un camino abierto por un if hace falta preguntar otra cosa. Eso es anidar condicionales, poner un if dentro de otro. Si encadenas else if, el orden de las preguntas importa: la primera condición que se cumple gana y las demás ya no se revisan.",
      "retos": [
        {
          "tipo": "predecir",
          "enunciado": "¿Qué imprime este programa?",
          "codigo": "let hora = 14;\nlet saludo;\nif (hora < 12) {\n  saludo = \"buenos días\";\n} else {\n  if (hora < 20) {\n    saludo = \"buenas tardes\";\n  } else {\n    saludo = \"buenas noches\";\n  }\n}\nconsole.log(saludo);",
          "aceptadas": [
            "buenas tardes"
          ],
          "pistas": [
            "Primero decide el if de fuera: ¿14 es menor que 12?",
            "Como la primera condición falla, entra en el else y allí se hace otra pregunta.",
            "14 está entre 12 y 20, así que cae en la rama de la tarde."
          ],
          "exito": "El else abre un camino nuevo y dentro se vuelve a preguntar."
        },
        {
          "tipo": "orden",
          "enunciado": "Ordena las ramas para que un grupo se asigne según la edad, de menor a mayor exigencia.",
          "bloques": [
            "if (edad < 13) { grupo = \"infantil\"; }",
            "else if (edad < 18) { grupo = \"adolescente\"; }",
            "else if (edad < 65) { grupo = \"adulto\"; }",
            "else { grupo = \"senior\"; }"
          ],
          "pistas": [
            "Con else if solo se revisa la siguiente rama si la anterior no se cumplió.",
            "Si probaras primero con 65, una persona de 10 años también entraría ahí.",
            "Ve de la condición más pequeña a la más grande y deja el else para el resto."
          ],
          "exito": "En una cadena else if, el orden de las preguntas cambia el resultado."
        },
        {
          "tipo": "completar",
          "enunciado": "Completa las ramas internas para que la variable mayor guarde el mayor de los tres números.",
          "plantilla": "let mayor;\nif (a > b) {\n  if (a > c) {\n    mayor = a;\n  } else {\n    mayor = ___;\n  }\n} else {\n  if (___ > c) {\n    mayor = b;\n  } else {\n    mayor = c;\n  }\n}",
          "respuesta": [
            "c",
            "b"
          ],
          "opciones": [
            [
              "c",
              "a",
              "b"
            ],
            [
              "b",
              "a",
              "c"
            ]
          ],
          "pistas": [
            "Si a es mayor que b pero no mayor que c, el mayor de todos es el que queda.",
            "En el else de fuera se cumple que b es mayor o igual que a, así que solo hay que comparar la otra variable.",
            "Cada rama interna completa la comparación que falta entre el candidato y el que aún no se ha mirado."
          ],
          "exito": "Anidar sirve para decidir por partes cuando hay tres candidatos."
        },
        {
          "tipo": "predecir",
          "enunciado": "¿Qué imprime este programa?",
          "codigo": "let usuario = \"admin\";\nlet activo = false;\nlet acceso;\nif (usuario === \"admin\") {\n  if (activo) {\n    acceso = \"total\";\n  } else {\n    acceso = \"revisar\";\n  }\n} else {\n  acceso = \"denegado\";\n}\nconsole.log(acceso);",
          "aceptadas": [
            "revisar"
          ],
          "pistas": [
            "Atraviesa primero la puerta de fuera: el usuario sí es admin.",
            "Dentro, la segunda puerta pregunta si la cuenta está activa, y vale false.",
            "El valor de acceso sale de la rama interna del else, no de la de fuera."
          ],
          "exito": "Primero la condición general; después, la excepción dentro de ella."
        }
      ]
    },
    {
      "id": "niveles-20",
      "semana": null,
      "tipo": "especial",
      "concepto": "lógica de programación en 20 niveles",
      "titulo": "Lógica en 20 niveles: del primer dato a la recursión",
      "explicacion": "Veinte niveles para ir de cero a pensar como un programa: variables, decisiones, bucles, funciones, listas, algoritmos y recursión. Cada nivel añade una pieza nueva sobre lo aprendido en el anterior, y puedes usar las pistas siempre que te atasques. No hace falta instalar nada: se juega aquí mismo.",
      "retos": [
        {
          "tipo": "completar",
          "enunciado": "Nivel 1 · Crea la variable puntos y guárdale el valor 10.",
          "plantilla": "___ puntos = 10;",
          "respuesta": [
            "let"
          ],
          "opciones": [
            [
              "let",
              "print",
              "for"
            ]
          ],
          "pistas": [
            "Para crear una variable que después puede cambiar se usa una palabra clave de tres letras.",
            "print no existe en JavaScript, y for es para repetir cosas, no para guardar un valor."
          ],
          "exito": "Una variable es una caja con nombre: ahí queda el 10."
        },
        {
          "tipo": "predecir",
          "enunciado": "Nivel 2 · ¿Qué imprime este programa?",
          "codigo": "let monedas = 5;\nmonedas = monedas + 3;\nconsole.log(monedas);",
          "aceptadas": [
            "8"
          ],
          "pistas": [
            "La segunda línea no crea otra variable: cambia el valor de la misma caja.",
            "Guarda 5 y luego súmale 3 sobre ese mismo valor."
          ],
          "exito": "Asignar otra vez reemplaza el contenido de la caja."
        },
        {
          "tipo": "orden",
          "enunciado": "Nivel 3 · Ordena el condicional que decide si una persona puede pasar según su edad.",
          "bloques": [
            "let mensaje;",
            "if (edad >= 18) {",
            "  mensaje = \"puede pasar\";",
            "} else {",
            "  mensaje = \"no puede pasar\";",
            "}"
          ],
          "pistas": [
            "Primero hace falta la caja donde guardar el resultado.",
            "El if abre la pregunta y el else recoge el caso contrario.",
            "Cierra la llave del else al final: cada bloque abierto necesita su cierre."
          ],
          "exito": "Con if y else el programa elige un camino, nunca los dos."
        },
        {
          "tipo": "predecir",
          "enunciado": "Nivel 4 · ¿Qué imprime este programa?",
          "codigo": "let nota = 7;\nlet resultado;\nif (nota >= 9) {\n  resultado = \"alta\";\n} else if (nota >= 5) {\n  resultado = \"media\";\n} else {\n  resultado = \"baja\";\n}\nconsole.log(resultado);",
          "aceptadas": [
            "media"
          ],
          "pistas": [
            "Con else if las condiciones se revisan en orden y la primera que se cumple gana.",
            "7 no llega a 9, pero sí llega a 5."
          ],
          "exito": "La cadena else if para en la primera condición verdadera."
        },
        {
          "tipo": "completar",
          "enunciado": "Nivel 5 · Completa el bucle para que sume los números del 1 al 5 y muestre el total.",
          "plantilla": "let total = 0;\nfor (let i = 1; i ___ 5; i++) {\n  total = total ___ i;\n}\nconsole.log(total);",
          "respuesta": [
            "<=",
            "+"
          ],
          "opciones": [
            [
              "<=",
              "<",
              ">"
            ],
            [
              "+",
              "-",
              "*"
            ]
          ],
          "pistas": [
            "El 5 tiene que entrar en la suma, así que la condición debe permitir llegar hasta él.",
            "En cada vuelta el total crece: hay que acumular el valor, no restarlo."
          ],
          "exito": "El bucle repite el mismo paso y el acumulador guarda lo hecho."
        },
        {
          "tipo": "predecir",
          "enunciado": "Nivel 6 · ¿Qué imprime este programa?",
          "codigo": "let total = 0;\nfor (let i = 1; i <= 4; i++) {\n  total = total + i * 2;\n}\nconsole.log(total);",
          "aceptadas": [
            "20"
          ],
          "pistas": [
            "En cada vuelta primero se multiplica y después se suma al total.",
            "Los valores que se suman son 2, 4, 6 y 8."
          ],
          "exito": "Dentro del bucle puedes calcular cosas nuevas antes de acumular."
        },
        {
          "tipo": "orden",
          "enunciado": "Nivel 7 · Ordena la función y su uso: definir, devolver y llamar.",
          "bloques": [
            "function saludar(nombre) {",
            "  return \"Hola \" + nombre;",
            "  }",
            "let mensaje = saludar(\"Ada\");",
            "console.log(mensaje);"
          ],
          "pistas": [
            "Una función se define antes de poder usarla.",
            "El return pertenece al cuerpo de la función, antes de la llave que lo cierra.",
            "Después de definirla, se llama y se guarda su resultado para mostrarlo."
          ],
          "exito": "Definir una vez y llamar muchas: eso es una función."
        },
        {
          "tipo": "predecir",
          "enunciado": "Nivel 8 · ¿Qué imprime este programa?",
          "codigo": "function doble(numero) {\n  return numero * 2;\n}\nlet resultado = doble(6) + doble(2);\nconsole.log(resultado);",
          "aceptadas": [
            "16"
          ],
          "pistas": [
            "Cada llamada devuelve un valor que ocupa el lugar de la llamada.",
            "doble(6) vale 12 y doble(2) vale 4; después solo queda sumarlos."
          ],
          "exito": "El valor devuelto se puede usar como cualquier otro número."
        },
        {
          "tipo": "completar",
          "enunciado": "Nivel 9 · Completa el acceso a la lista: primera fruta y cuántas hay.",
          "plantilla": "let frutas = [\"pera\", \"uva\", \"kiwi\"];\nconsole.log(frutas[___]);\nconsole.log(frutas.___);",
          "respuesta": [
            "0",
            "length"
          ],
          "opciones": [
            [
              "0",
              "1",
              "3"
            ],
            [
              "length",
              "size",
              "count"
            ]
          ],
          "pistas": [
            "Las posiciones de una lista se cuentan desde cero, no desde uno.",
            "Para saber cuántos elementos hay en JavaScript se usa una propiedad con nombre inglés."
          ],
          "exito": "Índice para un elemento, length para el total."
        },
        {
          "tipo": "predecir",
          "enunciado": "Nivel 10 · ¿Qué imprime este programa?",
          "codigo": "let numeros = [2, 4, 6];\nlet suma = 0;\nfor (let i = 0; i < numeros.length; i++) {\n  suma += numeros[i];\n}\nconsole.log(suma);",
          "aceptadas": [
            "12"
          ],
          "pistas": [
            "El bucle pasa por las tres posiciones de la lista, de la 0 a la 2.",
            "suma += numeros[i] es lo mismo que suma = suma + numeros[i]."
          ],
          "exito": "Recorrer una lista es la base de casi todos los algoritmos."
        },
        {
          "tipo": "orden",
          "enunciado": "Nivel 11 · Ordena el algoritmo que encuentra el número mayor de la lista.",
          "bloques": [
            "let mayor = numeros[0];",
            "for (let i = 1; i < numeros.length; i++) {",
            "  if (numeros[i] > mayor) mayor = numeros[i];",
            "}",
            "console.log(mayor);"
          ],
          "pistas": [
            "Se empieza suponiendo que el primero ya es el mayor.",
            "Después se compara con los demás, sin repetir el que ya tomamos como referencia.",
            "Solo se reemplaza el candidato cuando aparece uno estrictamente mayor."
          ],
          "exito": "Comparar y quedarse con el mejor: así se busca un máximo."
        },
        {
          "tipo": "predecir",
          "enunciado": "Nivel 12 · ¿Qué imprime este programa?",
          "codigo": "function suma(n) {\n  if (n === 1) {\n    return 1;\n  }\n  return n + suma(n - 1);\n}\nconsole.log(suma(4));",
          "aceptadas": [
            "10"
          ],
          "pistas": [
            "El caso base responde cuando ya no queda nada que sumar.",
            "suma(4) se apoya en suma(3), esta en suma(2) y esta en suma(1).",
            "Al volver se suman en cadena: 1, luego 2 + 1, luego 3 + 3, luego 4 + 6."
          ],
          "exito": "La recursión resuelve un caso pequeño y confía en sí misma para el resto."
        },
        {
          "tipo": "completar",
          "enunciado": "Nivel 13 · Completa el caso base y el valor de arranque del factorial.",
          "plantilla": "function factorial(n) {\n  if (n ___ 1) {\n    return ___;\n  }\n  return n * factorial(n - 1);\n}",
          "respuesta": [
            "===",
            "1"
          ],
          "opciones": [
            [
              "===",
              "=",
              ">"
            ],
            [
              "1",
              "0",
              "n"
            ]
          ],
          "pistas": [
            "Comparar en JavaScript son tres signos iguales; uno solo asigna.",
            "El factorial de 1 es 1: multiplicar por 0 lo estropearía todo."
          ],
          "exito": "Sin caso base correcto la recursión nunca termina."
        },
        {
          "tipo": "predecir",
          "enunciado": "Nivel 14 · ¿Qué imprime este programa?",
          "codigo": "let numeros = [4, 2, 3];\nfor (let i = 0; i < numeros.length - 1; i++) {\n  if (numeros[i] > numeros[i + 1]) {\n    let aux = numeros[i];\n    numeros[i] = numeros[i + 1];\n    numeros[i + 1] = aux;\n  }\n}\nconsole.log(numeros.join(\"-\"));",
          "aceptadas": [
            "2-3-4"
          ],
          "pistas": [
            "En cada vuelta se comparan dos vecinos y, si están desordenados, se intercambian.",
            "El bucle para una posición antes del final porque siempre mira el siguiente.",
            "Tras la primera vuelta el 4 se va a la derecha; después el 3. Escribe la lista final unida con guiones."
          ],
          "exito": "Intercambiar vecinos desordenados termina ordenando la lista."
        },
        {
          "tipo": "completar",
          "enunciado": "Nivel 15 · Completa la búsqueda binaria: mirar el centro y descartar media lista.",
          "plantilla": "let inicio = 0;\nlet fin = lista.length - 1;\nwhile (inicio <= fin) {\n  let medio = Math.floor((inicio + fin) / ___);\n  if (lista[medio] === buscado) return medio;\n  if (lista[medio] ___ buscado) inicio = medio + 1;\n  else fin = medio - 1;\n}",
          "respuesta": [
            "2",
            "<"
          ],
          "opciones": [
            [
              "2",
              "3",
              "4"
            ],
            [
              "<",
              ">",
              "==="
            ]
          ],
          "pistas": [
            "El centro está a mitad de camino entre inicio y fin.",
            "Si el valor del centro es menor que el buscado, la respuesta tiene que estar a la derecha."
          ],
          "exito": "Cada comparación elimina la mitad: por eso es tan rápida."
        },
        {
          "tipo": "predecir",
          "enunciado": "Nivel 16 · ¿Qué imprime este programa?",
          "codigo": "let cantidad = \"4\";\nlet total = cantidad * 2;\nconsole.log(typeof total + \" \" + total);",
          "aceptadas": [
            "number 8"
          ],
          "pistas": [
            "Con * JavaScript convierte el texto en número antes de multiplicar.",
            "typeof devuelve el tipo en inglés y en minúsculas.",
            "La consola muestra una palabra y un número separados por un espacio."
          ],
          "exito": "No todos los datos son iguales: el tipo manda."
        },
        {
          "tipo": "orden",
          "enunciado": "Nivel 17 · Ordena las ramas del coste de envío según el peso, de la más restrictiva a la más general.",
          "bloques": [
            "if (peso <= 1) { costo = 5; }",
            "else if (peso <= 5) { costo = 10; }",
            "else if (peso <= 20) { costo = 18; }",
            "else { costo = 30; }"
          ],
          "pistas": [
            "Con else if solo se revisa lo siguiente si lo anterior no se cumplió.",
            "Si empezaras por 20, un paquete de medio kilo pagaría de más.",
            "Deja el else para los paquetes que superan todos los límites."
          ],
          "exito": "En condicionales anidados, el orden cambia el resultado."
        },
        {
          "tipo": "predecir",
          "enunciado": "Nivel 18 · ¿Qué imprime este programa?",
          "codigo": "let total = 0;\nfor (let i = 1; i <= 3; i++) {\n  for (let j = 1; j <= 2; j++) {\n    total++;\n  }\n}\nconsole.log(total);",
          "aceptadas": [
            "6"
          ],
          "pistas": [
            "El bucle de dentro se ejecuta entero por cada vuelta del de fuera.",
            "El de fuera da 3 vueltas y el de dentro 2 en cada una.",
            "total++ suma uno cada vez que se entra en el bucle interno."
          ],
          "exito": "Bucles dentro de bucles: se multiplican las repeticiones."
        },
        {
          "tipo": "completar",
          "enunciado": "Nivel 19 · Completa la función que cuenta cuántas personas de la lista son mayores de edad.",
          "plantilla": "let personas = [{ nombre: \"Ada\", edad: 36 }, { nombre: \"Linus\", edad: 17 }];\nfunction mayores(lista) {\n  let cuenta = 0;\n  for (let i = 0; i < lista.length; i++) {\n    if (lista[i].___ >= 18) {\n      cuenta++;\n    }\n  }\n  return ___;\n}\nconsole.log(mayores(personas));",
          "respuesta": [
            "edad",
            "cuenta"
          ],
          "opciones": [
            [
              "edad",
              "nombre",
              "lista"
            ],
            [
              "cuenta",
              "i",
              "18"
            ]
          ],
          "pistas": [
            "Cada elemento de la lista es un objeto con varias propiedades: hay que elegir la que guarda los años.",
            "La función debe devolver el contador que fue creciendo, no el índice del bucle."
          ],
          "exito": "Listas de objetos: recorrer, leer una propiedad y contar."
        },
        {
          "tipo": "predecir",
          "enunciado": "Nivel 20 · Último nivel: ¿qué imprime este programa?",
          "codigo": "function fib(n) {\n  if (n <= 1) {\n    return n;\n  }\n  return fib(n - 1) + fib(n - 2);\n}\nconsole.log(fib(6));",
          "aceptadas": [
            "8"
          ],
          "pistas": [
            "El caso base corta cuando n vale 0 o 1, y devuelve ese mismo número.",
            "Cada llamada se parte en dos llamadas más pequeñas, y las sumas al volver.",
            "La serie empieza 0, 1, 1, 2, 3, 5, 8: cuenta hasta la sexta posición contando desde 0."
          ],
          "exito": "Recursión doble: dos llamadas dentro de una misma función."
        }
      ]
    }
  ]
};
