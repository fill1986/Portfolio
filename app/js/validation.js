 var validation =(function(){

	// inilize module
	var init = function(){
		_setUpListners();
	};


	var _setUpListners=function(){
		$('form').on('keydown','.addError', _delError);
		$('form').on('reset', _reset);
		$('#filename').on('change', _change);
		$('#fileupload').on('change', _change);
	

	};

	var _change = function (){
    	console.log('Удаление тултипа');

    	$('#filename')
			.trigger('hideTooltip');

    }
    

	var _delError=function(){
		$(this).removeClass("addError");
	};
 
	var _reset = function(form){
		var form= $ (this);
		form.find('input, textarea').trigger('hideTooltip');
		form.find('.addError').removeClass("addError");

	} 

	var _qTip = function(element, position){
		if (position==='right'){
			position = {
				my: 'left center',
				at:'right center'
			}
		} else {
			position = {
				my: 'right center',
				at:'left center',
				adjust:{
					method:'shift none'
				}
			}
		}
    

	

	//inilize qtip
	element.qtip({
		content:{
			text: function(){
				return $ (this).attr('qtip-content');
			}
		},
		show:{
			event:'show'
		},
		hide: {
			event: 'keydown hideTooltip',
			// event:'change',
			// event:'click',
			// event:'unload'
						
		},
		position:position,
		style: {
			classes:'qtip-mystyle qtip-rounded',
			tip:{
				height:10,
				width:16
			}
		}

	}).trigger('show');

};
	var validationForm = function (form){
		console.log('Модуль валидации');
		var element = form.find('input, textarea').not('input[type="submit"], input[type="reset"], input[type="file"], input[type="hidden"]'),
			valid=true;
	
		$.each(element, function (index, val){
			console.log(val);
			var element = $(val),
				val=element.val(),
				pos = element.attr('qtip-position');

				if (val.length===0){
					element.addClass('addError');
					_qTip(element, pos);
					valid=false;
				}

		});

		return valid;

	};
		return {
		init:init,
		validationForm:validationForm
	};

}) ();

validation.init();