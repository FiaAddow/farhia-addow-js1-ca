const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

const url = `https://jsonplaceholder.typicode.com/users/${id}`;

const personsDiv = document.getElementById("persons");

const getUser = async () => {
  document.getElementById("persons").innerHTML = `<p>Loading...</p>`;

  try {
    const response = await fetch(url);

    // fake delay for indicator to show
    await new Promise((resolve) => setTimeout(resolve, 400));

    const person = await response.json();

    const { name, phone, email } = person;

    document.getElementById("persons").innerHTML = `
    <div>
      <p>Name: ${name}</p>
      <p>Phone: ${phone}</p>
      <p>Email: ${email}</p>
    </div>
    `;
  } catch (error) {
    console.log(error);
    document.getElementById(
      "persons"
    ).innerHTML = `<p>Something went wrong</p>`;
  }
};

getUser();
