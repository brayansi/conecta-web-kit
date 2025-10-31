# conecta Monorepo

Monorepo para Conecta Web Kit e integrações Angular.

## Estrutura do Projeto

```
conecta-monorepo/
├── packages/
│   ├── conecta-web-kit-core/     # Biblioteca principal de componentes
│   └── conecta-web-kit-angular/   # Integração Angular (em desenvolvimento)
├── .prettierrc                  # Configuração do Prettier
├── eslint.config.js             # Configuração do ESLint
├── tsconfig.json                # Configuração do TypeScript
└── package.json                 # Dependências e scripts do monorepo
```

## Configurações de Desenvolvimento

### ESLint

- Configurado para TypeScript e JavaScript
- Regras personalizadas para o projeto
- Suporte a Stencil.js
- Ignora arquivos de build e dependências

### Prettier

- Formatação automática de código
- Configuração consistente entre todos os pacotes
- Suporte a TypeScript, JavaScript, SCSS, CSS, JSON e Markdown

### Husky

- Git hooks configurados
- Pre-commit: executa lint-staged automaticamente
- Garante qualidade do código antes de commits

### Lint-staged

- Executa ESLint e Prettier apenas em arquivos modificados
- Otimiza performance do processo de commit

## Scripts Disponíveis

### Na raiz do monorepo:

```bash
# Linting
npm run lint              # Executa ESLint em todo o projeto
npm run lint:fix          # Executa ESLint com correção automática
npm run lint:workspaces   # Executa linting em todos os workspaces

# Formatação
npm run format            # Formata todo o código com Prettier
npm run format:check      # Verifica se o código está formatado
npm run format:workspaces # Formata código em todos os workspaces

# Build
npm run build             # Build de todos os workspaces
npm run build:stencil     # Build específico do conecta-web-kit-core

# Testes
npm run test              # Executa testes em todos os workspaces
```

### No pacote conecta-web-kit-core:

```bash
# Desenvolvimento
npm run start              # Inicia servidor de desenvolvimento
npm run build              # Build de produção
npm run test               # Executa testes
npm run test.watch         # Executa testes em modo watch

# Deploy
npm run deploy             # Build e publicação
```

## Como Usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
# Iniciar desenvolvimento do web-kit
cd packages/conecta-web-kit-core
npm run start
```

### Commit

O Husky está configurado para executar automaticamente:

- ESLint com correção automática
- Prettier para formatação
- Apenas em arquivos modificados (lint-staged)

### Adicionando Novos Pacotes

1. Crie o diretório em `packages/`
2. Configure o `package.json` do novo pacote
3. As configurações de ESLint e Prettier serão herdadas da raiz

## Configurações Específicas

### TypeScript

- Configuração baseada em ES2022
- Suporte a decorators (Stencil)
- Declarações de tipo habilitadas

### ESLint

- Regras para TypeScript e JavaScript
- Suporte a Stencil.js
- Configuração de globals para ambiente web e Node.js

### Prettier

- Single quotes
- Semicolons obrigatórios
- Trailing commas (ES5)
- Print width: 240
- Tab width: 2

## Contribuição

1. Faça suas alterações
2. O Husky executará automaticamente o linting e formatação
3. Commit suas alterações
4. As configurações garantem consistência de código
