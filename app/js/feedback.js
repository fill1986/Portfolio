 var feedback =(function(){

	// inilize module
	var init = function(){
		_setUpListners();
	};


	var _setUpListners=function(){
		$('#feedback').on('submit',_submitForm);//enter data
	};

	var _submitForm = function(ev){
		console.log('Отпрправка формы');
		ev.preventDefault();

		var form =$(this),
			url="feedback.php",
			defObj=_ajaxForm(form, url);

	};

 var _ajaxForm = function (form, url){
 	console.log('ajax запрос');
 	if(!validation.validationForm(form)) return false;



 };

		return {
		init:init,
		};

}) ();

feedback.init();