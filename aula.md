## Linguagem de programação
 - É a maneira de dar instruçao ao computador (como um lego, você irá utilizar peças para criar algoritmos, ou seja, resolver problemas)


## Algoritmos -> sequência de passos lógicos e finita, para resolução de um problema.

## Peças de uma linguagem
    -Comentários; {usa-se // no começo}
    -Declaração de variáveis (cons, let);
    Operações (atribuição, concatenação, metemáticos, lógicos);
    -Tipos de dados (string, number, boolean);
    -Estrutura de dados (functions, object, array);
    -Controle de fluxo (if, else);
    -Estrutura de repetição (for, while)

// arrays são os conchetes []

# Fases da resolução de um problema
    -Coletar dados;
    -Processar os dados (manipular, alterar...);
    -Apresentar os dados
    Exemplo: "console.log"

// No terminal, para executar, digitar "node index.js"


## Tipos de dados
    -Strings (´, `, ",);
    -Number (2, 1, .3);
    -Function

//JavaScript transforma praticamente todos os tipos de dados em objetos
// Métodos são funções de um objeto
## Escopo e variáveis
    -Variáveis globais e locais;
    -Constantes

// Escopo (são as chaves {}): São um grupo. O que é escrito fora é global e o que é escrito fora é local

// Variável: é uma caixa com uma informação na qual irei guardar para "usar mais tarde". Exemplo: let mensagem = "olá, mundo!"

## Operadores
    -Operador de atribuição de valor (=);
    -Operador de concatenação (+);
    -Operadores de comparação: == (igual), != (diferente), <=, >=, >, <;
    -Spread operator (...)

### Arrays:
    -Uma lista que contem qualquer tipo de dado;
    -Métodos de array push (find, forEach, filter), HOF (Higher Order Functions)

### Objetos:
    -Atributos e metodos;
    -Criação e manipulação de objetos;
    -Acesso a propriedades do objeto


// Exemplo: let metas = ["mayk", "alô"]
console.log(metas[1] + "," + "metas[0])
O resultado será: alô, mayk

// Chaves {} seguidas após atibuição de valor = significa que está adicionando um objeto
Exemplo: let meta {
    value: "ler um livro por mês";
    checked: false 
}

// Método está dentro de um objeto e função está fora
Exemplo de função: const criarMeta = () => {}


# Estrutura de repetição
    -While;
    Exemplo: const start = () => {
        let count = 1
        while(count <= 10>){
            console.log(count)
            count = count + 1
        }
    }
    start {}

// Return para a execução da função

# Condicionais
    -Switch

## Módulos em Node.js:
    -Importação de módulos (require, CommonJS)
    -Biblioteca 'inquier' para criar prompts interativos

// Para instalação, digitar no terminal: npm install inquier
// Para selecionar a pasta que deseja utilizar: const { select } = require('@inquier/prompts')


// Quando a função tiver AWAIT, também precisará ter ASYNC

## Json
    -Javascript Object Notation (.json)
    -JSON.parse(): transforma de JSON para JS
    -JSON.stringify(): transforma de JS para json
## Programação assíncrona e Promises:
    -Uso de funções assíncronas (assync/await)