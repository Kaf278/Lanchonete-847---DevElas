DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL UNIQUE,
	image TEXT NOT NULL
);

INSERT INTO categories (name, image) VALUES ('Lanches', 'lanches_capa.JPG');
INSERT INTO categories (name, image) VALUES ('Acompanhamentos', 'acompanhamentos_capa.JPG');
INSERT INTO categories (name, image) VALUES ('Bebidas', 'bebidas_capa.JPG');
INSERT INTO categories (name, image) VALUES ('Sobremesas', 'sobremesas_capa.JPG');

DROP TABLE IF EXISTS products;

CREATE TABLE products (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL UNIQUE,
    image TEXT NOT NULL,
	price REAL NOT NULL,
	categoryId INTEGER NOT NULL,
	description TEXT NOT NULL
);

INSERT INTO products (name, image, price, categoryId, description) 
VALUES ('Lanche Whitney Houston', 'lanche01.jpg', "R$39.90", 1, 'Pão brioche + 3 smash burgers de 80g + Queijo cheddar + Cebola caramelizada + Alface roxa + Tomate + Molho da casa');

INSERT INTO products (name, image, price, categoryId, description) 
VALUES ('Lanche Michael Jackson', 'lanche02.jpg', "R$35.90", 1, 'Pão de hambúrguer preto + 3 smash burgers suíno de 80g + Queijo cheddar + Cebola caramelizada + Alface roxa + Tomate + Picles + Molho da casa');

INSERT INTO products (name, image, price, categoryId, description) 
VALUES ('Lanche Madonna', 'lanche03.jpg', "R$39.90", 1, 'Pão de hambúrguer vegano + 1 burger plant based de 150g + Queijo cheddar vegano + Alface roxa + Tomate + Picles + Molho da casa vegano');

INSERT INTO products (name, image, price, categoryId, description) 
VALUES ('Kit de Molhos', 'acompanhamento01.jpg', "R$17.90", 2, 'Molho da casa, molho da casa vegano e molho adocicado');

INSERT INTO products (name, image, price, categoryId, description) 
VALUES ('Croquete de Cupim', 'acompanhamento02.jpg', "R$22.90", 2, 'Porção de croquete de cupim com molho barbecue na cama de cebola caramelizada');

INSERT INTO products (name, image, price, categoryId, description) 
VALUES ('Fritas da casa', 'acompanhamento03.jpg', "R$22.90", 2, 'Batata doce frita trufada com molho adocicado');

INSERT INTO products (name, image, price, categoryId, description) 
VALUES ('Suco Caetano Veloso', 'bebida01.jpg', "R$14.90", 3, 'Suco verde de couve, maçã, abacaxi, gengibre e linhaça');

INSERT INTO products (name, image, price, categoryId, description) 
VALUES ('Suco Gilberto Gil', 'bebida02.jpg', "R$16.90", 3, 'Suco de goiaba, sorvete de creme e chia');

INSERT INTO products (name, image, price, categoryId, description) 
VALUES ('Suco Nando Reis', 'bebida03.jpg', "R$12.90", 3, 'Suco de laranja com maracujá');

INSERT INTO products (name, image, price, categoryId, description) 
VALUES ('Cupcake de Banoffee', 'sobremesa01.jpg', "R$18.90", 4, 'Massa de babana com recheio de doce de leite e finalizado com chantilly e banana caramelizada');

INSERT INTO products (name, image, price, categoryId, description) 
VALUES ('Cupcake Prestígio', 'sobremesa02.jpg', "RS18.90", 4, 'Massa de chocolate com creme de côco, ganache de chocolate e finalizado com framboesa');

INSERT INTO products (name, image, price, categoryId, description) 
VALUES ('Cupcake Vegano', 'sobremesa03.jpg', "RS18.90", 4, 'Massa de baunilha com cobertura de buttercream vegano de pistache, finalizado com moangos, uva e raspas de chocolate vegano');

SELECT * FROM categories;
SELECT * FROM products;

-- DELETE FROM products WHERE id = 24;