function loginLogout(){
    var button = document.getElementById("login-button");
    if(button.innerHTML === "login"){
        button.innerText = "logout";
    }else{
        button.innerText ="login";
    }
    console.log("estoy haciendo el login/logout")
}

function removeButton(elemento){
    elemento.closest('.definition').remove();
    console.log("estoy removiendo el boton!!!")
}

function darLike(button){
    let likesElement = button.parentElement.querySelector('.card-like');
    let likes = parseInt(likesElement.innerText.split(' ')[0]); //aqui extraigo el numero para pasarlo a entero
    likes++;
    likesElement.innerText = likes + ' Likes';
    alert("A ninja le gusto tu publicación")
}