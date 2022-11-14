const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // const newForm = new FormData(event.currentTarget);
  // console.log(newForm);
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  if (email && password !== "") {
    const formData = { email, password };
    console.log(formData);
    form.reset();
  } else {
    window.alert("Заповніть всі поля");
  }

  // if (email.length === 0 || password.length === 0) {
  //   alert("Заповніть всі поля");
  //   return;
  // }

  // newForm.forEach((name, value) => {
  //   console.log(value);
  //   console.log(name);
  // });
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
