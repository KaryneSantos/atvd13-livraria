const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const port = 3000;

const bd_livros = [
    {
        ID: 1,
        titulo: 'Pequeno Principe',
        autor: 'Antoine de Saint-Exupéry',
        ano: 1943
    },
    {
        ID: 2,
        titulo: 'Harry Potter',
        autor: 'J.K Rowling',
        ano: 1997
    },
    {
        ID: 3,
        titulo: 'A Garota do Lago',
        autor: 'Charlie Donlea',
        ano: 2017
    },
    {
        ID: 4,
        titulo: 'Vidas Secas',
        autor: 'Graciliano Ramos',
        ano: 1938
    },
    {
        ID: 5,
        titulo: 'Pessoas Normais',
        autor: 'Sally Ronney',
        ano: 2018
    },
    {
        ID: 6,
        titulo: 'Torto Arado',
        autor: 'Itamar Vieira Junior',
        ano: 2019
    },
    {
        ID: 7,
        titulo: 'A voz da Sereia volta neste livro',
        autor: 'Amanda Lovelace',
        ano: 2019
    },
    {
        ID: 8,
        titulo: 'É assim que acaba',
        autor: 'Collen Hoover',
        ano: 2018
    },
    {
        ID: 9,
        titulo: 'Diario de Anne Frank',
        autor: 'Anne Frank',
        ano: 1942
    },
    {
        ID: 10  ,
        titulo: 'Antes que o café esfrie',
        autor: 'Toshikazu Kawaguchi',
        ano: 2022
    }
];


// Buscar por titulo e ano
app.get('/buscar', (req, res) => {
    const titulo = req.query.titulo;
    const campo_pesquisa = req.query['campo-pesquisa'];
    let ano;

    console.log("Campo de pesquisa: ", campo_pesquisa);
    console.log("Titulo do livro: ", titulo);

    if(campo_pesquisa === undefined){
        res.render('index', {livro_encontrado: null, error: 'Tipo de pesquisa inválido, Tente novamente!'});
    }

    if(campo_pesquisa === 'titulo'){
    
    if(titulo === ''){
            res.render('index', {livro_encontrado: null, error: 'Bloco vazio! digite um bloco de livro válido'});
    }

    const encontrar_livro = bd_livros.find(livro => livro.titulo.toLowerCase() === titulo.toLocaleLowerCase());

    if(encontrar_livro){
        res.render('index', {livro_encontrado: encontrar_livro, error: null});
    } else {
        res.render('index', {livro_encontrado: null, error: 'Livro não encontrado.'});
    }
} else if(campo_pesquisa === 'ano'){
    ano = req.query.ano;

    if(ano === '') {
        res.render('index', {livro_encontrado: null, error:'Bloco vazio! digite um bloco de livro válido' });
    }

    const encontrar_livro_por_ano = bd_livros.filter(livro => livro.ano === parseInt(ano));

    console.log(encontrar_livro_por_ano);

    if(encontrar_livro_por_ano.length > 0) {
        console.log('Encontrou livro: ', encontrar_livro_por_ano);
        res.render('index', {livro_encontrado: encontrar_livro_por_ano, error: null});
    } else {
        res.render('index', {livro_encontrado: null, error: 'Livro não encontrado.'});
    }
}
});


app.get('/', (req, res) => {
    res.render('index', {livro_encontrado: null, error: null});
});

app.listen(port);
console.log('Site iniciado...');