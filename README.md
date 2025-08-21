# KitchenAi

**Aplicativo de receitas com Inteligência Artificial**

O **KitchenAi** é um aplicativo que permite aos usuários obter receitas personalizadas com base nos **ingredientes sugeridos**. Inicialmente, a aplicação será construída utilizando **mocks** para simulação de dados, e posteriormente será integrada ao **back-end em Java** disponível [aqui](https://github.com/CaioVMSantos/KitchenIA).

---

## Instalação

### Clone o Repositório

```bash
git clone https://github.com/seu-usuario/kitchenia-frontend.git
cd kitchenia-frontend
````

> Substitua `seu-usuario` pelo seu nome de usuário ou organização no GitHub.

### Instale as Dependências

```bash
npm install
```

---

## Servidor de Desenvolvimento

Para iniciar o servidor local:

```bash
ng serve
```

Acesse a aplicação no navegador:

```
http://localhost:4200/
```

> A aplicação será recarregada automaticamente sempre que houver alterações nos arquivos de origem.

---

## Geração de Código com Angular CLI

O Angular CLI facilita a criação de componentes, serviços e outros elementos da aplicação.

### Criar um componente

```bash
ng generate component nome-do-componente
# ou forma abreviada
ng g c nome-do-componente
```

### Criar um serviço

```bash
ng generate service nome-do-servico
# ou forma abreviada
ng g s nome-do-servico
```

Para consultar todas as opções disponíveis:

```bash
ng generate --help
```

---

## Build do Projeto

Para compilar a aplicação para produção:

```bash
ng build
```

> Os arquivos compilados e otimizados serão armazenados no diretório `dist/`.

---

## Testes

### Testes Unitários

```bash
ng test
```

### Testes End-to-End (E2E)

> Observação: o Angular CLI não inclui um framework E2E por padrão. É possível utilizar Cypress, Playwright ou outro de sua escolha.

```bash
ng e2e
```

---

## Próximos Passos

* [ ] Finalizar o layout inicial da aplicação.
* [ ] Integrar dados simulados com **mocks** para testar funcionalidades.
* [ ] Conectar com o **back-end em Java** para buscar receitas reais.
* [ ] Implementar funcionalidades de **IA** para sugerir receitas com base nos ingredientes.
* [ ] Adicionar **autenticação e gerenciamento de perfil** do usuário.
* [ ] Permitir salvar e gerenciar **receitas favoritas**.

---

## Recursos

* [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
* [Back-end KitchenIA (Java)](https://github.com/CaioVMSantos/KitchenIA)