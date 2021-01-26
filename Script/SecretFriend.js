function amigoSecreto(nomes) {
  const nomesEmbaralhados = nomes.sort(ordenacao)

  function ordenacao() {
    return Math.random() - 0.5;
  }

  nomesEmbaralhados.forEach((nome, index) => {
    if (index == (nomesEmbaralhados.length - 1)) {
      return console.log(`${nome} saiu com ${nomesEmbaralhados[0]}`);
    }

    console.log(`${nome} saiu com ${nomesEmbaralhados[index + 1]}`);
  })
};

export default amigoSecreto;
