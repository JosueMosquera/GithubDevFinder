// challenge de front end mentor buscador de perfiles con la api de github
//javascript leer el valor del input y referenciarlo a la api
//pintar los valores en el html segun el valor buscado

const inputSearch = document.querySelector(".input-search");
const obtenerDataApiGithub = async (user) => {
  const query = await fetch(`https://api.github.com/users/${user}`);
  const resp = await query.json();
  pintarCard(resp);
};
const readInput = (input) => {
  input.addEventListener("change", (e) => obtenerDataApiGithub(e.target.value));
};
readInput(inputSearch);
const pintarCard = (data) => {
  const avatar = document.querySelector(".avatar");
  if (!data.avatar_url) {
    avatar.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1555861496-0666c8981751?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    );
  } else {
    avatar.setAttribute("src", data.avatar_url);
  }
  const userTitle = document.querySelector(".user-title");
  if (!data.name) {
    userTitle.textContent = "This user dont have name";
  } else {
    userTitle.textContent = data.name;
  }
  const userNickname = document.querySelector(".user-nickname");
  if (!data.login) {
    userNickname.textContent = "404 this user no exists";
  } else {
    userNickname.textContent = `@${data.login}`;
  }
  const joinedDate = document.querySelector(".joined-date");
  const parsedDate = new Date(data.created_at).toLocaleDateString();
  joinedDate.textContent = `joined ${parsedDate}`;
  const bio = document.querySelector(".bio");
  if (!data.bio) {
    bio.textContent = "Not Bio";
  } else {
    bio.textContent = data.bio;
  }
  const repos = document.querySelector(".repos-span");
  repos.textContent = data.public_repos;
  const followers = document.querySelector(".followers-span");
  followers.textContent = data.followers;
  const following = document.querySelector(".following-span");
  following.textContent = data.following;
  const location = document.querySelector(".location-text");
  if (!data.location) {
    location.textContent = "Not avaliable";
  } else {
    location.textContent = data.location;
  }
  const link = document.querySelector(".link-github");
  link.textContent = data.html_url;
  link.setAttribute("href", data.html_url);
  const socialMedia = document.querySelector(".social-span");
  if (!data.twitter_username) {
    socialMedia.textContent = "Not avaliable";
  } else {
    socialMedia.textContent = data.twitter_username;
  }
  const company = document.querySelector(".github-span");
  if (!data.company) {
    company.textContent = "Nothing";
  } else {
    company.textContent = data.company;
  }
};
const changeTheme = () => {
  const switcherLigth = document.querySelector("#icon-theme");
  const body = document.querySelector('body')
  const themeTitle = document.querySelector('h5')
  const searchNav = document.querySelector('.search')
  const card = document.querySelector('.card-container')
  const linkGithub = document.querySelector('.link-github')
  const nickName = document.querySelector('.user-nickname')
  const joinedDate = document.querySelector('.joined-date')
  const stats = document.querySelector('.stats')
  const repos =document.querySelector('.repos-text')
  const followers=document.querySelector('.followers-text')
  const following=document.querySelector('.following-text')
  switcherLigth.addEventListener("click", (e) => {
        if(switcherLigth.className==='fas fa-sun'){
            switcherLigth.className='fas fa-moon'
            themeTitle.textContent='DARK'
            body.style.backgroundColor='rgb(221, 231, 233)'
            themeTitle.style.color='rgb(3, 115, 189)';
            switcherLigth.style.color='rgb(3, 115, 189)'
            body.style.color='black'
            searchNav.style.backgroundColor='white'
            card.style.backgroundColor='white'
            linkGithub.style.color='black'
            nickName.style.color='rgb(41, 155, 231)'
            searchNav.style.color='black'
            joinedDate.style.color='rgb(104, 104, 104)'
            stats.style.backgroundColor='rgb(221, 231, 233)'
            repos.style.color='rgb(104, 104, 104)'
            followers.style.color='rgb(104, 104, 104)'
            following.style.color='rgb(104, 104, 104)'
        }
        else{
            switcherLigth.className='fas fa-sun'
            themeTitle.textContent='LIGHT'
            body.style.backgroundColor='rgb(15, 8, 63)'
            themeTitle.style.color='white'
            switcherLigth.style.color='white'
            body.style.color='white'
            searchNav.style.backgroundColor='rgb(12, 52, 85)'
            card.style.backgroundColor='rgb(12, 52, 85)'
            linkGithub.style.color='white'
            nickName.style.color='rgb(41, 100, 228)'
            searchNav.style.color='white'
            joinedDate.style.color='azure'
            stats.style.backgroundColor='rgb(15, 8, 63)'
            repos.style.color='rgb(200, 199, 199)'
            followers.style.color='rgb(200, 199, 199)'
            following.style.color='rgb(200, 199, 199)'
        }
  });
  /* const switcherDark = document.querySelector('#moon')
    switcherDark.addEventListener('click',()=>{
        switcherDark.className='fas fa-sun'
    }) */
};
changeTheme();
