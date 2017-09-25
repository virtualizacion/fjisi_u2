# completeSentence
Plugin jquery para crear test´s de completado de frases.

# Inicio Rápido

Instancia del plugin.
```JavaScript
$("#pluginExample").completeSentence({
      classColContSentence: "col-xs-12",
      classColSentence: "col-xs-8",
      classColWords: "col-xs-4",
      "sentences": [
        {
          "sentence":"1. Esta es la primera frase @input crazy.",
          "words": [
            {
              "val": "mega",
              "correct": "true"
            },
            {
              "val": "doit",
              "correct": "false"
            },
            {
              "val": "sweet",
              "correct": "false"
            }
          ],
          correct: function(){
            alert("Correcto para 1.!")
          },
          error: function(){
            alert("Incorrecto para 1.!")
          }
        },
        {
          "sentence":"2.Esta es la segunda frase @input bowser.",
          "words": [
            {
              "val": "bad",
              "correct": "false"
            },
            {
              "val": "robot",
              "correct": "true"
            },
            {
              "val": "metal",
              "correct": "false"
            }
          ],
          correct: function(){
            alert("Correcto para 2.!")
          },
          error: function(){
            alert("Incorrecto para 2.!")
          }
        },
        {
          "sentence":"3.Darth Vader usa la @input para el mal.",
          "words": [
            {
              "val": "desgracia",
              "correct": "false"
            },
            {
              "val": "maldad",
              "correct": "false"
            },
            {
              "val": "fuerza",
              "correct": "true"
            }
          ],
          correct: function(){
            alert("Correcto para 3.!")
          },
          error: function(){
            alert("Incorrecto para 3.!")
          }
        }

      ],
      start: function(){
        console.log("Comienzo desde consola!")
      }
});
```
# Opciones por defecto
Estas son las opciones disponibles para este plugin, las clases col son del [bootstrap grid system](https://getbootstrap.com/docs/3.3/css/#grid).
```JavaScript
classColContSentence: "col-xs-12",//clase columna para contenedores de frases
classColSentence: "col-xs-8",//clase columna para la frase a completar
classColWords: "col-xs-4",//clase columna para las palabras a seleccionar
"sentences": [], //array de oraciones
```
# Callbacks
Definición de los callbacks por defecto, se usan en cada uno de los eventos indicados: 
```JavaScript
//Al inicio del plugin
start: function(){
  console.log("Comienzo!")
}
//Al completar la frase correctamente
correct: function(){
  alert("Correcto!, ha completado el test.")
},
//Al completar la frase de forma incorrecta
error: function(attempts){
  alert("Hay que revisarlo, hay elementos mal ubicados.")
}
```
