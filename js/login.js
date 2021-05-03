function validate() {
    var usuarioEmail = document.getElementById("exampleInputEmail1").value;
    var senhaUsuario = document.getElementById("exampleInputPassword1").value;


    alert(usuarioEmail);
    alert(senhaUsuario);


    // if (usuarioEmail == "candida@gmail.com" && senhaUsuario == "candida") {
    //     alert("Login successfully");
    //     return false;
    // }

    var aviso = false;

    let url = 'https://api.sheety.co/ba58f38a4b43831bfc69ed7f48706ecd/signupForm/emails';
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer bnVsbDpudWxs`,
        },
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.emails);
            //console.log(json.emails[1].name);

            for (var i = 0; i < json.emails.length; i++) {
                //console.log(json.emails[i].name);

                if (json.emails[i].email.includes(usuarioEmail) && json.emails[i].senha.includes(senhaUsuario)) {
                    alert("foi");
                    aviso = true;
                }
            }

            if (aviso == true) {
                window.location.href = "http://www.youtube.com.br";
            } else {
                alert("E-mail ou senha incorretos, ou usuário inexistente! Por favor tente novamente");
            }

        });
}