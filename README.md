# Documentação

## Introdução à aplicação

Essa é uma aplicação Fullstack que desenvolvi utilizando Nest JS para criação e manipulação do lado do servidor e React JS com Vite para criação e interação do lado do cliente.A aplicação possui um sistema de Cadastro/Login para autenticação de informações, onde é possível criar seu usuário com seus dados e associar contatos próximos como família ou amigos! Após o registro suas informações serão mostradas em tela.

## Requisitos

- Possuir git instalado na máquina
- Possuir node JS instalado na máquina(para o uso do gerenciador de pacotes 'npm')

## Configurando o Ambiente

Primeiro passo, clone o repositório em alguma pasta usando a chave SSH ou o HTTP na sua máquina:

```gitBash
    git clone https://github.com/Kenzie-Academy-Brasil-Developers/projeto_desafio_fullstack.git nome_do_projeto
```

```git
    git clone git@github.com:Kenzie-Academy-Brasil-Developers/projeto_desafio_fullstack.git nome_do_projeto
```

Segundo passo, entre em cada pasta(backend/frontend) e instale as dependências usando o terminal da seguinte maneira(Em qualquer ordem) usando o gerenciador de pacotes do node:

```powershell
    cd backend
    npm install
```

```powershell
    cd frontend
    npm install
```

Na pasta "backend" configure as variáveis de ambiente criando um arquivo ".env" fornecendo as chaves 'DATABASE_URL' e 'SECRET_KEY' como o seguinte formato(Caso contrário a aplicação não vai funcionar):

```env
    DATABASE_URL="postgresql://user:password@host:run_port/database?schema=public"
    SECRET_KEY="secret_key"
```

Na mesma pasta rode o seguinte comando do prisma(Com as dependências já instaladas) para gerar a pasta "migrations" e suas migrações:

```powershell
    npx prisma migrate dev
```

## Rodando a aplicação

Para rodar a aplicação do lado do servidor, mude para a pasta "backend" e use o seguinte comando:

```powershell
    cd backend  #caso ainda não esteja na pasta
    npm run start:dev
```

> Após esse comando é possível entrar em <http://localhost:3000/docs> para acessar a documentação sobre os
> **endpoints** possíveis e **autenticações** necessárias para cada.

Dessa forma a aplicação rodará até a conexão com o servidor for cortada.
Para rodar a aplicação do lado do cliente, mude para a pasta "frontend" e use o seguinte comando:

```powershell
    cd backend  #caso ainda não esteja na pasta
    npm run dev
```
