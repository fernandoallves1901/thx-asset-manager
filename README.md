# 🚀 THX Asset Manager

## Sistema Completo de Gerenciamento de Ativos de TI

### 📋 Sobre o Projeto

Sistema profissional para gerenciamento de ativos de TI com:
- ✅ Gestão completa de funcionários, equipamentos e departamentos
- 🤖 **Importação inteligente de funcionários com IA 100% GRATUITA** (sem APIs externas)
- 🔒 Segurança com hash de CPF usando bcrypt
- 📊 Dashboard com estatísticas em tempo real
- 🎨 Interface moderna com Angular + Tailwind CSS
- 🗄️ Backend robusto Node.js + TypeScript + TypeORM + PostgreSQL

---

## 🛠️ Stack Tecnológica

### Backend
- **Node.js** com TypeScript
- **Express.js** - Framework web
- **TypeORM** - ORM para PostgreSQL
- **PostgreSQL** - Banco de dados
- **bcrypt** - Hash de senhas/CPF

### Frontend
- **Angular 17+** com Standalone Components
- **Tailwind CSS** - Estilização
- **Signals** - Gerenciamento de estado reativo

---

## ⚡ Instalação Rápida (Método Recomendado)

### Pré-requisitos
- Node.js 18+ instalado
- PostgreSQL 13+ instalado e rodando
- Git instalado

### Passo 1: Clone o repositório

```bash
git clone https://github.com/fernandoallves1901/thx-asset-manager.git
cd thx-asset-manager
```

### Passo 2: Execute o script de instalação

```bash
chmod +x setup.sh
./setup.sh
```

O script irá:
1. Criar toda a estrutura de arquivos do backend e frontend
2. Instalar todas as dependências
3. Configurar variáveis de ambiente

### Passo 3: Configure o banco de dados

Crie o banco de dados PostgreSQL:

```bash
psql -U postgres
CREATE DATABASE thx_assets;
\q
```

### Passo 4: Configure as variáveis de ambiente

Edite o arquivo `backend/.env` criado pelo script:

```env
PORT=3003
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha_aqui
DB_NAME=thx_assets
NODE_ENV=development
```

### Passo 5: Inicie a aplicação

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm start
```

Acesse: **http://localhost:4200**

---

## 📁 Estrutura do Projeto

```
thx-asset-manager/
├── backend/
│   ├── src/
│   │   ├── entities/          # Entidades TypeORM
│   │   │   ├── Employee.ts
│   │   │   ├── Department.ts
│   │   │   └── Equipment.ts
│   │   ├── api/               # Rotas da API
│   │   │   ├── index.ts
│   │   │   ├── employees.ts
│   │   │   ├── departments.ts
│   │   │   └── equipment.ts
│   │   ├── services/          # Serviços de negócio
│   │   │   └── employeeImportService.ts
│   │   ├── data-source.ts     # Configuração TypeORM
│   │   └── index.ts           # Entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
├── src/                       # Frontend Angular
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   └── models/
│   └── ...
├── setup.sh                   # Script de instalação
└── README.md
```

---

## 🤖 Funcionalidade de Importação com IA

### Como Funciona?

O sistema possui um **parser inteligente gratuito** que reconhece automaticamente padrões de texto e extrai:
- Nome do funcionário
- Email
- CPF (opcional)
- Cargo (opcional)
- Data de admissão (opcional)

### Formatos Suportados:

```
# Formato simples
João Silva, joao@empresa.com, Ativo
Maria Santos, maria@empresa.com, Ativo

# Formato completo
Carlos Mendes, carlos@empresa.com, 123.456.789-00, Analista TI, 01/01/2024, Ativo

# Formato misto
Ana Costa, ana@empresa.com, Ativo
Pedro Lima, pedro@empresa.com, 987.654.321-00, Desenvolvedor, 15/02/2024, Ativo
```

O sistema é **100% gratuito** - sem necessidade de API keys ou serviços externos!

---

## 🔧 Comandos Úteis

### Backend
```bash
cd backend
npm run dev      # Modo desenvolvimento
npm run build    # Build para produção
npm start        # Iniciar produção
```

### Frontend
```bash
npm start        # Desenvolvimento (localhost:4200)
npm run build    # Build para produção
npm run test     # Executar testes
```

---

## 🐳 Deploy com Docker (Opcional)

```bash
# Em breve: docker-compose up -d
```

---

## 📝 API Endpoints

### Funcionários
- `GET /api/employees` - Listar todos
- `POST /api/employees` - Criar novo
- `PUT /api/employees/:id` - Atualizar
- `DELETE /api/employees/:id` - Deletar
- `POST /api/employees/import-ai` - Importar com IA

### Departamentos
- `GET /api/departments` - Listar todos
- `POST /api/departments` - Criar novo
- `PUT /api/departments/:id` - Atualizar
- `DELETE /api/departments/:id` - Deletar

### Equipamentos
- `GET /api/equipment` - Listar todos
- `POST /api/equipment` - Criar novo
- `PUT /api/equipment/:id` - Atualizar
- `DELETE /api/equipment/:id` - Deletar

---

## 🔒 Segurança

- ✅ CPF criptografado com bcrypt
- ✅ CORS configurado
- ✅ Validação de dados no backend
- ✅ Prepared statements (TypeORM)

---

## 👨‍💻 Desenvolvido por

**Fernando Alves** - THX Logtech

---

## 📄 Licença

ISC License

---

## 🆘 Suporte

Se encontrar algum problema:
1. Verifique se o PostgreSQL está rodando
2. Confirme as credenciais no `.env`
3. Verifique os logs do backend e frontend
4. Abra uma issue no GitHub

---

**🎉 Pronto! Seu sistema está configurado e rodando!**
