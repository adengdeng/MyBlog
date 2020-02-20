let sendButton = document.querySelector('button');

function send() {
	var mydate = new Date();
	let name = document.querySelector('#nameValue').value;
	let phone = document.querySelector('#phoneValue').value;
	let demand = document.querySelector('#demandValue').value;

	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbyLPqsK6lueHYQHC0A0YjSEu_OBVnygdVSLe9yBFXBeyX6u8smI/exec",
		data: {
			"name": name,
			"phone": phone,
			"demand": demand,
			"Date":mydate
		},
		success: function(response) {
			if(response == "000"){
			alert("簽到成功");
			}
		},
		error: function(data) {
			alert('簽到失敗'); 
		}
		});
};

sendButton.addEventListener('click', send);


var loadingTimeout = window.setTimeout(function() {
  alert('網路不穩定，請稍後再試');
}, 10000); // 10000ms = 10sec

