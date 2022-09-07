const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Input error message

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

// Show Success
const showSuccess = input => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Check Email

const isValidEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Check required fields

const checkRequired = inputArr => {
  inputArr.forEach((input, i) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    }
  });
};

// Check input checkLength

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(`${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
};

// Get field name
const getFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Event listeners
form.addEventListener("submit", function(e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
});
