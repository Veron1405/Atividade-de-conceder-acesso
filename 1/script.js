function verificarAcesso() {
    const cardNumberInput = document.getElementById("cardNumber");
    const resultadoElement = document.getElementById("resultado");
    const containerElement = document.getElementById("texto");
  
    const cardNumber = parseInt(cardNumberInput.value);
  
    if (cardNumber >= 1000 && cardNumber <= 1999) {
      resultadoElement.textContent = "Acesso total concedido.";
      containerElement.className = "container 'cor-total'";

    } else if (cardNumber >= 2000 && cardNumber <= 2999) {
      resultadoElement.textContent = "Acesso limitado concedido.";
      containerElement.className = "container 'cor-limited'";

    } else if (cardNumber > 3000) {
      resultadoElement.textContent = "Acesso negado.";
      containerElement.className = "container 'cor-denied'";

    } else (cardNumber < 1000) {
    resultadoElement.textContent = "Acesso negado.";
    containerElement.className = "container 'cor-denied'";
  
  }
  