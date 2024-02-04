# back-end-tf-web
Back-End do trabalho final da disciplina de WEB

## Nomes:
- Alice Gonçalves Silva
- Analine Almeida e Silva
- Ayala Clara Silva Miranda
- Maria Eduarda Jardim Souza
- Stefanny Cândida Corsino

## Banco de Dados:

<a href="/src/db/modelo conceitual.png"> Clique para acessar o Modelo Conceitual</a> 

<a href="/src/db/modelo lógico.png"> Clique para acessar o Modelo Lógico</a>

<a href="/src/db/DDL.sql"> Clique para acessar o Modelo Físico</a>

### Ferramentas:

- BrModelo: ferramenta desktop voltada para o desenvolvimento de projeto de banco de dados relacionais, incluindo as etapas conceitual, lógico e físico (utilizado para criar o modelo conceitual e o modelo lógico deste trabalho).

- MySQL Workbench: ferramenta visual de design de banco de dados, que integra desenvolvimento, design, criação e manutenção de SQL em um único ambiente de desenvolvimento ( utilizado para criar o modelo físico deste trabalho).

- Neon: Postgres sem servidor desenvolvido para a nuvem, separando computação e armazenamento para oferecer recursos modernos ao desenvolvedor, como escalonamento automático, ramificação, armazenamento sem fundo e muito mais. (utilizado para disponibilizar o bd para uso na API deste trabalho).

## Documentação:

Projeto idealizado com objetivo de facilitar o acesso a documentação necessária para realização do estágio obrigatório exigido pelo IFNMG- Campus Salinas a partir da criação de um site voltado especificamente para este tópico.

<hr/>

### URL API: https://back-end-tf-web-nine.vercel.app

### [POST] /login

Descrição: Autentica usuário e gera token de acesso.

Observações: É necessário que o usuário esteja cadastrado.

Body:
{
  "email_identificador": "email-usuario@email.com",
  "senha": "********"
}

### [GET] /administradores

Descrição: Retorna todos os administradores.

### [GET] /administrador/{id}

Descrição: Retorna um único administrador.

### [POST] /administrador

Descrição: Cadastra um novo administrador.

Body:
{
  "usuario": "Nome do usuário",
  "email_identificador": "email-usuario@email.com",
  "senha":"********"
}

Observações: É necessário token de acesso via header (x-access-token)

### [DELETE] /administrador/{id}

Descrição: Exclui um único administrador.

Observações: É necessário token de acesso via header (x-access-token)

### [PUT] /administrador

Descrição: Atualiza dados de um administrador.

Body:
{
  "id": "id do administrador",
  "usuario": "Nome do usuário",
  "email_identificador": "email-usuario@email.com",
  "senha":"********"
}

Observações: É necessário token de acesso via header (x-access-token)

<hr/>

### [GET] /documentos

Descrição: Retorna todos os documentos.

### [GET] /documento/{id}

Descrição: Retorna um único documento.

### [POST] /documento

Descrição: Cadastra um novo documento.

Body:
{
  "nome": "Nome do documento",
  "descricao": "------------"
}

Observações: É necessário token de acesso via header (x-access-token)

### [DELETE] /documento/{id}

Descrição: Exclui um único documento.

Observações: É necessário token de acesso via header (x-access-token)

### [PUT] /documento

Descrição: Atualiza dados de um documento.

Body:
{
  "id": "id do documento",
  "nome": "Nome do documento",
  "descricao": "-----------"
}

Observações: É necessário token de acesso via header (x-access-token)

<hr/>

### [GET] /empresas

Descrição: Retorna todas as empresas.

### [GET] /emresa/{id}

Descrição: Retorna uma única empresa.

### [POST] /empresa

Descrição: Cadastra uma nova empresa.

Body:
{
  "nome": "nome da empresa",
  "razao_social": "-------",
  "ramo_de_atividade": "-------",
  "cnpj": "-------",
  "representante_legal": "-------",
  "cargo_representante": "-------",
  "telefone": "-------",
  "email": "email-empresa@email.com",
  "cidade": "-------",
  "bairro": "-------",
  "rua": "-------",
  "numero": "00",
  "estado": "-------",
  "numero_convenio": 0,
  "situacao_convenio": "-------",
  "data_de_emissao_convenio": "0000-00-00"
}

Observações: É necessário token de acesso via header (x-access-token)

### [DELETE] /empresa/{id}

Descrição: Exclui uma única empresa.

Observações: É necessário token de acesso via header (x-access-token)

### [PUT] /documento

Descrição: Atualiza dados de uma empresa.

Body:
{
  "id": "id da empresa", br
  "nome": "nome da empresa", br
  "razao_social": "-------",
  "ramo_de_atividade": "-------",
  "cnpj": "-------",
  "representante_legal": "-------",
  "cargo_representante": "-------",
  "telefone": "-------",
  "email": "email-empresa@email.com",
  "cidade": "-------",
  "bairro": "-------",
  "rua": "-------",
  "numero": "00",
  "estado": "-------",
  "numero_convenio": 0,
  "situacao_convenio": "-------",
  "data_de_emissao_convenio": "0000-00-00"
}