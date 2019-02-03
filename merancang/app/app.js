update_persen = function(){
	sudah_selesai = $('.cek-oke').length
	semua = $('.cek').length
	if (semua > 0){
		persen_selesai = Math.round(sudah_selesai / semua * 100)	
	} else {
		persen_selesai = 0
	}
	$('.progress-bar').attr('aria-valuenow', persen_selesai).css('width', persen_selesai + '%')
	$('.alert-success').html(persen_selesai + '% Complete')
}

$('.navbar-nav li a').click(function(){
	$('.navbar-toggle').click()
})

$('#myModal').modal()
$('.buka-modal').click(function(){
	$('#myModal').modal()
})

$('.count').click(function(){

	// ----------------------------------------------------------------
	// eksperimen
	// ----------------------------------------------------------------

	hasil_bagi = $('.total-pages').val() / $('.target-finish').val()
	$('title').html(hasil_bagi)
})

$(document).on('click', '.cek', function(){
	$(this).toggleClass('btn-default').toggleClass('btn-success').toggleClass('cek-oke')
	$(this).parent().parent().find('.isi').toggleClass('selesai')
	update_persen()
})