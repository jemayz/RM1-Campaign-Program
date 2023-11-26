
//HTML form validation
function validateForm() {
  var name = document.getElementById('name').value;
  var staffNo = document.getElementById('staffNo').value;
  var contactNo = document.getElementById('contactNo').value;
  var amount = document.getElementById('amount').value;
  var mail = document.getElementById('mail').value;

  if (name === '' || staffNo === ''|| contactNo === ''|| amount === '' || mail === ''){
    alert('Please fill in all required fields.');
  } else {  
    alert('Form submitted successfully!');
  }
  }