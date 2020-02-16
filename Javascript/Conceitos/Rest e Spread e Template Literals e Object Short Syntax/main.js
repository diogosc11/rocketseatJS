//REST

const usuario = {
    nome: 'Diogo',
    idade: 63,
    endereco: {
        Rua: 'Rua Fulano',
        Bairro: 'Ciclano'
    }
}

const {nome, ...rest} = usuario;

console.log(nome, rest);

const arr = [1,2,3,4];

const [a, b, ...c] = arr;

console.log(a, b, c);

// SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome: 'Diogo',
    idade: 87,
    empresa: 'VWP'
}

const usuario2 = {...usuario1, nome: 'Fulano'};

console.log(usuario1,usuario2);

// TEMPLATE LITERALS

const nome1 = 'Diogo';
const idade = 72;

console.log(`Meu nome é ${nome1} e tenho ${idade} anos`);

const nome2 = 'Diogo';
const idade2 = 54;

const usuario3 = {
    nome2,
    idade2,
    empresa: "VWP"
}

console.log(usuario3);