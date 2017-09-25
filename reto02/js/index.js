$(function(){

	dr.showInst();

    $("#dragDropTest").dragDropTest({
    	header: 'Antes de finalizar, pongamos a prueba nuevamente el conocimiento adquirido a través de un ejercicio práctico. Relacione cada uno de los conceptos con su correspondiente definción.',
    	contButtonValidate: 'Verificar',
    	genHeight: '75px',
    	classOffsetColGen: "col-xs-offset-1",
    	definitions: {
			1: "Consiste en dirigirse a un caso concreto, en el caso de la enfermería a un paciente. Las observaciones son directas documentándose en tiempo real, su análisis es en primera instancia inferencial.",
			2: "Utilizados por lo general, en la medicina, la psicología, la enfermería, entre otras disciplinas; una de sus características es la manipulación de la información, por lo que se auxilian de varios diseños de la estadística paramétrica.",
			3: "Consiste en la identificación y separación de los componentes de un todo, con el fin de estudiarlos por separado, para examinar las relaciones entre las partes, debido a que la particularidad es parte de la totalidad y viceversa.",
			4: "Leyes generales mediante las cuales pueden preverse ciertos acontecimientos o establecerse sus factores determinantes.",
			5: "Diseño en espiral, utilizando el método inductivo y permitiendo su ajuste durante la investigación. Interpretación de datos mediante la comprensión."
		},
		//se definen los drags a los drops
		drags: [
			{				
				content: "Diseño metodológico cualitativo",
				goesWith: 3 //para drop 1 drag numero 3
			},
			{				
				content: "Nomotético",
				goesWith: 5 //para drop 2 numero del drag numero 5
			},
			{			
				content: "Método de caso",
				goesWith: 4 //para drop 3 numero del drag numero 2
			},
			{				
				content: "Método analítico",
				goesWith: 2 //para drop 4 numero del drag numero 1
			},
			{
				content: "Método experimental y cuasi-experimental",
				goesWith: 1
			}
		],
		correct: function(){
			dr.showCorrect()
		},
		error: function(attempts){
			dr.showError()
		},
		fail: function(){
			dr.showFail()
		}
    });
})