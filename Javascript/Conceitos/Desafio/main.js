const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   const idades = usuarios.map((item) =>{
       return item.idade
   })

   console.log(idades);

   const rocket = usuarios.filter((item) => {
        return  item.empresa === 'Rocketseat'
   })

   console.log(rocket);

   const google = usuarios.find((item) => {
       return item.empresa === 'Google'
   })

   console.log(google);

   const multIdade = usuarios.map((item) => {
        return item.idade * 2;
   })

   console.log(multIdade);

   const filtroIdade = multIdade.filter((item) => {
       return item < 50;
   })

   const find = usuarios.find((item) => {
        return item.idade === filtroIdade.map((item) => {
            return item;
        })
   })


   //REST SPREAD

   const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };

   const usuario2 =  {...usuario, nome: 'Gabriel'};
   const usuario3 =  {...usuario, endereco: {cidade: 'Lontras', uf: 'SC', pais: 'Brasil'}};

   console.log(usuario2);
   console.log(usuario3);

   const arr = [1, 2, 3, 4, 5, 6];

   const [x,...y] = arr;

   console.log(x);
   console.log(y);