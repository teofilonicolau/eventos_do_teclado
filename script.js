/*Capaturamos os elementos do DOM que usremos,que servirão
para retornar um valor.Além disso efiniremos a variável
distanciaDaEsquerda,a qual representará a distncia entre
o elemento qudrado e a borda esquerda do elemento pai.*/


let keyText =  document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaDaEsquerda = 0;


/*Primeiro, definimos um evento do tipo keyup e declaramos uma 
arrow function no eventListener, que recebe o parâmetro e (evento).
Dessa forma:
Para entender melhor os eventos de teclado, usaremos a função console.log() para ver quais propriedades existem:

 

document.addEventListener("keyup", (e)=> {

  console.log(e);

})
Para entender melhor a diferença entre ambas propriedades,
usaremos dois console.log(). Um irá imprimir a propriedade
 key do evento e o outro, a propriedade code:
 	
document.addEventListener("keyup",
(e)=> {
  console.log(e.key);
  console.log(e.code);
})
Por exemplo, se quisermos exibir os valores das propriedades key e code
na nossa página, podemos chamar os elementos keyText e codeText, declarados
no arquivo script.js,e atribuir a propriedade innerText deles aos valores
das propriedades key e code respectivamente. Observe:

document.addEventListener("keyup", 
(e)=> {
  keyText.innerText = e.key;
  codeText.innerText = e.code;
})*/



document.addEventListener("keyup", (e)=>{
    keyText.innerText = e.key;
  codeText.innerText = e.code;
})
/*Para mover o elemento div com a classe quadrado no navegador,
começamos adicionando outro eventListener ao objeto Document, dessa 
vez usando o tipo de evento keydown.
document.addEventListener("keydown", (e) => {
})
Usaremos o evento keydown para poder continuar deslocando o elemento
ao manter apertada uma tecla.
Queremos que nosso quadrado se desloque para a direita ao apertar a
tecla da seta à direita, ou arrow right. Sabendo que o código desta
tecla é ArrowRight, podemos usar uma estrutura condicional na nossa
arrow function para verificar o valor do code do evento. Se o valor
for o mesmo que ArrowRight, podemos imprimir uma mensagem com console.log(*/


document.addEventListener("keydown", (e) => {
    if(e.code == "ArrowRight"){
        console.log("Apertou a seta à direita");
      }

})
/*Deslocar um elemento
Nesse momento, o elemento quadrado está a zero pixels de distância da borda
esquerda do seu elemento pai dele, o body. Para deslocá-lo dez pixels à direita,
no bloco de código da nossa estrutura condicional,
adicionamos dez ao valor atual da variável distanciaDaEsquerda
e imprimimos o seu o valor no terminal.
Após salvar as mudanças e voltar no navegador, um incremento de 10 
em 10 deve ser impresso no terminal cada vez que apertarmos a tecla da seta à direita.

document.addEventListener("keydown", (e) => {
    if(e.code == "ArrowRight"){
      distanciaDaEsquerda = distanciaDaEsquerda + 10
      console.log(distanciaDaEsquerda);
    }
  })

Agora, usaremos esse valor para deslocar o elemento quadrado. Para isso,
precisamos acessar a propriedade style da variável quadrado e a propriedade
left para definir a distância entre o elemento e a borda esquerda do seu elemento pai.*/


	
document.addEventListener("keydown", (e) => {
    if(e.code == "ArrowRight"){
      distanciaDaEsquerda = distanciaDaEsquerda + 10
      console.log(distanciaDaEsquerda);
   
      quadrado.style.left = distanciaDaEsquerda + "px"
    }
  })
