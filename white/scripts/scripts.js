$(document).ready(function() {

	$('input[name=fio_form_1]').placeholder();
	$('input[name=phone_form_1]').placeholder();
	$("input[name=phone_form_1]").mask("8 (999) 999-99-99", {placeholder: "  "});

	$('input[name=fio_popup]').placeholder();
	$('input[name=phone_popup]').placeholder();
	$("input[name=phone_popup]").mask("8 (999) 999-99-99", {placeholder: "  "});

	var someDate = new Date();
	someDate.setDate(someDate.getDate() + 1);

	var getdata = $.post('date.php', {todo: "read", date: someDate})
	.then(function(data){
		CountDownTimer(data, 'countdown');
	});


    function CountDownTimer(dt, id){
		
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                
				var someDate = new Date();
				someDate.setDate(someDate.getDate() + 1);

				var getdata = $.post('date.php', {todo: "write", date: someDate})
				.then(function(data){
					var someDate = new Date();
					someDate.setDate(someDate.getDate() + 1);
					CountDownTimer(someDate, 'countdown');
				});
                
				var someDate = new Date();
				someDate.setDate(someDate.getDate() + 30); // plus day
				

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);


			if (days < 10) days = "0" + days;
			if (seconds < 10) seconds = "0" + seconds;
			if (minutes < 10) minutes = "0" + minutes;
			if (hours < 10) hours = "0" + hours;
            
            $(".hours").html(hours);
            $(".minutes").html(minutes);
            $(".seconds").html(seconds);
            
        }

        timer = setInterval(showRemaining, 1000);
    }
    

	var formtype = "";

	$(".popup").click(function() {
		$(".popup_form_title").html($(this).attr ('ftitle'));
		formtype = $(this).attr ('formtype');
		formtype2 = $(this).attr ('formtype');
	});


	$(".popup").click(function(){
		$(".closer").show();
		$(".popup_form").show();
		$(".fixed").show();
	});
	
	$(".fixed").click(function(){
		$(".closer").hide();
		$(".popup_form").hide();
		$(".fixed").hide();

		$("input[name='fio_popup']").css ("border", "");
		$("input[name='phone_popup']").css ("border", "");
		$("input[name='fio_popup']").val("");
		$("input[name='phone_popup']").val("");
		$(".popup_form_sent").hide();
		$(".popup_form_button").show();

	});
	
	$(".closer").click(function(){
		$(".closer").hide();
		$(".popup_form").hide();
		$(".fixed").hide();
	});
	
	
	$(".popup_form_button").click(function() {
		var fio = $("input[name='fio_popup']").val();
		var phone = $("input[name='phone_popup']").val();
		
		var okay = 1;
		
		if (fio == "") {
			$("input[name='fio_popup']").css ("border", "1px solid #cc2e2e");
			okay = 0;
		}
			
		else { $("input[name='fio_popup']").css ("border", ""); }
		
		if (phone == "") {
			$("input[name='phone_popup']").css ("border", "1px solid #cc2e2e");
			okay = 0;
		}
		
		else { $("input[name='phone_popup']").css ("border", ""); }
												
		if (okay == 1){
			$(this).hide();
			$(".popup_form_button_process").show();
			$.post('mail.php', {fio: $("input[name='fio_popup']").val(), phone: $("input[name='phone_popup']").val(), formtype2: " всплывающая форма."}, function(data){
					$(".popup_form_sent").show();
			});
		}
	});


	// form 1
	$(".form_button_1").click(function() {
		var fio = $("input[name='fio_form_1']").val();
		var phone = $("input[name='phone_form_1']").val();
		
		var okay = 1;
		
		if (fio == ""){
			okay = 0;
			$("input[name='fio_form_1']").addClass ("wrong");
		}
			
		else {
			$("input[name='fio_form_1']").removeClass ("wrong");
		}
		
		if (phone == ""){
			okay = 0;
			$("input[name='phone_form_1']").addClass ("wrong");
		}
		
		else {
			$("input[name='phone_form_1']").removeClass ("wrong");
		}
		
		if (okay == 1){
			$(this).hide();
			$.post('mail.php', {fio: $("input[name='fio_form_1']").val(), phone: $("input[name='phone_form_1']").val(), formtype2: ' форма заявки.'}, function(data){
					$(".form_sent_1").show();
			});
		}
	});


});
