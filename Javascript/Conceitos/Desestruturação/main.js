const usuario = {
    nome: 'Diogo',
    idade: 63,
    endereco: {
        Rua: 'Rua Fulano',
        Bairro: 'Ciclano'
    }
}

const {nome,idade, endereco: {cidade}} = usuario;

function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario);