## alura-hooks-function-components

###Aprofundar os conhecimentos em React: Function Components.

###CURSO DA ALURA: React: Function Components, uma abordagem moderna.

##Comandos básicos

#### 1- Criar suas pastas locais
#### 2- Dar o comando npx create-react-app nome-da-pasta onde vai realmente salvar seus arquivos
#### 2.1 - Dar o comando git init para inicializar as funcionalidades do git no seu repositorio local e remoto
#### 3- Dar nome aos seus arquivos, de preferência usar arquivos em .jsx para melhor performance do reactjs
#### 4- Criar seu repositório remoto no github
#### 5- Clonar/conectar dentro da pasta criada no passo 2 utilizando o comando git remote add origin seuLinkDoGithub
#### 6- Para verificar se foi conectado basta dar o comando git remote -v e vai aparecer o nome do repositório remoto no terminal, caso não apareça é bom rever algum dos comandos


###### Nesse projeto é utilizado componentes pré-processados do Material UI (MUI) 

####### Site do MUI: https://mui.com/pt/

####### Atributos especificos do MUI que utilizei nesse projeto: 

####### Container: https://mui.com/pt/components/container/#main-content

####### Typography: https://mui.com/pt/components/typography/#main-content

####### Button: https://mui.com/pt/components/buttons/#main-content

####### Switch: https://mui.com/pt/api/switch-unstyled/#main-content

####### FormControlLabel: https://mui.com/pt/api/form-control-label/#main-content



######## Partiu codar? Caso precise de ajuda com algo, é só falar.. Vamos nessa!


#### OBS: Ao utilizar o estado inicial dentro do userEffect, o mesmo sofrerá atualizações logo após as mudanças lançadas no setState, com isso sofrerá um pequeno delay.
Video referência: https://www.youtube.com/watch?v=6id-PtDSnmw&ab_channel=CFBCursos

######### É recomendado que as funcionalidades e lógicas sejam feitas em outro arquivo.js que não o que será usado em si, pois assim, facilitará a reutilização dos componentes funcionais. 

##### Breve descrição do projeto:

###### A função aoEnviarForm está servido para renderizar os dados no console do browser. 

###### A função validarCPF contém a lógica de validação do input de texto CPF, onde é preciso conter 11 digitos para que seja validado, justamente por usar !== 11 significa que for diferente de 11, é para estar 'errado', pois assim facilita, e acredito ser mais interessante do que fazer >= ou <=, mas vai de pessoa pra pessoa! 

###### O estado de novidades e promoções começam como falso, e é utilizado o atributo onChange para validar sua alteração de estado, levando os dados também para o console do browser. 

###### Esse projeto é relativamente 'simples', e a ideia é realmente praticar, rever, absorver, entender, e utilizar de funcionalidades básicas que são utilizadas em quase 100% dos sites e empresas. 

Espero que esse projeto e post tenha te ajudado de alguma forma, por favor deixe seus comentários, criticas construitivas e elogios!! 

Até breve, 

Liliane Soares
