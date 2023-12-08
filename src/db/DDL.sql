create database tfWeb;

use tfWeb;

CREATE TABLE Empresa (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR (100) NOT NULL,
razao_social VARCHAR (100) NOT NULL,
ramo_de_atividade VARCHAR(20) NOT NULL,
cnpj VARCHAR (18) NOT NULL,
representante_legal VARCHAR (50) NOT NULL,
cargo_representante VARCHAR (20) NOT NULL,
telefone VARCHAR (15) NOT NULL,
email VARCHAR (30) NOT NULL,
cidade VARCHAR (40) NOT NULL,
bairro VARCHAR (40) NOT NULL,
rua VARCHAR (50) NOT NULL,
numero INT (5) NOT NULL,
estado VARCHAR (25) NOT NULL,
numero_convenio INT (20) NOT NULL,
situação_convenio VARCHAR (28),
data_de_emissao_convenio date NOT NULL
);

CREATE TABLE Administrador (
id serial PRIMARY KEY,
usuario VARCHAR (50) NOT NULL UNIQUE,
email_identificador VARCHAR (100) NOT NULL UNIQUE,
senha VARCHAR (100) NOT NULL
);

CREATE TABLE Documento (
    id serial PRIMARY KEY,
    nome VARCHAR(75) NOT NULL,
    descricao TEXT
);