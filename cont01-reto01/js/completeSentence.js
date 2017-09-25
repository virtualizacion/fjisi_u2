(function ( $ ) {

	$.fn.completeSentence = function(options) {
		/*This are the defaults*/
		var settings = $.extend({
			classColContSentence: "col-xs-12",
	    	classColSentence: "col-xs-8",
	    	classColWords: "col-xs-4",
			"sentences": [],
			start: function(){
				console.log("Comienzo!")
			}
		}, options);

		//------------------------------------------------------------
		//definiciones globales
		//------------------------------------------------------------		
		var $self = $(this);
		var self = this;		
		//------------------------------------------------------------
		
		this.renderSentences = function(){

			var it = $.each(settings.sentences, function(index, val) {
				
				console.log(val)
				
				$self.append(self.getSentence(index,val.sentence));

				self.renderWords(index, val.words);				
			});

			$.when(it).then(function(){
				//definir los eventos click para los elementos			
				settings.start();

				$(".sentence_word").click(function(){ 
					self.validateSentence($(this));													
				})/**/
			});
		}

		this.validateSentence = function($word){

			$("#"+$word.data('id-stc')).val($word.text())

			console.log($word.data('correct'))

			//console.log(objtSent)

			if ($word.data('correct')) {
				
				//ejecuta callback de objtSent
				settings.sentences[$word.data("id-objt")].correct();

				$("#"+$word.data('id-stc')).addClass('sentenceCorrect');

			} else {
				//ejecuta callback de objtSent
				settings.sentences[$word.data("id-objt")].error();

				$("#"+$word.data('id-stc')).addClass('sentenceIncorrect');
			}

			$("."+$word.data('id-stc')).unbind('click');
		}

		this.getSentence = function(id, sentence){
			return '<div class="contSentence '+settings.classColContSentence+'">'+
						self.renderSent(id, sentence)
				   '</div>';
		}

		this.renderSent = function(id, sentence){
			return '<div class="sentence '+settings.classColSentence+'">'+
			       		'<p class="sentence_p">'+self.replaceInput(id, sentence)+'</p>'+
			       '</div>'+
			       '<div class="'+settings.classColWords+' stc'+id+'words"></div>';
		}

		this.replaceInput = function(id, string){
			return string.replace("@input", '<input disabled="true" type="text" id="stc'+id+'" class="stc'+id+' text-input">');
		}

		this.renderWords = function(idSentence, arrWords){
			
			//console.log(idSentence);			
			$.each(arrWords, function(index, val) {
				//console.log(val);
				$('.stc'+idSentence+'words').append(self.getWord(idSentence, val.correct, val.val));
			});
		}

		this.getWord = function(idSentence, correct, word){
			return '<p class="sentence_word stc'+idSentence+'" data-correct="'+correct+'" data-id-objt="'+idSentence+'" data-id-stc="stc'+idSentence+'">'+word+'</p>';
		}
		//------------------------------------------------------------
		//start
		this.renderSentences();
		//------------------------------------------------------------
	};

}( jQuery ));