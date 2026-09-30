# Portfólio — Leandro Saltorato Junior

Site de portfólio profissional de **Leandro Saltorato Junior**, desenvolvedor júnior com foco em JavaScript, React, Node.js e Flutter. Feito com HTML, CSS e JavaScript puros, sem dependências e sem etapa de build.

<!-- Depois de publicar, adicione aqui o link do site:
🔗 **Demo:** https://seu-site.vercel.app
-->

## Destaques

- **Dark mode por padrão**, com alternância para o tema claro e escolha salva no navegador.
- **Responsivo**: layout adaptado para celular, tablet e desktop, com menu recolhível.
- **Seções**: Hero, Sobre mim, Tech Stack, Projetos em destaque e Rodapé com contato.
- **Cards de projeto** com pré-visualização, descrição, tecnologias e links para GitHub e demo.
- **Acessibilidade**: HTML semântico, foco visível, rótulos em botões e respeito a `prefers-reduced-motion`.
- **Leve e rápido**: três arquivos estáticos, sem frameworks.

## Tecnologias

| Camada | Uso |
| --- | --- |
| HTML5 | Estrutura semântica |
| CSS3 | Variáveis (design tokens), Grid, Flexbox, temas claro/escuro |
| JavaScript (ES5+) | Troca de tema, menu mobile, animações de entrada e link ativo no scroll |
| Google Fonts | Inter e JetBrains Mono |

## Estrutura do projeto

```text
.
├── index.html   # Estrutura e conteúdo
├── style.css    # Estilos, temas e responsividade
├── script.js    # Interações (tema, menu, animações)
└── README.md
```

## Como rodar localmente

Não há nada para instalar. Escolha uma das opções:

**1. Abrindo direto no navegador**

Dê dois cliques em `index.html`.

## Como personalizar

- **Textos e projetos:** edite o `index.html`. Cada projeto é um bloco `<article class="project">`; basta copiar um e trocar título, descrição, tags e links.
- **Demo de um projeto:** adicione um botão `link-btn primary` com o link, seguindo o exemplo do card "Loja de Roupas".
- **Cores e tema:** altere as variáveis no topo do `style.css` (`:root` para o escuro e `:root[data-theme="light"]` para o claro). A cor de destaque é `--accent`.
- **E-mail de contato:** no rodapé do `index.html` há um botão de e-mail comentado; descomente e coloque o seu endereço.

## Deploy

Por ser um site estático, pode ser publicado gratuitamente em:

- **Vercel** ou **Netlify**: importe o repositório, sem comando de build e com a raiz do projeto como diretório de saída.
- **GitHub Pages**: em *Settings → Pages*, selecione a branch `main` e a pasta `/ (root)`.

---

Feito com HTML, CSS e JavaScript.
