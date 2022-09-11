const url = "https://jsonplaceholder.typicode.com/users/";

const personsDiv = document.getElementById("persons");

const getRandomUser = async () => {
  document.getElementById("persons").innerHTML = `<p>Loading...</p>`;

  try {
    const response = await fetch(url);

    // fake delay for indicator to show
    await new Promise((resolve) => setTimeout(resolve, 800));

    const persons = await response.json();
    const randomPerson = persons[Math.floor(Math.random() * persons.length)];

    const { id, name, phone, email } = randomPerson;

    document.getElementById("persons").innerHTML = `
    <div>
      Name: <a href="../html/details.html?id=${id}">${name}</a>
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

const getUsers = async () => {
  document.getElementById("persons").innerHTML = `<p>Loading...</p>`;

  try {
    const response = await fetch(url);

    // fake delay for indicator to show
    await new Promise((resolve) => setTimeout(resolve, 800));

    const persons = await response.json();

    
    persons.forEach((person, index) => {
      if (index < 3) {
        const { id, name, phone, email } = person;

        document.getElementById("persons").innerHTML += `
      <div>
        Name: <a href="../html/details.html?id=${id}">${name}</a>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p><br>
      </div>
      `;
      }
    });
  } catch (error) {
    console.log(error);
    document.getElementById(
      "persons"
    ).innerHTML = `<p>Something went wrong</p>`;
  }
};



