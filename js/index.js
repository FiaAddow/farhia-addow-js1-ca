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

    document.getElementById("persons").innerHTML = "";

    persons.map((person, index) => {
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

const dropdown = document.querySelectorAll('dropdown');

dropdown.forEach(dropdown => {
  const select = dropdown.queryselector('.select');
  const caret = dropdown.queryselector('.caret');
  const menu = dropdown.queryselector('.menu');
  const options = dropdown.queryselector('.menu li');
  const selected = dropdown.queryselector('.selected');
  
  select.addEventListener('click', () => {

  select.classList.toggle('select-clicked');
  caret.classList.toggle('caret-rotate');
  menu.classList.toggle('menu-open');
 
});

options.forEach(options => {
  Option.addEventListener('click', () => {
    selected.innertext = option.innertext;
    select.classList.remove('select-clicked');
    caret.classList.remove('caret-rotate');
    menu.classList.remove('menu-open');

  options.forEach(option => {
    option.classList.remove('active');
    });

    option.classList.add('active');
  });
});
});

