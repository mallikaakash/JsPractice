window.onload = () => {
  getUser("mallikaakash");
};

const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  const response = await fetch(APIURL + username);
  const responseData = await response.json();
  console.log(responseData);
  createUserCard(responseData);
}

function createUserCard(user) {
  const cardHTML = `
        <div class="card">
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>

            <div id="repos"></div>
        </div>
    `;
  main.innerHTML = cardHTML;
}

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const user = search.value;

//   if (user) {
//     getUser(user);
//     search.value = "";
//   }
// });
