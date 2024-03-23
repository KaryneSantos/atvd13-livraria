const db = require('./bd');

class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  cadastrarLivro() {
    return db.execute('INSERT INTO livros (titulo, autor, ano) VALUES (?, ?, ?)', [this.titulo, this.autor, this.ano]);
  }

  static getAll() {
    return db.execute('SELECT * FROM livros');
  }

}

module.exports = Livro;
