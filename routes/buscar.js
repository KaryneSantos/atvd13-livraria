const express = require('express');
const router = express.Router();
const bd_livros = require('../models/bd.js');


router.get('/', (req, res) => {
    const titulo = req.query.titulo;
    const campo_pesquisa = req.query['campo-pesquisa'];
    let ano;

    console.log("Campo de pesquisa: ", campo_pesquisa);
    console.log("Titulo do livro: ", titulo);

    if (campo_pesquisa === undefined) {
        res.render('index', { livro_encontrado: null, error: 'Tipo de pesquisa inválido, Tente novamente!' });
    }

    if (campo_pesquisa === 'titulo') {

        if (titulo === '') {
            res.render('index', { livro_encontrado: null, error: 'Bloco vazio! digite um bloco de livro válido' });
        }

        // PARTE DE CONSULTA COM ERRO
        bd_livros.consultar('SELECT * FROM livros WHERE titulo = ?', [titulo], (err, resultados) => {
            if (err) {
                console.error('Erro ao buscar livros:', err);
                res.render('index', { livro_encontrado: null, error: 'Erro ao buscar livros.' });
                return;
            }
    
            if (resultados.length > 0) {
                res.render('index', { livro_encontrado: resultados, error: null });
            } else {
                res.render('index', { livro_encontrado: null, error: 'Nenhum livro encontrado.' });
            }
        });
    } else if (campo_pesquisa === 'ano') {
        ano = req.query.ano;

        if (ano === '') {
            res.render('index', { livro_encontrado: null, error: 'Bloco vazio! digite um bloco de livro válido' });
        }

        bd_livros.consultar(`SELECT * FROM livros WHERE ano = ${ano}`, (err, resultados) => {
            if (err) {
                console.error('Erro ao buscar livros:', err);
                res.render('index', { livro_encontrado: null, error: 'Erro ao buscar livros.' });
                return;
            }

            if (resultados.length > 0) {
                res.render('index', { livro_encontrado: resultados, error: null });
            } else {
                res.render('index', { livro_encontrado: null, error: 'Livro não encontrado.' });
            }
        });
    }
});

module.exports = router;
