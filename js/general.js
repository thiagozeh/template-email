function completeFields(){
	$('.form li input, .form li textarea, .form li select').focusout(function(){
		if($(this).val() != ''){
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

function readURL(input, id) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#'+id+'')
	  		.attr('src', e.target.result)
		};

		reader.readAsDataURL(input.files[0]);
		$('#'+id+'').show();
	}
}

function hideText(){
	if($('#only_image').is(':checked') == true){
		$('.texto').hide();
	}else{
		$('.texto').show();
	}

}

$(document).ready(function(){
	completeFields();
});

var titleGenteNova = $('.title');
var itemGenteNova = $('input.nomeInput');

itemGenteNova.keyup(function() {
	if($(this).val().length >= 13) {
		titleGenteNova.addClass('title-small');
		titleGenteNova.addClass('equipe-small');
	}
})

itemGenteNova.focusout(function() {
	if($(this).val().length >= 13) {
		titleGenteNova.addClass('title-small');
		titleGenteNova.addClass('equipe-small');
	} 
})

var titleGenteNovaChapa = $('.title');
var itemGenteNovaChapa = $('input.chapaInput');

itemGenteNovaChapa.keyup(function() {
	if($(this).val().length >= 11) {
		titleGenteNovaChapa.addClass('title-small');
	}
})

itemGenteNovaChapa.focusout(function() {
	if($(this).val().length >= 13) {
		titleGenteNovaChapa.addClass('title-small');
	} 
})



