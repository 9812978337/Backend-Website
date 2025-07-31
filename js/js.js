// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {//if screen is less then 50 then it run 
   document.getElementById("header").style.fontSize = "15px";//header font is 15px
  } else {
    document.getElementById("header").style.fontSize = "20px";// header font is 20px
  }
}
function isValidEmail(email) {
  // this is for email validation
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function subscribe() {
  var emailInput = document.getElementById('email-box').value;

  if (emailInput.trim() !== "" && isValidEmail(emailInput)) {
      // this is for email display colorful modal
      document.getElementById('successModal').style.display = 'block';
  } else {
      alert("Please enter a valid email address.");
  }
}

function closeModal() {
  // Hide the modal
  document.getElementById('successModal').style.display = 'none';
}
//js for pop up checkout form  in solo product page
//when buy now is clicked
document.addEventListener('DOMContentLoaded', function () {
  const openCheckoutBtn = document.getElementById('openCheckout');
  const closeCheckoutBtn = document.getElementById('closeCheckout');
  const overlay = document.getElementById('overlay');
  const checkoutForm = document.getElementById('checkoutForm');

  openCheckoutBtn.addEventListener('click', function () {
      overlay.style.display = 'flex';
  });

  closeCheckoutBtn.addEventListener('click', function () {
      overlay.style.display = 'none';
  });

  checkoutForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Handle form submission here
      alert('Purchase successful');
      overlay.style.display = 'none';
  });
});
//when add to cart is clicked
function showPopup() {
alert('Added to cart successfully')}


function isValidEmail(email) {
  // this is for email validation
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function subscribe() {
  var emailInput = document.getElementById('email-box').value;

  if (emailInput.trim() !== "" && isValidEmail(emailInput)) {
      // this is for email display colorful modal
      document.getElementById('successModal').style.display = 'block';
  } else {
      alert("Please enter a valid email address.");
  }
}

function closeModal() {
  // Hide the modal
  document.getElementById('successModal').style.display = 'none';
}
