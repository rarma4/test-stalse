# 🎬 Movie Cards - Aplicação de Filmes

Uma aplicação web moderna e responsiva que exibe informações de filmes em cards interativos, consumindo dados da API OMDB (Open Movie Database).

## ✨ Características

- **Interface moderna e responsiva** com design Bootstrap
- **Carrossel de filmes** com navegação automática
- **Cards informativos** exibindo detalhes completos dos filmes
- **Consumo de API** da OMDB para dados em tempo real
- **Design responsivo** para todos os dispositivos
- **Animações suaves** e transições elegantes

## 🎯 Objetivo

Esta aplicação foi desenvolvida como projeto de demonstração de habilidades em:
- Desenvolvimento com React/Next.js
- Consumo de APIs externas
- Implementação de componentes reutilizáveis
- Design responsivo e moderno
- Gerenciamento de estado e efeitos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 13.5.4** - Framework React com App Router
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **SASS/SCSS** - Pré-processador CSS
- **Bootstrap 5** - Framework CSS responsivo
- **React Slick** - Componente de carrossel

### Desenvolvimento
- **Jest** - Framework de testes
- **ESLint** - Linter para qualidade de código
- **Axios** - Cliente HTTP para requisições

## 📱 Funcionalidades

### Cards de Filmes
Cada card exibe as seguintes informações:
- **Título** do filme
- **Ano** de lançamento
- **Poster** oficial (quando disponível)
- **Idioma** original
- **País** de origem
- **Roteirista** principal

### Carrossel Interativo
- Navegação automática com controles personalizados
- Indicadores visuais de progresso
- Responsivo para diferentes tamanhos de tela
- Controles de navegação adaptativos

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Chave de API da OMDB

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/test-stalse.git
cd test-stalse
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_APIKEY=sua_chave_api_omdb
```

**Nota:** Você pode obter uma chave gratuita em [OMDB API](https://www.omdbapi.com/apikey.aspx)

### 4. Execute a aplicação
```bash
# Desenvolvimento
npm run dev
# ou
yarn dev

# Build de produção
npm run build
npm start
```

A aplicação estará disponível em `http://localhost:3000`

## 🧪 Testes

Execute os testes automatizados:
```bash
npm test
# ou
yarn test
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Lancamento.tsx  # Componente principal dos cards
│   │   ├── MenuItens.tsx   # Menu de navegação
│   │   └── Navigation.tsx  # Barra de navegação
│   ├── sections/            # Seções da página
│   │   ├── Header.tsx      # Cabeçalho
│   │   ├── Lancamentos.tsx # Seção de filmes
│   │   └── Footer.tsx      # Rodapé
│   ├── services/            # Serviços e APIs
│   │   └── api.ts          # Configuração da API OMDB
│   ├── styles/              # Estilos SCSS
│   └── utils/               # Utilitários
│       └── Utils.tsx       # IDs dos filmes para exibição
```

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Render
1. Crie uma nova aplicação Web Service
2. Conecte ao repositório GitHub
3. Configure o comando de build: `npm run build`
4. Configure o comando de start: `npm start`

### Digital Ocean App Platform
1. Conecte seu repositório
2. Configure como aplicação Node.js
3. Defina as variáveis de ambiente

## 🔧 Configuração da API

A aplicação consome dados da [OMDB API](https://www.omdbapi.com/):

- **Endpoint base:** `https://www.omdbapi.com/`
- **Método:** GET
- **Parâmetros:** `i` (ID do filme) e `apikey`
- **Formato de resposta:** JSON

### Exemplo de requisição:
```javascript
GET /?i=tt2293640&apikey=SUA_CHAVE
```

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a:
- **Desktop:** 4 cards por linha
- **Tablet:** 2 cards por linha
- **Mobile:** 1 card por linha

## 🎨 Personalização

### Estilos
- Modifique os arquivos SCSS em `src/app/styles/`
- Use variáveis CSS para cores e espaçamentos
- Personalize o tema Bootstrap

### Filmes
- Altere os IDs dos filmes em `src/app/utils/Utils.tsx`
- Adicione ou remova filmes conforme necessário

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Perfil](https://linkedin.com/in/seu-perfil)

## 🙏 Agradecimentos

- [OMDB API](https://www.omdbapi.com/) por fornecer dados dos filmes
- [Next.js](https://nextjs.org/) pela excelente documentação
- [Bootstrap](https://getbootstrap.com/) pelos componentes responsivos


---

⭐ **Se este projeto foi útil para você, considere dar uma estrela no repositório!**

