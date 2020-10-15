// p começar uma requisição AJAX, define-se uma variavel cria um novo HTTP request
// é a classe XMLHttpRequest é quem dá acesso à função do Ajax p recuperar informação do servidor
var xhr = new XMLHttpRequest();

//serão recuperados dados do perfil do github via API do github
xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null); //p envio de parametros geralmente o argumento do metodo send é null

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
}

