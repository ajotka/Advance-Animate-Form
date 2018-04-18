function validateForm() {

	//Check if inputs are empty
	$('input').each(function() {
        if(!$(this).val()){
            $(this).removeClass("valid").addClass("invalid");
        }
    });

	//Check english months
    var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    var validMonths = $('.form__input--month-text').val().toLowerCase();                         
    if (months.indexOf(validMonths) == -1){
        $('.form__input--month-text').removeClass("valid").addClass("invalid");
    }
    var year = $('#input--date-year').val();
    var month = months.indexOf( validMonths );
	var date = $('#input--date-day').val();

	//Check year
	if ( (1900 > year) || (year > 2017) ) {
		$('#input--date-year').removeClass("valid").addClass("invalid");
	}
	//Check full date
	var checkedDate = new Date(year, month, date);

	if (checkedDate.getDate() != date) {
	    $('#input--date-day').removeClass("valid").addClass("invalid");
	}

	return true;

}