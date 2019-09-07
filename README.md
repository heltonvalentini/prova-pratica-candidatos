# Avaliação Prática

Um projeto foi inciado na Algar para o desenvolvimento de um protótipo, que seria
um aplicativo para gerenciamento "seguro" de senhas. Após reuniões com o time de negócios
foram levantados os seguintes requisitos funcionais e não funcionais.

## Requisitos funcionais obrigatórios:

- O aplicativo deve permitir o cadastro de usuários, as informações solicitadas são:
  - nome,
  - e-mail
  - senha
- A senha deverá conter no mínimo 8 caracteres, dos quais deve possuir no mínimo 1 letra, 1 número e 1 caractere especial
- O cadastro do usuário deverá ser realizado contra uma API que dê suporte à ese modelo. No caso se o candidato for FullStack pode incluir uma API para este requisito senão utilizar o pacote [JSON-SERVER](https://github.com/typicode/json-server)

- O aplicativo deverá permitir o login do usuário
- Após logado o aplicativo permitirá que o usuário adicione seus logins em sites para
serem armazenados de forma segura apenas no dispositivo, as informações
solicitadas serão:
  - url do site
  - usuário/e-mail
  - senha
- O armazenamento dessas credenciais ficará apenas no dispositivo, se utilizando
do mecanismo local não precisando ser seguro nesse exemplo. Por ex: pode utilizar o mesmo pacote JSON-SERVER ou localStorage para salvar estas informações.

- Deverá ser apresentado para o usuário como tela inicial da aplicação uma lista
contendo todos os sites cadastrados
- Ao clicar em um site da lista deverá ser apresentado os detalhes do mesmo
  - A exibição da senha poderá ser ocultada/mostrada
  - A senha poderá ser copiada para a área de transferência
- Em um site cadastrado o usuário poderá editar ou excluir o mesmo.

## Requisitos não funcionais obrigatórios:

- O aplicativo deve ser desenvolvido em qualquer framework web (React / Angular / VueJS)
- Gestão de estado pode ser feito da forma que o candidato julgar melhor.
- O código fonte deverá seguir as premissas de qualidade e boas práticas que o candidato julgar serem as mais adequadas.

## Requisitos não funcionais não obrigatórios (extras):
- O aplicativo deve possuir um visual agradável, boas práticas de UI/UX da plataforma devem ser consideradas e seguidas.
- Implementar testes unitários se utilizando de ferramentas
proporcionadas pela plataforma.
- Implementações adicionais relacionadas com o contexto da aplicação
- UI/UX aprimoradas
- Realização de testes de interface
- Utilização de programação funcional
