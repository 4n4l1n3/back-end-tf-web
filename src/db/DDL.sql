create database trabalho final;

use trabalho final;

CREATE TABLE administrador (
 id serial PRIMARY KEY,
 usuario VARCHAR (50),
 email_identificador VARCHAR (100),
 senha VARCHAR (100)
);

CREATE TABLE documento (
  id serial PRIMARY KEY,
  nome VARCHAR(70),
  descricao TEXT
);

CREATE TABLE empresa (
    id serial PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    razao_social VARCHAR(100),
    ramo_de_atividade VARCHAR(20) NOT NULL,
    cnpj VARCHAR(18) NOT NULL,
    representante_legal VARCHAR(50) NOT NULL,
    cargo_representante VARCHAR(20) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(30) NOT NULL,
    cidade VARCHAR(40) NOT NULL,
    bairro VARCHAR(40) NOT NULL,
    rua VARCHAR(50) NOT NULL,
    numero INT NOT NULL,
    estado VARCHAR(20) NOT NULL,
    numero_convenio INT NOT NULL,
    situacao_convenio VARCHAR(28),
    data_de_emissao_convenio DATE NOT NULL
);