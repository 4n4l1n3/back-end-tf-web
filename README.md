# back-end-tf-web
Back-End do trabalho final da disciplina de WEB

## Nomes:
- Alice Gonçalves Silva
- Analine Almeida e Silva
- Ayala Clara Silva Miranda
- Maria Eduarda Jardim Souza
- Stefanny Cândida Corsino

## Modelo Conceitual:

<a href="/src/db/modelo conceitual.png"> Clique para acessar o Modelo Conceitual</a>

## Documentação:

Projeto idealizado com objetivo de facilitar o acesso a documentação necessária para realização do estágio obrigatório exigido pelo IFNMG- Campus Salinas a partir da criação de um site voltado especificamente para este tópico.

<hr/>

### Cadastrar novo administrador

- Descrição: Insere um novo administrador ao banco de dados
- Endpoint: https://back-end-tf-web-nine.vercel.app/administrador/
- Tipo da requisição: POST
- Body: 
    {
        "Usuario": "Nome do usuario",
        "email_identificador": "email.usuario@ifnmg.edu.br",
        "senha": "********"
    }
- Header: x-access-token

### Listar todos os administradores 

- Descrição: Lista todos os administradores cadastrados no banco de dados, bem como suas respectivas informações.
- Endpoint: https://back-end-tf-web-nine.vercel.app/administradores
- Tipo da requisição: GET

### Listar apenas um administrador 

- Descrição: Lista apenas um dentre todos os administradores cadastrados no banco de dados.
- Endpoint: https://back-end-tf-web-nine.vercel.app/administrador/1
- Tipo da requisição: GET

### Alterar as informações de um administrador identificado 

- Descrição: Modifica as informações referentes a um administrador já cadastrado no banco de dados.
- Endpoint: https://back-end-tf-web-nine.vercel.app/administrador/
- Tipo da requisição: PUT
- Body:
    {
        "id": "id do usuario",
        "usuario": "Nome do usuario",
        "senha": "********",
        "email_identificador": "email.usuario@ifnmg.edu.br"
    }
- Header: x-access-token

### Excluir as informações de um administrador identificado

- Descrição: Deleta as informações referentes a um administrador já cadastrado no banco de dados.
- Endpoint: https://back-end-tf-web-nine.vercel.app/administrador/
- Tipo da requisição: DELETE
- Header: x-access-token

<hr/>

### Inserir novo documento

- Descrição: Adiciona um novo documento ao banco de dados.
- Endpoint: https://back-end-tf-web-nine.vercel.app/documento/
- Tipo da requisição: POST
- Body:
    {
        "nome": "Nome do documento",
        "descricao": "*****************************"
    }

### Listar todos os documentos 

- Descrição: Lista todos os documentos salvos no banco de dados, bem como suas respectivas informações.
- Endpoint: https://back-end-tf-web-nine.vercel.app/documentos
- Tipo da requisição: GET


### Listar apenas um documento

- Descrição: Lista apenas um dentre todos os documentos inseridos no banco de dados.
- Endpoint: https://back-end-tf-web-nine.vercel.app/documento/1
- Tipo da requisição: GET

### Alterar as informações de um documento 

- Descrição: Modifica as informações de um documento já inserido no banco de dados.
- Endpoint: https://back-end-tf-web-nine.vercel.app/documento/
- Tipo da requisição: PUT
- Body:
    {
        "id":"id do documento",
        "nome":"Nome do documento",
        "descricao":"Escreva a descrição do documento"
    }

### Excluir as informações de um documento

- Descrição: Deleta as informações de um documento já inserido no banco de dados.
- Endpoint: https://back-end-tf-web-nine.vercel.app/documento/
- Tipo da requisição: DELETE
