import pkg from "pg";
const { Pool } = pkg;

async function connect() {
  const pool = new Pool({
    connectionString: process.env.URL_BD,
  });
  return pool.connect();
}

async function selectAdministradores() {
  const client = await connect();
  const res = await client.query("SELECT id, usuario, email_identificador FROM Administrador");
  return res.rows;
}

async function selectAdministrador(id) {
  const client = await connect();
  const query = "SELECT usuario, email_identificador FROM administrador WHERE id = $1";
  const administrador = [id];
  const res = await client.query(query,administrador);
  return res.rows;
}

async function insertAdministrador(data) {
  const client = await connect();
  const query = "INSERT INTO administrador (usuario,senha,email_identificador) VALUES ($1,$2,$3) ";
  const administrador = [data.usuario, data.senha, data.email_identificador];
  await client.query(query, administrador);
}

async function deleteAdministrador(id) {
  const client = await connect();
  const query = "DELETE FROM administrador WHERE id = $1";
  await client.query(query, [id]);
}

async function updateAdministrador(data) {
  const client = await connect();
  const query = "UPDATE administrador SET usuario = $1, email_identificador = $2, senha = $3 WHERE id = $4";
  const administrador = [data.usuario, data.email_identificador, data.senha, data.id];
  await client.query(query, administrador);
}

async function selectDocumentos() {
  const client = await connect();
  const res = await client.query("SELECT * FROM documento");
  return res.rows;
}

async function selectDocumento(id) {
  const client = await connect();
  const query = "SELECT * FROM documento WHERE id = $1";
  const documento = [id];
  const res = await client.query(query,documento);
  return res.rows;
}

async function insertDocumento(data) {
  const client = await connect();
  const query = "INSERT INTO documento (nome, descricao) VALUES ($1,$2) ";
  const documento = [data.nome, data.descricao];
  await client.query(query, documento);
}

async function deleteDocumento(id) {
  const client = await connect();
  const query = "DELETE FROM documento WHERE id = $1";
  await client.query(query, [id]);
}

async function updateDocumento(data) {
  const client = await connect();
  const query = "UPDATE documento SET nome = $1, descricao = $2 WHERE id = $3";
  const documento = [data.nome, data.descricao, data.id];
  await client.query(query, documento);
}

async function autenticarAdministrador(email_identificador, senha) {
  const client = await connect();
  const query = "SELECT * FROM administrador  WHERE email_identificador  = $1 AND senha = $2";
  const administrador = [email_identificador, senha];
  const res = await client.query(query, administrador);
  return res.rows[0];
}

async function selectEmpresas() {
  const client = await connect();
  const res = await client.query("SELECT * FROM Empresa");
  return res.rows;
}

async function selectEmpresa(id) {
  const client = await connect();
  const query = "SELECT * FROM empresa WHERE id = $1";
  const empresa = [id];
  const res = await client.query(query,empresa);
  return res.rows;
}

async function insertEmpresa(data) {
  const client = await connect();
  const query = "INSERT INTO empresa (nome, razao_social, ramo_de_atividade, cnpj, representante_legal, cargo_representante, telefone, email, cidade, bairro, rua, numero, estado, numero_convenio, situacao_convenio, data_de_emissao_convenio) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16) ";
  const empresa = [data.nome, data.razao_social, data.ramo_de_atividade, data.cnpj, data.representante_legal, data.cargo_representante, data.telefone, data.email, data.cidade, data.bairro, data.rua, data.numero, data.estado, data.numero_convenio, data.situacao_convenio, data.data_de_emissao_convenio];
  await client.query(query, empresa);
}

async function deleteEmpresa(id) {
  const client = await connect();
  const query = "DELETE FROM empresa WHERE id = $1";
  await client.query(query, [id]);
}

async function updateEmpresa(data) {
  const client = await connect();
  const query = "UPDATE empresa SET nome = $1, razao_social = $2, ramo_de_atividade = $3, cnpj = $4, representante_legal = $5, cargo_representante = $6, telefone = $7, email = $8, cidade = $9, bairro = $10, rua = $11, numero = $12, estado = $13, numero_convenio = $14, situacao_convenio = $15, data_de_emissao_convenio = $16 WHERE id = $17";
  const empresa = [data.nome, data.razao_social, data.ramo_de_atividade, data.cnpj, data.representante_legal, data.cargo_representante, data.telefone, data.email, data.cidade, data.bairro, data.rua, data.numero, data.estado, data.numero_convenio, data.situacao_convenio, data.data_de_emissao_convenio, data.id];
  await client.query(query, empresa);
}

export {selectAdministradores, selectAdministrador, insertAdministrador, deleteAdministrador, updateAdministrador, selectDocumentos, selectDocumento, insertDocumento, deleteDocumento, updateDocumento, autenticarAdministrador, selectEmpresas,selectEmpresa, insertEmpresa, deleteEmpresa, updateEmpresa};
