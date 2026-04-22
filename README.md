# Briefing de Marca — Setup Guide

## Arquivos

| Arquivo | Função |
|---------|--------|
| `index.html` | Página do briefing (enviar para o cliente) |
| `apps-script.gs` | Backend que grava no Google Sheets |

---

## Passo 1 — Configurar o Google Apps Script

1. Acesse [script.google.com](https://script.google.com)
2. Clique em **Novo projeto**
3. Apague o código existente e cole o conteúdo de `apps-script.gs`
4. Clique em **Salvar** (ícone de disquete)
5. Vá em **Serviços** (ícone de +) → adicione **Google Sheets API**
6. Vá em **Implantar** → **Nova implantação**
   - Tipo: **App da Web**
   - Executar como: **Eu mesmo**
   - Quem tem acesso: **Qualquer pessoa**
7. Clique em **Implantar** e autorize as permissões
8. Copie a **URL da implantação** gerada

## Passo 2 — Vincular ao Google Sheets

1. Crie uma planilha em [sheets.google.com](https://sheets.google.com)
2. Volte ao Apps Script
3. Clique em **Projeto** → **Configurações** → **Vinculado a**: selecione a planilha que você criou

## Passo 3 — Atualizar o index.html

Abra o `index.html` e substitua a linha:

```js
const APPS_SCRIPT_URL = "COLE_AQUI_A_URL_DO_SEU_APPS_SCRIPT";
```

pela URL que você copiou no Passo 1:

```js
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/SEU_ID_AQUI/exec";
```

## Passo 4 — Hospedar a página

### Opção A: GitHub Pages (gratuito, recomendado)

1. Crie um repositório no GitHub (pode ser privado)
2. Suba o `index.html`
3. Vá em **Settings** → **Pages** → Source: `main` branch → `/root`
4. Seu link será: `https://seuusuario.github.io/nome-do-repo`

### Opção B: Vercel (gratuito, mais fácil)

1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
2. Clique em **Add New Project** → importe o repositório
3. Clique em **Deploy**
4. Você receberá um link personalizado

### Opção C: Abrir localmente (para testes)

Abra o arquivo `index.html` direto no navegador. Os dados não serão enviados ao Sheets nesse modo, mas você pode testar o visual e a navegação.

---

## Como usar

Após configurar, envie o link para o cliente logo após ele assinar. Sugestão de mensagem:

> "Olá [nome]! Para começarmos com o pé direito, preciso que você preencha esse briefing completo. Vai levar uns 20-30 minutos, mas vai nos poupar horas de reuniões e garantir que o conteúdo reflita exatamente quem você é. 👇 [link]"

Todas as respostas aparecerão automaticamente na sua planilha Google.
