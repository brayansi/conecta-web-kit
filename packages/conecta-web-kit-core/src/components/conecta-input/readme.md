# conecta-input

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                  | Type                                                            | Default                             |
| -------------- | --------------- | ---------------------------- | --------------------------------------------------------------- | ----------------------------------- |
| `disabled`     | `disabled`      | Se o input está desabilitado | `boolean`                                                       | `false`                             |
| `error`        | `error`         | Estado de erro               | `boolean`                                                       | `false`                             |
| `errorMessage` | `error-message` | Mensagem de erro             | `string`                                                        | `''`                                |
| `helpText`     | `help-text`     | Mensagem de ajuda            | `string`                                                        | `''`                                |
| `inputId`      | `input-id`      | ID do input                  | `string`                                                        | `` `conecta-input-${inputIds++}` `` |
| `label`        | `label`         | Label do input               | `string`                                                        | `''`                                |
| `name`         | `name`          | Nome do input                | `string`                                                        | `''`                                |
| `placeholder`  | `placeholder`   | Placeholder do input         | `string`                                                        | `''`                                |
| `required`     | `required`      | Se o input é obrigatório     | `boolean`                                                       | `false`                             |
| `size`         | `size`          | Tamanho do input             | `"large" \| "medium" \| "small"`                                | `'medium'`                          |
| `type`         | `type`          | Tipo do input                | `"email" \| "number" \| "password" \| "tel" \| "text" \| "url"` | `'text'`                            |
| `value`        | `value`         | Valor do input               | `string`                                                        | `''`                                |


## Events

| Event         | Description                               | Type                      |
| ------------- | ----------------------------------------- | ------------------------- |
| `inputBlur`   | Evento emitido quando o input perde foco  | `CustomEvent<FocusEvent>` |
| `inputChange` | Evento emitido quando o valor muda        | `CustomEvent<string>`     |
| `inputFocus`  | Evento emitido quando o input recebe foco | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
