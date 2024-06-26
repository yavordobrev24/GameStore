
CREATE DATABASE gamestore;

\c gamestore

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE games(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  imageurl TEXT NOT NULL,
  categories TEXT[],
  price REAL NOT NULL
);

INSERT INTO games (title,description,imageurl,categories,price) VALUES ('NBA 2k24','Basketball video game offering authentic action, personalized MyPLAYER options, and competitive gameplay.','https://m.media-amazon.com/images/I/8140Oo7VT7L._AC_UF1000,1000_QL80_.jpg','{"Sport"}',29.99),('FIFA 24','EA Sports FC 24 delivers authentic football action with thousands of players, teams, and leagues in a deep simulation experience.','https://image.api.playstation.com/vulcan/ap/rnd/202310/0214/b449973c0d7f4afc176aa1debb996b472718ce0f4175e02b.png','{"Sport"}', 49.99),
('Tekken 8','Witness the epic clash of the Mishima bloodline in this intense fighting game with groundbreaking visuals and innovative gameplay.','https://image.api.playstation.com/vulcan/ap/rnd/202308/0312/aff71a0ced271048f5079b1fcf715bcb45110efc13e9704a.png','{"Fighting","Action"}',59.99),('Rise of the Ronin','Forge your path as a masterless samurai in war-torn 19th century Japan, where choices and alliances shape your destiny in this open-world action RPG.','https://image.api.playstation.com/vulcan/ap/rnd/202312/0606/38d36a1367cfd91ed3fed52510c7569a9c8bf5da3f66a1e6.png','{"Action","Adventure"}',69.99),('Dark Souls II','Dark Souls II is an action role-playing game that offers a punishing yet rewarding gameplay experience.','https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Dark_Souls_II_cover.jpg/220px-Dark_Souls_II_cover.jpg','{"Action"}',39.99);

INSERT INTO users (email,password) VALUES ('yavor@gmail.com','123456');