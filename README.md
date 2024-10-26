````markdown
# Sistema ERP - Sala de Aula

Este projeto implementa um módulo de manutenção de salas de aula para um sistema ERP de controle escolar. O sistema é composto por três componentes principais:

1. **API RESTful**: Gerencia as operações de Salas de Aula.
2. **Servidor FrontEnd com EJS** (`srvFrontEJS`): Serve a página inicial (`index.ejs`).
3. **Servidor FrontEnd com Nunjucks** (`srvFrontNJK`): Serve a página de manutenção de salas de aula (`SalaDeAula.njk`), que busca dados da API.

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/en/) (v14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)
- [Git](https://git-scm.com/)
- [Banco de Dados](https://www.postgresql.org/download/) (exemplo: PostgreSQL)

## Instalação

### 1. Clone o Repositório

Abra o terminal e execute:

```bash
git clone https://github.com/FelipeEliasSoares/Desenvolvimento_de_APIs_NodeJS_Template_Engines.git
cd Desenvolvimento_de_APIs_NodeJS_Template_Engines
```
````

### 2. API RESTful

#### a. Configuração Inicial

1. **Navegue até o diretório da API:**

   ```bash
   cd API
   ```

2. **Copie o arquivo de exemplo `.env`:**

   ```bash
   cp .env.example .env
   ```

3. **Configure as variáveis de ambiente no arquivo `.env`:**

   Abra o arquivo `.env` em um editor de texto e configure as credenciais do banco de dados. Exemplo:

   ```
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=escolar
   DB_PORT=5432
   ```

#### b. Instale as Dependências

```bash
npm install
```

#### c. Configure o Banco de Dados

1. **Crie o Banco de Dados:**

   Acesse seu banco de dados (por exemplo, PostgreSQL) e crie um banco chamado `escolar`:

   ```sql
   CREATE DATABASE escolar;
   ```

3. **Crie a Tabela `salasdeaula`:**

   Execute o seguinte script SQL para criar a tabela necessária:

   ```sql
   CREATE TABLE salasdeaula (
       salasdeaulaid SERIAL PRIMARY KEY,
       descricao VARCHAR(255) NOT NULL,
       localizacao VARCHAR(255) NOT NULL,
       capacidade INTEGER NOT NULL,
       removido BOOLEAN DEFAULT FALSE
   );
   ```

#### d. Inicie o Servidor da API

```bash
node app
```

O servidor iniciará na porta `4000`. Você verá a mensagem:

```
Servidor rodando em http://localhost:4000
```

### 3. Servidor FrontEnd com EJS

#### a. Configuração Inicial

1. **Navegue até o diretório `srvFrontEJS`:**

   ```bash
   cd ../srvFrontEJS
   ```

2. **Instale as Dependências:**

   ```bash
   npm install
   ```

#### b. Inicie o Servidor EJS

```bash
node srvFrontEJS.js
```

O servidor iniciará na porta `25000`. Você verá a mensagem:

```
Servidor EJS rodando em http://localhost:25000
```

### 4. Servidor FrontEnd com Nunjucks

#### a. Configuração Inicial

1. **Navegue até o diretório `srvFrontNJK`:**

   ```bash
   cd ../srvFrontNJK
   ```

2. **Instale as Dependências:**

   ```bash
   npm install
   ```

#### b. Inicie o Servidor Nunjucks

```bash
node srvFrontNJK.js
```

O servidor iniciará na porta `26000`. Você verá a mensagem:

```
Servidor Nunjucks rodando em http://localhost:26000
```

## Execução

Após seguir os passos de instalação, você deve ter três servidores rodando simultaneamente:

1. **API RESTful**: [http://localhost:4000](http://localhost:4000)
2. **Servidor EJS (Página Inicial)**: [http://localhost:25000](http://localhost:25000)
3. **Servidor Nunjucks (Manutenção de Salas de Aula)**: [http://localhost:26000/manutSalaDeAula](http://localhost:26000/manutSalaDeAula)

## Uso

1. **Acesse a Página Inicial (EJS):**

   Abra o navegador e vá para: [http://localhost:25000](http://localhost:25000)

   - **Funcionalidades:**
     - Exibe o título do sistema.
     - Contém um botão para acessar a página de manutenção de salas de aula.

2. **Acesse a Página de Manutenção de Salas de Aula (Nunjucks):**

   Abra o navegador e vá para: [http://localhost:26000/manutSalaDeAula](http://localhost:26000/manutSalaDeAula)

   - **Funcionalidades:**
     - Exibe uma tabela com as salas de aula cadastradas na API.
     - Contém um botão para retornar à página inicial.

## Considerações Finais

- **Configuração de Ambiente (`.env`):** Certifique-se de copiar e configurar os arquivos `.env` para cada componente conforme as instruções acima.

- **Banco de Dados:** O projeto utiliza um banco de dados relacional (exemplo: PostgreSQL). Assegure-se de que o banco de dados esteja configurado corretamente e que as tabelas necessárias estejam criadas.

- **Portas Utilizadas:**

  - API RESTful: `4000`
  - Servidor EJS: `25000`
  - Servidor Nunjucks: `26000`

- **Dependências:** Cada componente possui suas próprias dependências listadas no respectivo `package.json`. Sempre execute `npm install` após clonar o repositório para instalar todas as dependências necessárias.

- **Execução Simultânea:** Para que o sistema funcione corretamente, certifique-se de que todos os servidores estejam rodando simultaneamente.

---

**Desenvolvido por**

```
    Felipe Elias Soares e Johnny Edson Miranda de Souza
```
