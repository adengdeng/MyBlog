let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  let phone = document.querySelector('#phoneValue').value;
  let demand = document.querySelector('#demandValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyLPqsK6lueHYQHC0A0YjSEu_OBVnygdVSLe9yBFXBeyX6u8smI/exec",
    data: {
        "name": name,
        "phone": phone,
        "demand": demand
    },
    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });
};

sendButton.addEventListener('click', send);
