# 🎨 Conecta Web Kit

Uma biblioteca de componentes web modernos e reutilizáveis construída com **Stencil**, oferecendo componentes acessíveis, customizáveis e compatíveis com qualquer framework JavaScript.

## ✨ Características

- 🚀 **Framework Agnostic** - Funciona com React, Vue, Angular, Svelte ou vanilla JS
- 🅰️ **Integração Angular Nativa** - Wrappers standalone com Reactive Forms
- ♿ **Acessibilidade** - Componentes construídos seguindo as melhores práticas de a11y
- 📱 **Responsivo** - Design adaptável para todos os dispositivos
- 🎯 **TypeScript** - Tipagem completa para melhor experiência de desenvolvimento
- ⚡ **Performance** - Componentes otimizados com Shadow DOM
- 🎨 **Customizável** - Sistema de variáveis CSS para fácil personalização

## 📦 Componentes Disponíveis

### 🎯 conecta Button

Botão versátil com múltiplas variantes, tamanhos e estados.

**Variantes:** `primary`, `secondary`, `danger`, `success`  
**Tamanhos:** `small`, `medium`, `large`  
**Estados:** `disabled`, `loading`

```html
<conecta-button variant="primary" size="medium" loading="false"> Clique aqui </conecta-button>
```

**Propriedades:**

- `variant`: Tipo visual do botão
- `size`: Tamanho do botão
- `disabled`: Estado desabilitado
- `loading`: Estado de carregamento
- `type`: Tipo HTML (button, submit, reset)

### 📝 conecta Input

Campo de entrada com validação, estados visuais e acessibilidade completa.

**Tipos:** `text`, `email`, `password`, `number`, `tel`, `url`  
**Tamanhos:** `small`, `medium`, `large`  
**Estados:** `error`, `disabled`, `focused`

```html
<conecta-input label="Email" type="email" placeholder="seu@email.com" required="true" error="false" error-message="Email inválido"> </conecta-input>
```

**Propriedades:**

- `label`: Rótulo do campo
- `type`: Tipo do input HTML
- `placeholder`: Texto de placeholder
- `required`: Campo obrigatório
- `error`: Estado de erro
- `errorMessage`: Mensagem de erro
- `helpText`: Texto de ajuda
- `disabled`: Estado desabilitado

### ☑️ conecta Checkbox

Checkbox customizado com estados visuais e acessibilidade.

**Variantes:** `primary`, `secondary`, `danger`, `success`  
**Tamanhos:** `small`, `medium`, `large`  
**Estados:** `checked`, `indeterminate`, `disabled`

```html
<conecta-checkbox variant="primary" size="medium" checked="false" indeterminate="false"> Aceito os termos </conecta-checkbox>
```

### 🎨 conecta Icon

Sistema de ícones baseado no Lucide com suporte a customização.

**Variantes:** `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `neutral`  
**Tamanhos:** `small`, `medium`, `large`, `xlarge`

```html
<conecta-icon name="home" variant="primary" size="medium" stroke-width="2"> </conecta-icon>
```

**Ícones disponíveis:** home, user, heart, star, settings, search, check, x, plus, minus, mail, phone, calendar, clock, arrow-left, arrow-right, arrow-up, arrow-down, bookmark, circle

## 🚀 Instalação

```bash
npm install conecta-web-kit
```

## 💻 Uso

### Importação via CDN

```html
<script type="module" src="https://unpkg.com/conecta-web-kit/dist/conecta-web-kit/conecta-web-kit.esm.js"></script>
```

### Importação em Projetos Modernos

```javascript
import { defineCustomElements } from 'conecta-web-kit/loader';
defineCustomElements();
```

### Uso em Frameworks

#### ⚛️ React

```jsx
import { defineCustomElements } from 'conecta-web-kit/loader';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    defineCustomElements();
  }, []);

  return (
    <div>
      <conecta-button variant="primary" onClick={() => console.log('Clicado!')}>
        Botão React
      </conecta-button>
      <conecta-input label="Nome" placeholder="Digite seu nome" onInputChange={e => console.log(e.detail)} />
    </div>
  );
}
```

#### 🟢 Vue

```vue
<template>
  <div>
    <conecta-button variant="primary" @buttonClick="handleClick"> Botão Vue </conecta-button>
    <conecta-input label="Email" type="email" @inputChange="handleInput" />
  </div>
</template>

<script>
import { defineCustomElements } from 'conecta-web-kit/loader';

export default {
  mounted() {
    defineCustomElements();
  },
  methods: {
    handleClick(event) {
      console.log('Botão clicado:', event.detail);
    },
    handleInput(event) {
      console.log('Input alterado:', event.detail);
    },
  },
};
</script>
```

#### 🅰️ Angular

##### Uso Básico (Web Components)

```typescript
// main.ts
import { defineCustomElements } from 'conecta-web-kit/loader';

defineCustomElements();
```

```html
<!-- app.component.html -->
<conecta-button variant="primary" (buttonClick)="onButtonClick($event)"> Botão Angular </conecta-button>

<conecta-input label="Email" type="email" (inputChange)="onInputChange($event)"> </conecta-input>
```

##### Integração Nativa (Recomendado)

Para melhor integração com Angular, use os wrappers nativos:

```bash
npm install conecta-angular-wrappers
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { conectaButton, conectaInput, conectaCheckbox } from 'conecta-angular-wrappers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [conectaButton, conectaInput, conectaCheckbox],
  template: `
    <conecta-button variant="primary" (buttonClick)="onButtonClick()"> Botão Angular </conecta-button>

    <conecta-input [(ngModel)]="email" label="Email" type="email"> </conecta-input>

    <conecta-checkbox [(ngModel)]="acceptTerms"> Aceito os termos </conecta-checkbox>
  `,
})
export class AppComponent {
  email = '';
  acceptTerms = false;

  onButtonClick() {
    console.log('Botão clicado!');
  }
}
```

##### Reactive Forms

```typescript
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="userForm">
      <conecta-input label="Nome" formControlName="name" [error]="userForm.get('name')?.invalid"> </conecta-input>

      <conecta-checkbox formControlName="terms"> Aceito os termos </conecta-checkbox>
    </form>
  `,
})
export class FormComponent {
  userForm = this.fb.group({
    name: ['', Validators.required],
    terms: [false, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder) {}
}
```

📚 **[Ver documentação completa da integração Angular](../conecta-angular/README.md)**

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### Instalação

```bash
git clone <repository-url>
cd conecta-web-kit
npm install
```

### Scripts Disponíveis

```bash
# Desenvolvimento com hot reload
npm start

# Build para produção
npm run build

# Executar testes
npm test

# Executar testes em modo watch
npm run test.watch
```

### Visualizar Exemplos

Após executar `npm start`, acesse:

- **Página principal**: `http://localhost:3333`
- **Documentação interativa**: `http://localhost:3333/index.html`

### Estrutura do Projeto

```
src/
├── components/              # Componentes
│   ├── conecta-button/      # Botão
│   ├── conecta-input/       # Input
│   ├── conecta-checkbox/    # Checkbox
│   └── conecta-icon/        # Ícones
├── global/                 # Temas globais
│    └──conecta.scss        # Tema padrão
├── utils/                 # Utilitários
└── index.ts              # Ponto de entrada
```

## 🎨 Customização

### Variáveis CSS

Todos os componentes podem ser customizados através de variáveis CSS:

```css
:root {
  /* Cores primárias */
  --conecta-color-primary: #3b82f6;
  --conecta-color-primary-hover: #2563eb;

  /* Espaçamentos */
  --conecta-spacing-sm: 0.5rem;
  --conecta-spacing-md: 0.75rem;

  /* Tipografia */
  --conecta-font-family: 'Inter', sans-serif;
  --conecta-font-size-md: 1rem;
}
```

### Criando Tema Personalizado

```css
.conecta-theme-custom {
  --conecta-color-primary: #8b5cf6;
  --conecta-color-primary-hover: #7c3aed;
  --conecta-color-secondary: #f3f4f6;
  --conecta-color-secondary-hover: #e5e7eb;
}
```

## 📚 API Reference

### Eventos

Todos os componentes emitem eventos customizados:

```javascript
// Button
button.addEventListener('buttonClick', event => {
  console.log('Botão clicado:', event.detail);
});

// Input
input.addEventListener('inputChange', event => {
  console.log('Valor alterado:', event.detail);
});

// Checkbox
checkbox.addEventListener('checkboxChange', event => {
  console.log('Checkbox alterado:', event.detail);
});
```

### Propriedades Reativas

```javascript
// Acessar propriedades
const button = document.querySelector('conecta-button');
console.log(button.variant); // 'primary'
console.log(button.size); // 'medium'

// Alterar propriedades
button.variant = 'danger';
button.size = 'large';
```

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test.watch

# Executar testes E2E
npm run test.e2e
```

## 📦 Build e Distribuição

```bash
# Build para produção
npm run build

# Os arquivos serão gerados em:
# - dist/ (componentes compilados)
# - loader/ (loader para frameworks)
# - www/ (documentação)
```

**Desenvolvido com ❤️ pela equipe conecta**
