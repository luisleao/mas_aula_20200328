// Import stylesheets
import './style.css';

// Write Javascript code!

var xhttp = new XMLHttpRequest();


// * * * * * * * * * * * * * * JavaBasics * * * * * * * * * * * * * * 
// Comentario simples

/*
  Comentario de bloco
  Tudo que estiver dentro nao eh codigo
*/

// Variaveis e Constantes
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Olá mundo!</h1>`;
var nome = 'Fulano Leão'.toLowerCase();

// cada variavel ou constante possui metodos/funções específicas do tipo associado
if (nome.indexOf('leão') >= 0) {
  appDiv.innerHTML = '<h1>Olá Leão!</h1>';
} else {
  appDiv.innerHTML = '<h1>'+nome+', não te conheço!</h1>';
}

/*
  // Escopos principais do javascript
  navigator
  window
  document
*/



// Estruturas
// Criar condicoes
/*
  NO EXCEL
  = IF(TESTE; VERDADE; FALSO)

  NO CODIGO
  // Operações Lógicas (Boolean)
  - igualdade >>>> ==
  - diferença >>>> !=
  - maior     >>>> >
  - maior/igual >> >=
  - menor     >>>> <
  - menor/igual >>> <=


  // Tipos de Dados
  Texto/String >>>> 'Oi mundo!' ou "Oi mundo!" ou `Texto`
  Numero         >> 0 ou 0.05
  Booleano       >> true ou false (verdadeiro ou falso)

  // Tipos complexos
  Vetor          >> [ 1, 3, 5, 7 ]
                 >> [ 'segunda', 'terça', 'quarta', ...]

  var semana = [ 'segunda', 'terça', 'quarta', ...];
  semana[0];

  Dicionário     >> { 
    'nome': 'Leão',
    'idade': 38
  }

  var dic = { 
    'nome': 'Leão',
    'idade': 38
  }
  dic.nome  ou   dic['nome']

  
*/

// Criar repeticoes


// * * * * * * * * * * * * * * Dados Externos * * * * * * * * * *
// console.log('demo', document.getElementById("demo"));

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       appDiv.innerHTML = xhttp.responseText;
      // console.log(xhttp.responseText);

    }
};
/*
  GET: carrega dados do servidor
  POST: enviar dados para o servidor / atualizar elemento existente
  PUT: incluir um novo elemento no servidor
  DELETE: exclusão de elementos no servidor
  OPTIONS: não usado normalmente
*/
xhttp.open("GET", "https://pomber.github.io/covid19/timeseries.json", true);
xhttp.send();
