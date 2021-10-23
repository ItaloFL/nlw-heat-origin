
  const linksSocialMidia = {
    github: "ItaloFL",
    youtube: "maykbrito",
    instagram: "italo.ferreira.5220",
    facebook: "italo.ferreira.5220",
    twitter: "maykbrito"
  }

  function changeNameSocialMidia(){ 
    for(let li of socialLinks.children) {
      const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`

    }
  }

  changeNameSocialMidia()


  function getGitHubInfos() {
    const url = `https://api.github.com/users/${linksSocialMidia.github}`

    fetch(url)// ele pega algo na url
    .then(response => response.json())// transformamos esse algo json 
    .then(data => {
      userName.textContent = data.name
      Bio.textContent = data.bio
      userLogin.textContent = data.login
      userPhoto.src = data.avatar_url
      userLink.href = data.html_url
    })
  }

  getGitHubInfos()


