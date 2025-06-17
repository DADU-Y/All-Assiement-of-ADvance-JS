
let profileDiv = document.getElementById("profile");

let getUser = () => {
  let userName = document.getElementById("username").value.trim();

  fetch(`https://api.github.com/users/${userName}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      profileDiv.innerHTML = `
        <img src="${data.avatar_url}"/>
        <h3>${data.name}</h3>
        <p>@${data.login}</p>
      `;
    })
    .catch((error) => {
      console.log(error);
    });
};