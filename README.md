
# Music Suggestion Service

Este serviço sugere músicas com base na temperatura atual de uma cidade.

## Índice
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [Testes](#testes)
- [Deploy](#deploy)
- [Uso do Endpoint](#uso-do-endpoint)
- [Justificativas Técnicas](#justificativas-técnicas)

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

## Configuração

1. **Crie um arquivo `.env`** no diretório raiz do projeto e adicione sua chave de API do OpenWeatherMap:
   ```env
   OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

## Execução

1. **Inicie o servidor**:
   ```bash
   npm start
   ```

   O serviço estará rodando em `http://localhost:3000`.

## Testes

1. **Execute os testes**:
   ```bash
   npm test
   ```

## Deploy

### Deploy com Vercel

1. **Instale a CLI do Vercel**:
   ```bash
   npm install -g vercel
   ```

2. **Configure o projeto no Vercel**:
   ```bash
   vercel
   ```

3. **Configure as variáveis de ambiente no Vercel**:
   - Acesse o painel do Vercel e adicione `OPENWEATHERMAP_API_KEY` com sua chave de API.

4. **Faça o deploy**:
   ```bash
   vercel --prod
   ```

### Deploy com Heroku

1. **Instale a CLI do Heroku**:
   ```bash
   npm install -g heroku
   ```

2. **Login no Heroku**:
   ```bash
   heroku login
   ```

3. **Crie um novo aplicativo no Heroku**:
   ```bash
   heroku create nome-do-seu-app
   ```

4. **Configure as variáveis de ambiente no Heroku**:
   ```bash
   heroku config:set OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

5. **Faça o deploy para o Heroku**:
   ```bash
   git push heroku main
   ```

## Uso do Endpoint

### Endpoint para Obter a Playlist

- **URL**: `http://localhost:3000/api/weather/playlist?city={city_name}`
- **Método**: GET
- **Parâmetros**:
  - `city`: Nome da cidade para a qual você quer obter a playlist.

### Exemplo de Requisição

```bash
curl "http://localhost:3000/api/weather/playlist?city=London"
```

### Exemplo de Resposta

```json
{
  "genre": "Rock",
  "songs": ["Song 4", "Song 5", "Song 6"]
}
```

## Justificativas Técnicas

### Escolha do Padrão de API

**Padrão: RESTful API**

- **Simplicidade**: REST é amplamente utilizado e bem compreendido. Ele facilita a interação com o serviço através de operações HTTP padrão (GET, POST, PUT, DELETE), tornando a API intuitiva e fácil de usar.
- **Escalabilidade**: APIs RESTful são stateless, o que facilita a escalabilidade horizontal.
- **Flexibilidade**: REST permite uma comunicação simples e eficiente entre sistemas diferentes, sendo agnóstico em relação ao tipo de cliente (web, mobile, IoT).
- **Ampla Adoção e Suporte**: A maioria das ferramentas e frameworks modernos oferecem suporte nativo ou bibliotecas dedicadas para construir e consumir APIs RESTful.

### Escolha da Linguagem de Programação e Frameworks

**Linguagem: Node.js**
- **Alta Performance**: Node.js é conhecido por seu modelo de I/O não-bloqueante e orientado a eventos, permitindo a construção de aplicações escaláveis e de alto desempenho.
- **JavaScript em Todo Lugar**: Com Node.js, é possível usar JavaScript tanto no lado do cliente quanto no lado do servidor, promovendo a reutilização de código e facilitando o desenvolvimento full-stack.
- **Ecossistema Rico**: Através do npm, Node.js oferece acesso a uma vasta quantidade de bibliotecas e pacotes que aceleram o desenvolvimento.

**Framework: Express**
- **Minimalista e Flexível**: Express é um framework web minimalista para Node.js, fornecendo uma camada básica para a construção de aplicações web e APIs.
- **Facilidade de Uso**: Express permite configurar rapidamente um servidor HTTP com rotas e middlewares, simplificando o desenvolvimento de APIs RESTful.
- **Comunidade e Suporte**: Sendo um dos frameworks mais populares para Node.js, Express tem uma grande comunidade e muita documentação disponível.

**Outras Ferramentas e Bibliotecas**:
- **axios**: Biblioteca para realizar requisições HTTP, conhecida por sua simplicidade e suporte a promessas.
- **dotenv**: Utilizada para carregar variáveis de ambiente a partir de um arquivo `.env`, permitindo uma configuração segura e flexível.
- **node-cache**: Implementação de cache simples para Node.js, usada para melhorar a performance ao armazenar temporariamente respostas de API.

### Uso de Serviços de Terceiros

**Serviço de Terceiros: OpenWeatherMap**
- **Dados Meteorológicos Confiáveis**: OpenWeatherMap é um serviço popular e confiável para obter dados meteorológicos, oferecendo uma API robusta e bem documentada.
- **Amplitude de Dados**: Fornece uma vasta gama de dados climáticos, desde temperatura atual até previsões, útil para futuras expansões do serviço.
- **Facilidade de Integração**: A API do OpenWeatherMap é bem estruturada e fácil de usar com bibliotecas HTTP como axios.
- **Planos Flexíveis**: Oferece planos gratuitos e pagos, permitindo escalabilidade conforme a necessidade e o crescimento do serviço.
