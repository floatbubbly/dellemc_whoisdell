$(document).ready(function(){
	
    /*$("#txtCity").change(function(){

    	$("#txtCity").twzipcode('get', function (county, district, zipcode) {
	    console.log(county);
	    console.log(district);
	    console.log(zipcode);
	});
    });*/
    $('#twzipcode').twzipcode();

    $("#QuesForm").on("submit",function(){
        
        $.ajax({
            type:"POST",
            url:"send_form.php",
            data:$("#QuesForm").serialize(),
            dataType:"json",
            success:function(ret){
                alert(ret.msg);
                if(ret.status){
                	window.history.go(0);
                }
            },
            error:function(xhr){
            	console.log(xhr.responseText);
            	alert("送出失敗請稍候再試");
            }

        });

        return false;

    });
	
});

function QuesSection(section){
    
    $(".FAQSection").css("display","none");
	switch(section){
		case "1":
		    $("#Ques_1").css("display","block");
		break;
		case "2":
		    $("#Ques_2").css("display","block");
		break;
		case "3":
		    $("#Ques_3").css("display","block");
		break;
		case "4":
		    $("#FillForm").css("display","block");
		break;

	}

}
