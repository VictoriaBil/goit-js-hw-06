const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const newForm = new FormData(event.currentTarget);
  console.log(newForm);
  newForm.forEach((name, value) => {
    console.log(value);
    console.log(name);
  });
}
//   const formElements = event.currentTarget.elements;
//   const mail = formElements.email.value;
//   const password = formElements.password.value;
//   console.log(mail, password);
//   const formData = {
//     mail,
//     password,
//   };
//   console.log(formData);
