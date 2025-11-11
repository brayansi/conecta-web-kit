# 🅰️ Conecta Web Kit Angular

Uma biblioteca de componentes Angular moderna e reutilizável, construída com base no **Conecta Web Kit Core**, oferecendo integração nativa com Angular, suporte completo ao Reactive Forms e componentes acessíveis e customizáveis.

## ✨ Características

- 🅰️ **Integração Angular Nativa** - Wrappers standalone com Reactive Forms
- ♿ **Acessibilidade** - Componentes construídos seguindo as melhores práticas de a11y
- 📱 **Responsivo** - Design adaptável para todos os dispositivos
- 🎯 **TypeScript** - Tipagem completa para melhor experiência de desenvolvimento
- ⚡ **Performance** - Componentes otimizados com Shadow DOM
- 🎨 **Customizável** - Sistema de variáveis CSS para fácil personalização
- 🔄 **Reactive Forms** - Suporte completo ao Angular Reactive Forms
- 🚀 **Standalone Components** - Componentes independentes sem necessidade de módulos

## 📦 Componentes Disponíveis

### 🎯 Conecta Button

Botão versátil com múltiplas variantes, tamanhos e estados, totalmente integrado com Angular.

**Variantes:** `primary`, `secondary`, `danger`, `success`  
**Tamanhos:** `small`, `medium`, `large`  
**Estados:** `disabled`, `loading`

```html
<conecta-button 
  variant="primary" 
  size="medium" 
  [loading]="isLoading"
  (buttonClick)="onButtonClick($event)">
  Clique aqui
</conecta-button>
```

**Propriedades:**

- `variant`: Tipo visual do botão
- `size`: Tamanho do botão
- `disabled`: Estado desabilitado
- `loading`: Estado de carregamento
- `type`: Tipo HTML (button, submit, reset)

### 📝 Conecta Input

Campo de entrada com validação, estados visuais e acessibilidade completa, integrado com Angular Forms.

**Tipos:** `text`, `email`, `password`, `number`, `tel`, `url`  
**Tamanhos:** `small`, `medium`, `large`  
**Estados:** `error`, `disabled`, `focused`

```html
<conecta-input 
  label="Email" 
  type="email" 
  placeholder="seu@email.com"
  [required]="true"
  [error]="emailControl.invalid"
  errorMessage="Email inválido"
  [formControl]="emailControl">
</conecta-input>
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
- `formControl`: Integração com Angular Reactive Forms

### ☑️ Conecta Checkbox

Checkbox customizado com estados visuais e acessibilidade, integrado com Angular Forms.

**Variantes:** `primary`, `secondary`, `danger`, `success`  
**Tamanhos:** `small`, `medium`, `large`  
**Estados:** `checked`, `indeterminate`, `disabled`

```html
<conecta-checkbox 
  variant="primary" 
  size="medium"
  [formControl]="termsControl">
  Aceito os termos
</conecta-checkbox>
```

### 🎨 Conecta Icon

Sistema de ícones baseado no Lucide com suporte a customização.

**Variantes:** `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `neutral`  
**Tamanhos:** `small`, `medium`, `large`, `xlarge`

```html
<conecta-icon 
  name="home" 
  variant="primary" 
  size="medium" 
  [strokeWidth]="2">
</conecta-icon>
```

**Ícones disponíveis:** home, user, heart, star, settings, search, check, x, plus, minus, mail, phone, calendar, clock, arrow-left, arrow-right, arrow-up, arrow-down, bookmark, circle

## 🚀 Instalação

```bash
npm install @conecta.fit/conecta-web-kit-angular
```

## 💻 Uso

### Configuração Inicial

1. **Importe os componentes no seu módulo ou componente standalone:**

```typescript
import { Component } from '@angular/core';
import { conectaButton, conectaInput, conectaCheckbox, conectaIcon } from '@conecta.fit/conecta-web-kit-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [conectaButton, conectaInput, conectaCheckbox, conectaIcon],
  templateUrl: './app.component.html'
})
export class AppComponent {}
```

2. **Adicione os estilos globais no `angular.json`:**

```json
{
  "styles": [
    "node_modules/@conecta.fit/conecta-web-kit-angular/dist/conecta-web-kit.css",
    "src/styles.css"
  ]
}
```

### Uso Básico

```html
<!-- app.component.html -->
<div class="conecta-theme-conecta">
  <conecta-button 
    variant="primary" 
    size="medium"
    (buttonClick)="onButtonClick($event)">
    Botão Angular
  </conecta-button>

  <conecta-input 
    label="Email" 
    type="email" 
    placeholder="seu@email.com"
    [required]="true">
  </conecta-input>

  <conecta-checkbox 
    variant="primary"
    [checked]="acceptTerms"
    (checkboxChange)="onCheckboxChange($event)">
    Aceito os termos
  </conecta-checkbox>

  <conecta-icon 
    name="home" 
    variant="primary" 
    size="large">
  </conecta-icon>
</div>
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  acceptTerms = false;

  onButtonClick(event: any) {
    console.log('Botão clicado:', event.detail);
  }

  onCheckboxChange(event: any) {
    this.acceptTerms = event.detail.checked;
    console.log('Checkbox alterado:', event.detail);
  }
}
```

### Integração com Reactive Forms

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <conecta-input 
        label="Nome" 
        formControlName="name"
        [error]="userForm.get('name')?.invalid && userForm.get('name')?.touched"
        errorMessage="Nome é obrigatório">
      </conecta-input>

      <conecta-input 
        label="Email" 
        type="email" 
        formControlName="email"
        [error]="userForm.get('email')?.invalid && userForm.get('email')?.touched"
        errorMessage="Email inválido">
      </conecta-input>

      <conecta-checkbox 
        formControlName="terms"
        [error]="userForm.get('terms')?.invalid && userForm.get('terms')?.touched">
        Aceito os termos e condições
      </conecta-checkbox>

      <conecta-button 
        type="submit" 
        variant="primary"
        [disabled]="userForm.invalid"
        [loading]="isSubmitting">
        Enviar
      </conecta-button>
    </form>
  `
})
export class FormComponent implements OnInit {
  userForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.isSubmitting = true;
      console.log('Formulário válido:', this.userForm.value);
      // Simular envio
      setTimeout(() => {
        this.isSubmitting = false;
      }, 2000);
    }
  }
}
```

### Template-Driven Forms

```html
<form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
  <conecta-input 
    label="Nome" 
    name="name"
    [(ngModel)]="user.name"
    #nameField="ngModel"
    required
    [error]="nameField.invalid && nameField.touched"
    errorMessage="Nome é obrigatório">
  </conecta-input>

  <conecta-checkbox 
    name="terms"
    [(ngModel)]="user.terms"
    #termsField="ngModel"
    required
    [error]="termsField.invalid && termsField.touched">
    Aceito os termos
  </conecta-checkbox>

  <conecta-button 
    type="submit" 
    variant="primary"
    [disabled]="userForm.invalid">
    Enviar
  </conecta-button>
</form>
```

### Validação Customizada

```typescript
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const valid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar && value.length >= 8;

    return valid ? null : { passwordStrength: true };
  };
}

// Uso no componente
this.userForm = this.fb.group({
  password: ['', [Validators.required, passwordStrengthValidator()]]
});
```

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 16+
- Angular 19+
- npm ou yarn

### Instalação para Desenvolvimento

```bash
git clone <repository-url>
cd conecta-web-kit/packages/conecta-web-kit-angular
npm install
```

### Scripts Disponíveis

```bash
# Servidor de desenvolvimento
npm start

# Build para produção
npm run build

# Build em modo watch
npm run watch

# Publicar pacote
npm run deploy
```

### Estrutura do Projeto

```
projects/
├── component-library/           # Biblioteca de componentes Angular
│   ├── src/
│   │   ├── lib/
│   │   │   ├── conecta-button/   # Componente Button
│   │   │   ├── conecta-input/    # Componente Input
│   │   │   ├── conecta-checkbox/ # Componente Checkbox
│   │   │   └── conecta-icon/     # Componente Icon
│   │   └── public-api.ts        # API pública
│   ├── ng-package.json         # Configuração ng-packagr
│   └── package.json            # Dependências da biblioteca
├── angular.json                # Configuração Angular CLI
└── tsconfig.json              # Configuração TypeScript
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

### Customização de Componentes

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `
    <conecta-button 
      [variant]="variant" 
      [size]="size"
      [class]="customClass"
      (buttonClick)="onClick($event)">
      <ng-content></ng-content>
    </conecta-button>
  `
})
export class CustomButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() customClass = '';

  onClick(event: any) {
    // Lógica customizada
    console.log('Botão customizado clicado:', event.detail);
  }
}
```

## 📚 API Reference

### Eventos

Todos os componentes emitem eventos customizados:

```typescript
// Button
@ViewChild('button') button!: ConectaButtonComponent;

ngAfterViewInit() {
  this.button.buttonClick.subscribe(event => {
    console.log('Botão clicado:', event.detail);
  });
}

// Input
@ViewChild('input') input!: ConectaInputComponent;

ngAfterViewInit() {
  this.input.inputChange.subscribe(event => {
    console.log('Valor alterado:', event.detail);
  });
}

// Checkbox
@ViewChild('checkbox') checkbox!: ConectaCheckboxComponent;

ngAfterViewInit() {
  this.checkbox.checkboxChange.subscribe(event => {
    console.log('Checkbox alterado:', event.detail);
  });
}
```

### Propriedades Reativas

```typescript
@ViewChild('button') button!: ConectaButtonComponent;

changeButtonProperties() {
  // Acessar propriedades
  console.log(this.button.variant); // 'primary'
  console.log(this.button.size); // 'medium'

  // Alterar propriedades
  this.button.variant = 'danger';
  this.button.size = 'large';
}
```

**Desenvolvido com ❤️ pela equipe Conecta**
