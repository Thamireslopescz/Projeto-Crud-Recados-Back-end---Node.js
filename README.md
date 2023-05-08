# Projeto CRUD de Recados em Node.js

Este é um projeto CRUD (Create, Read, Update, Delete) de recados desenvolvido em Node.js utilizando o framework Express. O objetivo deste projeto é fornecer uma aplicação web para criar usuário, realizar login e gerenciar recados de forma simples e eficiente para conclusão do módulo Back-end do curso Desenvolvimento Web Full Stack - Growdev.

## Funcionalidades

- Criação de recados com título e descrição
- Visualização de todos os recados cadastrados
- Edição de recados existentes
- Exclusão de recados existentes
- Criação de usuários com e-mail e senha
- Autenticação de usuários com e-mail e senha

## Tecnologias Utilizadas

- Node.js
- Express

## Instalação

1. Clone este repositório em sua máquina local
2. Instale as dependências do projeto com o comando `npm install`
3. Inicie o servidor com o comando `node index.js`
4. Acesse a aplicação em seu navegador no endereço `http://localhost:1425`

## Como Usar

UTILIZE O POSTMAN PARA RODAR OS COMANDOS COM O ENDEREÇO https://thamires-node-js.onrender.com

1. Crie um novo usuário na página de cadastro com um e-mail e senha - https://thamires-node-js.onrender.com/api/usuarios
2. Faça login na página de login com o e-mail e senha cadastrados - https://thamires-node-js.onrender.com/api/login
3. Para criar um novo recado preencha o título e a descrição do recado- https://thamires-node-js.onrender.com/api/recados
4. Visualize todos os recados cadastrados na página inicial - https://thamires-node-js.onrender.com/api/recados
5. Buscar/visualizar recado por id - https://thamires-node-js.onrender.com/api/recados/:id
5. Para editar um recado, informe o id do recado desejado - https://thamires-node-js.onrender.com/api/recados/:id
6. Para excluir um recado, informe o id do recado desejado - https://thamires-node-js.onrender.com/api/recados/:id

## Contribuição

Contribuições são sempre bem-vindas! Se você tiver alguma sugestão, crítica ou encontrou um bug, por favor, crie uma nova issue ou pull request neste repositório.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
