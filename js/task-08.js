const form = document.querySelector("form");
form.addEventListener("submit", onFormSabmit);

function onFormSabmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === "" || password === "") {
    return alert(`Enter all fields`);
  }

  console.log(`mail: ${mail}, password: ${password}`);
  event.currentTarget.reset();
}
