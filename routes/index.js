const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {livro_encontrado: null, error: null});
});

module.exports = router;