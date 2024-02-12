document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("regForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements["name"].value;
    const gender = form.querySelector(`input[name="gender"]:checked`).value;
    //const gender = form.elements["gender"].value;
    // const interest = Array.from(form.elements["interests"])
    // const interest = Array.form(
    //   form.querySelectorAll('input[name="interests"]:checked')
    // ).map((checkbox) => checkbox.value);
    const interest = Array.from(
      form.querySelectorAll('input[name="interests"]:checked')
    ).map((checkbox) => checkbox.value);
    const country = form.elements["country"].value;
    resultDiv.innerHTML = ` <p>Name: ${name}</p>
    <p>Gender: ${gender}</p>
    <p>Interest: ${interest.join(" ,")}</p>
    <p>Country:${country}</p>`;
  });
});
