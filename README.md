Projeto de automação de testes de performance de API REST utilizando
**JavaScript** e **Grafana k6**. O repositório reúne scripts e recursos
de apoio para executar cenários de teste, observar o comportamento da
API sob carga e analisar métricas de desempenho.

## Introdução

O objetivo deste projeto é praticar e organizar testes não funcionais de
performance para uma API. Com o k6, é possível simular usuários
virtuais, definir a duração de uma execução, validar respostas e
acompanhar métricas como tempo de resposta e taxa de requisições.

A URL da API testada é configurada por meio da variável `BASE_URL` na
execução do k6. Informe o endereço do ambiente que deseja testar e
confirme que ele está acessível antes de iniciar os testes.

Repositório:
[banco-api-performance](https://github.com/carlapatara49-prog/banco-api-performance)

## Tecnologias Utilizadas

-   **JavaScript** --- linguagem utilizada para escrever os scripts de
    teste.
-   **Grafana k6** --- ferramenta para execução de testes de carga e
    performance.
-   **Git e GitHub** --- versionamento e hospedagem do código.

> O k6 possui seu próprio ambiente de execução. Para executar os scripts
> com k6, é necessário instalar o k6; a instalação do Node.js/npm não é
> necessária apenas para executar os testes k6, salvo se o projeto
> passar a incluir ferramentas adicionais que dependam deles.

## Estrutura do Repositório

Estrutura observada no repositório:

``` text
banco-api-performance/
├── config/
├── fixture/
├── helpers/
├── tests/
├── .gitignore
├── utils
├── README.md
└── script.js
```

### Objetivo de cada grupo de arquivos

  -----------------------------------------------------------------------
  Arquivo ou diretório                Objetivo
  ----------------------------------- -----------------------------------
   `config/`                          Arquivos de configuração de variáveis
                                      de ambiente

  `fixture/`                          Armazenar dados de apoio aos
                                      testes, quando necessários, como
                                      entradas ou massas de dados
                                      reutilizáveis.

  `helpers/`                          Reunir funções auxiliares
                                      reutilizáveis pelos scripts,
                                      evitando duplicação de código.

  `tests/`                            Organizar os scripts de teste por
                                      cenário ou funcionalidade.

  `utils/`                            Exemplo de arquivo para configuração das 
                                      variaveis de ambiente,como BASE_URL   
 
  `.gitignore`                        Definir arquivos e diretórios que
                                      não devem ser versionados pelo Git.

  `README.md`                         Documentação do projeto, com
                                      instruções de instalação e
                                      execução.
  -----------------------------------------------------------------------

Os arquivos e subdiretórios internos podem evoluir. Consulte o
repositório para verificar os nomes atuais dos scripts disponíveis.

## Instalação e execução do projeto

### 1. Pré-requisitos

-   Git instalado para clonar o repositório.
-   Grafana k6 instalado e disponível no terminal.
-   A API de destino em execução e acessível a partir da máquina que
    executará os testes.

Documentação oficial de instalação: [Instalar o
k6](https://grafana.com/docs/k6/latest/set-up/install-k6/).

Para conferir se a instalação está funcionando:

``` bash
k6 version
```

### 2. Clonar o repositório

``` bash
git clone https://github.com/carlapatara49-prog/banco-api-performance.git
cd banco-api-performance
```

### 3. Configurar a variável `BASE_URL`

Altere o arquivo 'config.local.json' e defina a URL base da API a ser testada:

``` json
  "baseUrl"= "http://localhost:3000"
 ``` 
No script JavaScript, a variável pode ser acessada por `__ENV.BASE_URL`,
por exemplo:

``` javascript
const baseUrl = __ENV.BASE_URL;
```

Exemplo para executar o script da raiz com a variável:

``` bash
k6 run -e BASE_URL=https://sua-api.exemplo.com script.js
```

### 4. Executar os testes com acompanhamento em tempo real

O k6 oferece um dashboard web integrado para acompanhar métricas durante
a execução. Para habilitá-lo, use a variável de ambiente
`K6_WEB_DASHBOARD=true`:

``` bash
K6_WEB_DASHBOARD=true k6 run -e BASE_URL=https://sua-api.exemplo.com tests/seu-script.js
```

Por padrão, o dashboard fica disponível em <http://localhost:5665>. Abra
esse endereço no navegador enquanto o teste estiver em execução.

### 5. Exportar o relatório HTML

Para acompanhar o dashboard durante o teste e exportar automaticamente
um relatório HTML ao final, configure `K6_WEB_DASHBOARD_EXPORT`:

``` bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run -e BASE_URL=https://sua-api.exemplo.com tests/seu-script.js
```

Ao terminar a execução, o arquivo `html-report.html` será gerado no
diretório de trabalho atual. Se necessário, informe outro caminho no
valor de `K6_WEB_DASHBOARD_EXPORT`.

O relatório pode incluir gráficos quando a duração do teste for
suficiente em relação ao período de agregação do dashboard. Consulte a
[documentação oficial do Web
Dashboard](https://grafana.com/docs/k6/latest/results-output/web-dashboard/).

#### Comandos no Windows PowerShell

No PowerShell, defina as variáveis de ambiente usando `$env:`:

``` powershell
$env:K6_WEB_DASHBOARD = "true"
$env:K6_WEB_DASHBOARD_EXPORT = "html-report.html"
k6 run -e BASE_URL=https://sua-api.exemplo.com tests/seu-script.js
```

### 6. Dicas importantes

-   Execute os testes somente em ambientes para os quais você tem
    autorização.
-   Confirme a URL de destino antes de executar cenários que gerem
    carga.
-   Ajuste usuários virtuais, duração e demais parâmetros conforme o
    objetivo do cenário e os limites do ambiente.
-   Não presuma que `BASE_URL` altera o destino por conta própria: o
    script deve ler `__ENV.BASE_URL` e utilizá-la nas requisições.
-   O comando de dashboard/exportação usa variáveis de ambiente próprias
    do k6; `-e BASE_URL=...` passa uma variável ao script de teste.

## Documentação oficial

-   [Documentação do Grafana k6](https://grafana.com/docs/k6/latest/)
-   [Instalação do
    k6](https://grafana.com/docs/k6/latest/set-up/install-k6/)
-   [Variáveis de ambiente e variáveis do
    script](https://grafana.com/docs/k6/latest/using-k6/environment-variables/)
-   [Web Dashboard e exportação
    HTML](https://grafana.com/docs/k6/latest/results-output/web-dashboard/)
