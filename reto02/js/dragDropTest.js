(function ( $ ) {

	$.fn.dragDropTest = function(options) {

		var settings = $.extend({
			header: "Asocie cada elemento con la definición correspondiente.",
			genHeight:"30px",//alto general para todos los elementos
			classColDroppableConcept: "col-xs-2",
			classColDroppableDefinition: "col-xs-6",
			classColDraggable: "col-xs-2",
			classOffsetColGen: "col-md-offset-1",
			contButtonValidate: "Validar",
			attempts:2,
			definitions: {
				
			},
			drags: [
				
			],
			start: function(){
				console.log("Inicia el widget!")
			},
			correct: function(){
				alert("Correcto!, ha completado el test.")
			},
			error: function(attempts){
				alert("Hay que revisarlo, hay elementos mal ubicados.")
			},
			fail: function(){
				alert("Ha fallado en completar el test.")
			}
		}, options);

		//------------------------------------------------------------
		//funciones para crear la estructura html
		
		var self = $(this);
		var selfT = this;

		this.objt_validacion = {
			cont_attempts:0,
			cant_droppables: 0,
			corrects: 0		
		}

		this.validate = function(){
			

			if (selfT.objt_validacion.cant_droppables === selfT.objt_validacion.corrects) {
	    		//referir a function de settings
	    		selfT.disableButtonValidate();

	    		settings.correct();
	    	}else{
	    			    		
	    		//suma el intento
	    		selfT.objt_validacion.cont_attempts++;

	    		if (selfT.objt_validacion.cont_attempts === settings.attempts) {

			    	selfT.disableButtonValidate();

			    	settings.fail();		    	

				}else{

					selfT.resetDrags();

	    			settings.error(settings.attempts);
				}
	    			    		
	    	}	    	
	    	
	    }

	    this.disableButtonValidate = function(){
	    	$("#btn_validate_dragDropTest").attr('disabled', true);
	    }

		this.getHeaderTest = function() {
			return '<div class="">'+
						'<div class="col-xs-11 dragDropHeader">'+settings.header+'</div>'+
					'</div>';
		}

		this.getContentTest = function(numDef, contDef, contDrag) {
			return '<div class="">'+
					  '<div class="'+settings.classColDroppableConcept+' dragDroppable droppableConcept" id="concept'+numDef+'"></div>'+
					  '<div class="'+settings.classColDroppableDefinition+' dragDroppable droppableDefinition">'+contDef+'</div>'+
					  '<div class="'+settings.classColDraggable+' dragDroppable draggable" id="draggable'+numDef+'">'+contDrag+'</div>'+
					'</div>';
		}

		//funcion drop para todos+++++++++++++++++++++++++++++++++++++++++
	    this.dropCustom = function( event, ui ) {
			//alert("aceptado draggable2!")

			//get position donde se arrastra
			var offset = $(this).offset();

			//set
			$(ui.draggable).offset({ top: offset.top, left: offset.left});			

			//ejecuta funcion que valida si el elemento que 
			//hizo drop es el correcto
			$(this).droppable("validateDrop", ui)
		        
		}

		//funcion drop para todos+++++++++++++++++++++++++++++++++++++++++

		this.renderContentsTest = function(){

			var it = $.each(settings.definitions, function(index, val) {

				console.log(index)
					
				self.append(selfT.getContentTest(index, val, settings.drags[index-1].content))

				console.log("draggable"+settings.drags[index-1].goesWith)

				$("#concept"+index).droppable({      
			      goesWith: "draggable"+settings.drags[index-1].goesWith,   
			      drop: selfT.dropCustom,
			    });

			    selfT.objt_validacion.cant_droppables++;

			    //asignar el alto general para todos los elementos			    
			    $("#draggable"+index).css('height', settings.genHeight);			    
			});

			$.when(it).then(function(){
				$('.droppableConcept').css('height', settings.genHeight);
				$('.droppableDefinition').css('height', settings.genHeight);				
			});			
		}

		this.setPositionDrags = function(){

			$.each(settings.drags, function(index, val) {
				let ix = parseInt(index) + 1;
				console.log($("#draggable"+ix))

				settings.drags[index].initPosition = $("#draggable"+ix).offset();
			});
		}

		this.resetDrags = function(){

			selfT.objt_validacion.corrects = 0;

			$.each(settings.definitions, function(index, val) {
				$("#draggable"+index).offset({ top: settings.drags[index-1].initPosition.top, left: settings.drags[index-1].initPosition.left});
				$("#draggable"+index).removeClass('dragged');
			});
		}

		this.renderButtonValidate = function(){
			return '<div class="col-md-12 text-left">'+
						'<button id="btn_validate_dragDropTest" class="btn_validate_dragDrop">'+settings.contButtonValidate+'</button>'+
					'</div>';
		}
		
		//customizacion del widget droppable--------------------------------------------------------------------
		$.widget( "custom.droppable", $.ui.droppable, {
		    _create: function(){
		        
		        this._super();
		        //opciones seteadas en la instancia
		        //console.log(this.options);             
		    },        
		    validateDrop: function(ui){		    	

		    	if (!$(ui.draggable[0]).hasClass('dragged')) {

		        	this._invalidateDrop($(ui.draggable[0]))

		        	//console.log("Ejecuta la validación de elemento")        	
		        	
		        	//console.log(ui.draggable[0]["id"])
		        	
		        	//console.log(this.options.goesWith)

		        	var id_ui_element = ui.draggable[0]["id"];

		        	this._count(id_ui_element)

		    	}else{
		    		console.log("Este elemento ya no se puede validar!")
		    	}
		    	
		    },
		    _count: function(id_ui_element){

		    	var id_goes_with = this.options.goesWith;

		    	if (id_goes_with === id_ui_element) {
		    		selfT.objt_validacion.corrects++;
		    	}else{
		    		selfT.objt_validacion.corrects = selfT.objt_validacion.corrects != 0 ? selfT.objt_validacion.corrects-- : 0;
		    	}

		    	console.log(selfT.objt_validacion)
		    },
		    _invalidateDrop: function(elem){
		    	console.log(elem)       	

		    	if (!elem.hasClass('dragged')) {
		    		elem.addClass('dragged')
		    	}
		    }        
		});


		//------------------------------------------------------------
		//añade el header dentro del elemento indicado
		$(this).append(this.getHeaderTest());		

		//renderiza todos los elementos del test
		this.renderContentsTest();

		//definicion de los drags-------------------------------------
		//se reversa pero todos hacen drop
		$(".draggable").draggable({revert:'invalid'});
		//------------------------------------------------------------		

		$(this).append(this.renderButtonValidate())

		//definicion del metodo click de validacion
	    $("#btn_validate_dragDropTest").click(function(event) {
	    	selfT.validate()
	    });
		//------------------------------------------------------------
		//setea clase offset para centrar
		$(this).attr("class",settings.classOffsetColGen)

		//al final setea las posiciones de los drags para poderlos retornar
		setTimeout(function(){
			selfT.setPositionDrags()
			console.log("Toma las posiciones!")
		}, 100)
		
		//------------------------------------------------------------

		//------------------------------------------------------------
		//start
		settings.start();
		//------------------------------------------------------------
	};

}( jQuery ));