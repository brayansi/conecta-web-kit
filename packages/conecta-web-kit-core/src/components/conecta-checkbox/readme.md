# conecta-checkbox

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                | Type                                                                       | Default                                   |
| --------------- | --------------- | ------------------------------------------ | -------------------------------------------------------------------------- | ----------------------------------------- |
| `checkboxId`    | `checkbox-id`   | ID do checkbox                             | `string`                                                                   | `` `conecta-checkbox-${checkboxIds++}` `` |
| `checked`       | `checked`       | Se o checkbox está marcado                 | `boolean`                                                                  | `false`                                   |
| `disabled`      | `disabled`      | Se o checkbox está desabilitado            | `boolean`                                                                  | `false`                                   |
| `indeterminate` | `indeterminate` | Se o checkbox está em estado indeterminado | `boolean`                                                                  | `false`                                   |
| `name`          | `name`          | Nome do checkbox                           | `string`                                                                   | `''`                                      |
| `size`          | `size`          | Tamanho do checkbox                        | `"large" \| "medium" \| "small"`                                           | `'medium'`                                |
| `value`         | `value`         | Valor do checkbox                          | `string`                                                                   | `''`                                      |
| `variant`       | `variant`       | Variante do checkbox                       | `"danger" \| "info" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'`                               |


## Events

| Event            | Description                                     | Type                      |
| ---------------- | ----------------------------------------------- | ------------------------- |
| `checkboxBlur`   | Evento emitido quando o checkbox perde foco     | `CustomEvent<FocusEvent>` |
| `checkboxChange` | Evento emitido quando o estado do checkbox muda | `CustomEvent<boolean>`    |
| `checkboxFocus`  | Evento emitido quando o checkbox recebe foco    | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
