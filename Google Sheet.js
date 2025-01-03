const scriptURL =
  "https://script.google.com/macros/s/AKfycbyEwTsTNXfkmVveidfSWdtoXYTESS2YHnP3A9zPlnS5Mudj8pL66SspPt8V7tFt3TbiOQ/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
