CREATE TABLE livros (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    ano INT NOT NULL
);


INSERT INTO livros (titulo, autor, ano) VALUES
('Pequeno Principe', 'Antoine de Saint-Exupéry', 1943),
('Harry Potter', 'J.K Rowling', 1997),
('A Garota do Lago', 'Charlie Donlea', 2017),
('Vidas Secas', 'Graciliano Ramos', 1938),
('Pessoas Normais', 'Sally Ronney', 2018),
('Torto Arado', 'Itamar Vieira Junior', 2019),
('A voz da Sereia volta neste livro', 'Amanda Lovelace', 2019),
('É assim que acaba', 'Collen Hoover', 2018),
('Diario de Anne Frank', 'Anne Frank', 1942),
('Antes que o café esfrie', 'Toshikazu Kawaguchi', 2022);