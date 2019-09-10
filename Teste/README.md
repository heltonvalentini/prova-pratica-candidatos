## Portal Cadstro

### Uso

#### Instalação de Dependências

Executando o comando abaixo, as dependências da aplicão serão instaladas.

```shell
$ npm install
```

### Deploy da Aplicação

#### Local 


É possível executar a aplicação localmente utlizando o comando abaixo:

```shell
$ npm start
```

As configurações de execução local estão definidas no arquivo ['package.json'](package.json). 
Para modificá-las basta ir até a linha onde está definido o `npm start` script.

Se estiver no padrão deifinido o Portal será hospedado em: [`http://localhost:3000`](http://localhost:3000).

Também é possível executar a aplicação passando parâmetros no momento da
execução, porém é necessário instalar o `webpack-dev-server` globalmente:

```shell
# npm install webpack-dev-server -g
```

Uma vez instalado é possível chamá-lo diretamente sem o `npm` passando as
variáveis:

```shell
$ DEFAULT_HOST=192.168.0.204 DEFAULT_PORT=9090 webpack-dev-server --host 0.0.0.0 --port 4000 --content-base src --progress
```

No exemplo acima as configurações são passadas no momento da execução. As
variáveis `${DEFAULT_HOST}` e `${DEFAULT_PORT}` são definidas em 'runtime':
As variáveis que podem ser utilizadas são:

- **DEFAULT\_****HOST**: Define o 'host' padrão para Kiss Api e Storage de Arquivos;
- **DEFAULT\_****PORT**: Define a porta padrão para Kiss Api e Storage de Arquivos;
- **DEFAULT\_****API\_****HOST**: Define o 'host' padrão para Kiss Api;
- **DEFAULT\_****API\_****PORT**: Define a porta padrão para Kiss Api;
- **DEFAULT\_****STORAGE\_****HOST**: Define o 'host' padrão para Storage de Arquivos;
- **DEFAULT\_****STORAGE\_****PORT**: Define a porta padrão para Storage de Arquivos;
- **API\_****URL**: Define o namespace padrão para os Serviços da API;
- **STORAGE\_****URL**: Define o namespace padrão para o Storage de Arquivos.


### Geração de Distribuíveis


É possível gerar um "distribuível" da aplicação que conterá os arquivos necessários para que a mesma possa ser carregada em um "Servidor Web".

\***O comando `npm install` deve ser executado antes da Geração dos Distribuíveis.**

Este projeto utiliza a ferramenta de geração chamada ['webpack.js'](https://github.com/webpack/webpack).

O Webpack irá compilar os códigos TypeScript e gerar arquivos distribuíveis da aplicação.

As configurações de geração estão definidas no arquivo de configuração ['webpack.config.js'](webpack.config.js).

Algumas configurações estão definidas para todo execução do build, porém outras
são específicas para cada ambiente. No trecho abaixo estão definidas as
configurações de produção:

```javascript
prd: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          "API_HOST": JSON.stringify("kissapi.valecard.com.br"),
          "API_PORT": JSON.stringify("80"),
          "API_URL": JSON.stringify(API_URL),
          "STORAGE_HOST": JSON.stringify("kissapi.valecard.com.br"),
          "STORAGE_PORT": JSON.stringify("80"),
          "STORAGE_URL": JSON.stringify(STORAGE_URL),
          "API_HTTPS": JSON.stringify(true),
          "STORAGE_HTTPS": JSON.stringify(true)
        }
      }),
      new webpackUglifyJsPlugin({
        cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
        debug: true,
        minimize: true,
        sourceMap: false,
        output: {
          comments: false
        },
        compressor: {
          warnings: false
        }
      })
    ]
  }

```
Na configuração de produção também é definida a ofuscação do fonte que pode reduzir drasticamente o tamanho dos distribuíveis.

Também é necessário definir no arquivo ['package.json'](package.json) o script de build específico para cada ambiente.
Fazendo desta forma, é necessário unicamente do `npm` para gerar o build da aplicação.

```javascript
"build:prd": "PROFILE=prd webpack",
```
No trecho acima, a chamada do "build de produção" é definida, a "PROFILE" passado correspondérá ao "PROFILE" de mesmo nome 
definido no arquivo de configuração do Webpack.

Para executar o build da aplicação basta executar:

```shell
$ npm run buid:prd
```

Na chamada do build o perfil também pode ser passado através de uma variável de ambiente:

```shell
$ npm run build:${PROFILE}
```

Uma vez executado os comandos de build da aplicação, os arquivos distribuíveis serão gerados na pasta "dist".

### Geração de .war

Para gerar o war da aplicação basta compactar os arquivos gerados na pasta "dist".

```shell
$ cd dist
$ zip -r portal-cadastro.war *
```
