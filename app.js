// challenge de front end mentor buscador de perfiles con la api de github
//javascript leer el valor del input y referenciarlo a la api
//pintar los valores en el html segun el valor buscado

const inputSearch = document.querySelector('.input-search')
const obtenerDataApiGithub = async(user)=>{
    const query = await fetch(`https://api.github.com/users/${user}`)
    const resp = await query.json()
    pintarCard(resp)
}
const readInput = (input)=>{
    input.addEventListener('change',(e)=>obtenerDataApiGithub(e.target.value))
}
readInput(inputSearch)
const pintarCard = (data)=>{
    const avatar = document.querySelector('.avatar')
    avatar.setAttribute('src',data.avatar_url)
    const userTitle = document.querySelector('.user-title')
    userTitle.textContent=data.name
    const userNickname = document.querySelector('.user-nickname')
    userNickname.textContent=`@${data.login}`
    const joinedDate = document.querySelector('.joined-date')
    const parsedDate = new Date(data.created_at).toLocaleDateString()
    joinedDate.textContent=`joined ${parsedDate}`
    const bio = document.querySelector('.bio')
    if(!data.bio){
        bio.textContent = 'Not Bio'
    }
    else{
        bio.textContent=data.bio
    }
    const repos = document.querySelector('.repos-span')
    repos.textContent=data.public_repos
    const followers = document.querySelector('.followers-span')
    followers.textContent=data.followers
    const following = document.querySelector('.following-span')
    following.textContent=data.following
    const location = document.querySelector('.location-text')
    if(!data.location){
        location.textContent='Not avaliable'
    }
    else{
        location.textContent=data.location
    }
    const link = document.querySelector('.link-github')
    link.textContent=data.html_url
    link.setAttribute('href',data.html_url)
    const socialMedia = document.querySelector('.social-span')
    if(!data.twitter_username){
        socialMedia.textContent='Not avaliable'
    }
    else{
        socialMedia.textContent=data.twitter_username
    }
    const company = document.querySelector('.github-span')
    if(!data.company){
        company.textContent='Nothing'
    }
    else{
        company.textContent=data.company
    }
}