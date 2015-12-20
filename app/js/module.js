var myModule =(function(){

	// inilize module
	var init = function(){
		_setUpListners();
	};


	//Lisen Event
	var _setUpListners=function(){
	
		$('#addProject').on('click',_showPopup);//open window
		$('#addNewProject').on('submit',_addProject);//add Project
	};


	var _showPopup=function(ev){
			console.log ('вызов окна');
			ev.preventDefault();
			var wrapPopup = $('.popup'),
				form=wrapPopup.find('.form');

			wrapPopup.bPopup({
			onClose:function(){
			form.find('.messeg').text('').hide();
			form.trigger('reset')
			}
		});
	};


	//add project
	 var _addProject=function(ev){
		 	console.log('Добавоение проекта');
		 	ev.preventDefault();

		 // Obyvlayem peremeny		
		 	var form =$(this),
		 			url='project.php', 
		 			Answer = _ajaxForm(form,url); 


		 			// console.log(data);

		 		if (Answer){
		 					Answer.done(function(ans){
					var errorBox=form.find('.errorMsg'),
						sucsessBox=form.find('.sucsessMsg');

					if (ans.status==='OK') {
						errorBox.hide();
						console.log (ans.text);
						form.find('.sucsessMsg').text(ans.text).show();
					}else {
						sucsessBox.hide();
						form.find('.errorMsg').text(ans.text).show();
						}		
		 			});

				}

	 	};

	  // give data from form, chek, made request andand return answ 
	var _ajaxForm=function(form,url){

 		if(!validation.validationForm(form)) return false;

		data=form.serialize();

			var result = $.ajax({
		 		url:url,
		 		type:'POST',
		 		dataType:'json',
		 		data: data,
		 	})
		 		.fail(function (ans){
		 			console.log('error PHP');
		 			form.find('.errorMsg').text('error PHP').show();
		 		});

		 	return result;

	}

	return {
		init:init
	};

}) ();

myModule.init();




function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel");
    console.log(filename);
    uploaded.innerHTML = filename;
}
