const perguntas = [
    {
      pergunta: "O que significa a sigla DOM em JavaScript?",
      respostas: [
        "Documento Original de Mídia",
        "Modelo de Objeto de Documento",
        "Desenvolvimento Orientado a Módulos",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é utilizada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "display()",
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var minhaVar;",
        "variavel minhaVar;",
        "declare minhaVar;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é utilizado para comparar igualdade de valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Java Syntax Object Notation",
        "JavaScript Object Notation",
        "Java Scripted Object Naming",
      ],
      correta: 1
    },
    {
      pergunta: "Como se faz um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 10; i++)",
        "loop (i = 0; i < 10; i++)",
        "while (i < 10) { i++ }",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Uma técnica de compressão de código",
        "A elevação de declarações para o topo do escopo",
        "Um tipo de animação em websites",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade da função 'parseInt()' em JavaScript?",
      respostas: [
        "Converter uma string em um número inteiro",
        "Arredondar um número decimal para o inteiro mais próximo",
        "Retornar a parte decimal de um número",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    quizItem.querySelector('dl').appendChild(dt)
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  }
  quizItem.querySelector('dl dt').remove()
  quiz.appendChild(quizItem)
  }
  