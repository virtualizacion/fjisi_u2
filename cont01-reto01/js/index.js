$(function(){

	//------------------------------------------------------------------------------------
    $("#completeSentence").completeSentence({
    	classColContSentence: "col-xs-12",
    	classColSentence: "col-xs-8",
    	classColWords: "col-xs-4",
		"sentences": [
			{
				"sentence":"1. Dentro del campo de la investigación existe una diversidad de @input para ayudar al investigador a lograr estudiar el problema que se ha planteado.",
				"words": [
					{
						"val": "métodos",
						"correct": "true"
					},
					{
						"val": "pistas",
						"correct": "false"
					},
					{
						"val": "información",
						"correct": "false"
					}
				],
				correct: function(){
					//crt1
					$("#crt1").trigger('click');
				},
				error: function(){
					$("#incrt").trigger('click');
				}
			},
			{
				"sentence":"2. Dentro del campo de la investigación existe una diversidad de @input para ayudar al investigador a lograr estudiar el problema que se ha planteado.",
				"words": [
					{
						"val": "cualitativa",
						"correct": "false"
					},
					{
						"val": "cuantitativa",
						"correct": "true"
					},
					{
						"val": "experimental",
						"correct": "false"
					}
				],
				correct: function(){
					//crt1
					$("#crt2").trigger('click');
				},
				error: function(){
					$("#incrt").trigger('click');
				}
			},
			{
				"sentence":"3. Según el principio de @input, la investigación es un proceso continuo que intenta abordar un evento cualquiera, como evento en sí y, a su vez, como evidencia de la totalidad.",
				"words": [
					{
						"val": "integridad",
						"correct": "false"
					},
					{
						"val": "evolución",
						"correct": "false"
					},
					{
						"val": "continuidad",
						"correct": "true"
					}
				],
				correct: function(){
					//crt1
					$("#crt3").trigger('click');
				},
				error: function(){
					$("#incrt").trigger('click');
				}
			}

		]
	});
    //------------------------------------------------------------------------------------

    console.log("Hola desde complete sentence.")
})