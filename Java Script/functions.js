var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
  x.style.left = "4px";
  y.style.right = "-520px";
  a.className += " white-btn";
  b.className = "btn";
  x.style.opacity = 1;
  y.style.opacity = 0;
}

function register() {
  x.style.left = "-510px";
  y.style.right = "5px";
  a.className = "btn";
  b.className += " white-btn";
  x.style.opacity = 0;
  y.style.opacity = 1;
}
function redirectToIndex() {
  window.location.href = "index.html";
}

function show(formId) {
  const forms = document.querySelectorAll('.shirts');
  forms.forEach(form => form.classList.remove('now'));
  const selectedForm = document.getElementById(formId);
  selectedForm.classList.add('now');
  const selectedForm2 = document.getElementById(formId);
  selectedForm2.classList.add('now');
  const selectedForm3 = document.getElementById(formId);
  selectedForm3.classList.add('now');
}


function login_verify() {
  var enteredUsername = document.getElementById('mail').value;
  var enteredPassword = document.getElementById('password').value;
  var errorMessageContainer = document.getElementById('error-message');

  if (enteredUsername === "7amod@lol.haha" && enteredPassword === "123") {
    alert("Login successful!");
    window.location.href = 'index.html';
  }
  else {
    errorMessageContainer.textContent = "Invalid username or password";
    return false;
  }
}
function zoomIn(image) {
  image.classList.toggle('zoomable-image');
}
function changeColor(element, newColor) {
  element.style.color = newColor;
}
function zoomIn_text(element) {
  element.style.fontSize = "29px";
}
function zoomOut_text(element) {
  element.style.fontSize = "25px";
}
function ShowP() {
  var form = document.querySelector('form');
  if (form.checkValidity()) {
    var paragraph = document.getElementById('hiddenParagraph');
    paragraph.style.display = 'block';
    return false;
  }
  return true;
}
function slideBorderColor() {
  var container = document.getElementById('imageContainer');
  var currentColor = window.getComputedStyle(container).borderColor;
  var targetColor = currentColor === 'rgb(139, 69, 19)' ? 'rgb(255, 165, 0)' : 'rgb(139, 69, 19)';
  container.style.borderColor = targetColor;
}
setInterval(slideBorderColor, 800);

function changeContent() {
  var element = document.getElementById("my-para");
  element.innerHTML = "Noooooo";
}
function displaycontent() {
  var element = document.getElementById("my-para");
  element.innerHTML = "Buy now";
}
function deliver_Text() {
  var element = document.getElementById("my-para");
  element.innerHTML = "Yes";
}

function scrollToPolicy() {
  var height = document.body.scrollTop;
  window.scroll(200, height);
}