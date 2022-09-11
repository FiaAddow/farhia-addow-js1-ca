const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateForm = () => {
  const form = document.querySelector("#form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const subject = document.querySelector("#subject").value;
    const email = document.querySelector("#email").value;
    const address = document.querySelector("#address").value;

    if (!name) {
      alert("Please enter your name");
      return;
    }

    if (subject.length < 10) {
      alert("Subject must be at least 10 characters");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (address.length < 25) {
      alert("Address must be at least 25 characters");
      return;
    }

    const validationDiv = document.querySelector("#validation");
    validationDiv.innerHTML = `<p>Valiadation completed</p>`;

    alert("Thank you for your message!");
  });
};
