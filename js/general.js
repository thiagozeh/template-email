function completeFields(){
	$('.form li input, .form li textarea').focusout(function(){
		if($(this).val() != ''){
			var value = $(this).val();
			var id = $(this).attr('id');

			$('.template #'+id+'').text(value);
		}
	});
	$('.form li select').change(function(){
		if($(this).val() != '' && $(this).val() != 'Selecione a cidade'){
			var value = $(this).val();
			var id = $(this).attr('id');

			$('.template #'+id+'').text(value);
		}
	});
}
function saveToImage(){
	window.scrollTo(0,0);
	setTimeout(function(){
		html2canvas($("#template"), {
			allowTaint: true,
			onrendered: function(canvas) {
				$('body').addClass('to-download');
				$('.download').show();
				$('.image-to-download').prepend(canvas);
			}
		});		
	},500);
}
function saveToImageVacancy(){
	window.scrollTo(0,0);
	$('.template.novas-vagas').scrollLeft(200);
	setTimeout(function(){
		html2canvas($("#template > div"), {
			allowTaint: true,
			width: 1000,
			height: 1000
		}).then(function(canvas) {
				$('body').addClass('to-download');
				$('.download').show();
				$('.image-to-download').prepend(canvas);
		});		
	},500);
}

function readURL(input, id) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#'+id+'').attr('src', e.target.result)
		};

		reader.readAsDataURL(input.files[0]);
		$('#'+id+'').show();
	}
}

function applyColor(input){
	var color = input.value;
	$('.template.novas-vagas .bg').css('background-color',color);
}

function readURL_background(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#template > div').css({'background' : 'url("'+e.target.result+'") no-repeat center center' , 'background-size' : 'cover'});
		};

		reader.readAsDataURL(input.files[0]);
	}
}

function hideText(){
	if($('#only_image').is(':checked') == true){
		$('.texto').hide();
	}else{
		$('.texto').show();
	}

}

function addVacancy(){
	var count = $('li.vagas > div').length + 1;
	if(count < 6){
		$('li.vagas').append('<div id="input'+count+'"><input type="text" id="vaga'+count+'" class="vaga-input" placeholder="Digite o nome referente à vaga" onchange="completeFields();"/><a href"javascript:void(0);" onclick="removeVacancy(this,'+count+');" class="delete" title="Remover Vaga">x</a></div>');
		$('.item-novas-vagas ul').append('<li><span id="vaga'+count+'" class="title-vaga">{Nome da Vaga}</span></li>')
	}else{
		$('#vacancy').attr('disabled','disabled');
	}
}

function removeVacancy(element, count){
	$(element).parent('div').remove();
	$('li span#vaga'+count+'').parent().remove();
	if(count < 6){
		$('#vacancy').removeAttr('disabled');
	}
}

$(document).ready(function(){
	completeFields();
	if($('input#color-box').length != 0){

		applyColor(this);
	}
});

var titleGenteNova = $('.title');
var equipeGenteNova = $('.equipe');
var itemGenteNova = $('input.nomeInput');

itemGenteNova.keyup(function() {
	if($(this).val().length >= 13) {
		titleGenteNova.addClass('title-small');
		equipeGenteNova.addClass('equipe-small');
	}else if($(this).val().length < 13){
		titleGenteNova.removeClass('title-small');
		equipeGenteNova.removeClass('equipe-small');
	}
})

itemGenteNova.focusout(function() {
	if($(this).val().length >= 13) {
		titleGenteNova.addClass('title-small');
		equipeGenteNova.addClass('equipe-small');
	}else if($(this).val().length < 13){
		titleGenteNova.removeClass('title-small');
		equipeGenteNova.removeClass('equipe-small');
	}
})

var titleGenteNovaChapa = $('.title');
var itemGenteNovaChapa = $('input.chapaInput');

itemGenteNovaChapa.keyup(function() {
	if($(this).val().length >= 11) {
		titleGenteNovaChapa.addClass('title-small');
	}else if($(this).val().length < 11){
		titleGenteNovaChapa.removeClass('title-small');
	}
})

itemGenteNovaChapa.focusout(function() {
	if($(this).val().length >= 11) {
		titleGenteNovaChapa.addClass('title-small');
	}else if($(this).val().length < 11){
		titleGenteNovaChapa.removeClass('title-small');
	}
})



