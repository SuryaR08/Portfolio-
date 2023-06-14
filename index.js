function sendMail(){
	var templateParams = {
		name: document.getElementById("floatingInput").value,
		email: document.getElementById("floatingEmail").value,
		phone: document.getElementById("floatingPassword").value,
		message: document.getElementById("floatingMessage").value,
	};

	const serviceID = "service_eo7woic";
	const templateID = "template_2q8m0k2";

	emailjs.send(serviceID,templateID,templateParams)
	.then(function(response){
			document.getElementById("floatingInput").value = "";
			document.getElementById("floatingEmail").value = "";
			document.getElementById("floatingMessage").value = "";
			console.log('success!',response.status, response.text);
		}, function(error) {
			console.log('Failed...',error);
		});

}
