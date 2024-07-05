// Show Sign Up form and hide Sign In form
document.getElementById('showSignUp').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('signInFormContainer').style.display = 'none';
  document.getElementById('signUpFormContainer').style.display = 'block';
  document.getElementById('forgotPasswordFormContainer').style.display = 'none';
});

// Show Sign In form and hide Sign Up form
document.getElementById('showSignIn').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('signInFormContainer').style.display = 'block';
  document.getElementById('signUpFormContainer').style.display = 'none';
  document.getElementById('forgotPasswordFormContainer').style.display = 'none';
});

// Show Forgot Password form and hide Sign In form
document.getElementById('showForgotPassword').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('signInFormContainer').style.display = 'none';
  document.getElementById('signUpFormContainer').style.display = 'none';
  document.getElementById('forgotPasswordFormContainer').style.display = 'block';
});

// Show Sign In form and hide Forgot Password form
document.getElementById('backToSignIn').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('signInFormContainer').style.display = 'block';
  document.getElementById('signUpFormContainer').style.display = 'none';
  document.getElementById('forgotPasswordFormContainer').style.display = 'none';
});

// Handle Sign In form submission
document.getElementById('signInForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;
  console.log('Sign In - Email:', email, 'Password:', password);
  // Implement your sign-in logic here
});

// Handle Sign Up form submission
document.getElementById('signUpForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('signUpName').value;
  const username = document.getElementById('signUpUsername').value;
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;
  const confirmPassword = document.getElementById('signUpConfirmPassword').value;
  const grade = document.getElementById('signUpGrade').value;
  const country = document.getElementById('signUpCountry').value;
  const city = document.getElementById('signUpCity').value;
  const reason = document.getElementById('signUpReason').value;
  console.log('Sign Up - Name:', name, 'Username:', username, 'Email:', email, 'Password:', password, 'Confirm Password:', confirmPassword, 'Grade:', grade, 'Country:', country, 'City:', city, 'Reason:', reason);
  // Implement your sign-up logic here
});

// Handle Forgot Password form submission
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('forgotPasswordEmail').value;
  console.log('Forgot Password - Email:', email);
  // Implement your forgot password logic here
});
