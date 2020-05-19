let body = document.body;

fetch('https://api.github.com/users/Zhenyapechenya')
    .then(res => res.json())
    .then(json => {
        console.log(json.avatar_url);
        console.log(json.name);
        console.log(json.bio);
        console.log(json.html_url);
        
        let photo = new Image(); 
        photo.src = json.avatar_url;
        body.append(photo);
        
        let name = document.createElement('p');
        name.innerHTML = json.nme;
        body.append(name);

        let bio = document.createElement('p');
        bio.classList.add('link');
        bio.innerHTML = json.bio;
        body.append(bio);
        bio.addEventListener("click", () => window.location = json.html_url);

            if (json.avatar_url == null) {
                photo.innerHTML = 'Информация о пользователе не доступна';
            }

            if (json.name === null) {
                name.innerHTML = 'Информация о пользователе не доступна';
            }
    })
    .catch(err => alert(err));