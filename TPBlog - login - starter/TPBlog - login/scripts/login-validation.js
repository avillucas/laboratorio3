$.ajaxSetup({
    'beforeSend' : function(xhr) {
        xhr.overrideMimeType('application/json; charset=utf-8');
    },
});
login = function (e){
	var postData = {
		'pass' : $('#pass').val(),
		'name' : $('#name').val(),
	};
	console.log(postData);
	$.post('http://localhost:3000/login', postData,function( data ) {
		console.log(data);
		//enviar el ajax que te deje en admin 
		//al volver del tocken que devuelve guardarlo en local storage 
		// redireccionar a admin,html    
		window.localStorage.setItem('token', data.token);

	});
};

$

function validateuser(token)
{
 	var xhr = new XMLHttpRequest(); 
	xhr.open("POST", "http://localhost:3000/validate", true);
	xhr.onreadystatechange = function () {
		if(this.status == 4){
        	if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
	            window.location.replace('http://localhost:3000/admin.html');
        	}else{
        		alert('no tiene permisos suficientes');
        		window.location.replace('http://localhost:3000/admin.html');
        	}
    	}
	};
	xhr.setRequestHeader('autorization',token);
	xhr.send();
}
//
$( document ).ready(function() {
	//validar 
	$('#btnLogIn').click(login);


});
