function sortear() {
    const resultElement = document.getElementById("result");
    const numeros = [1, 2, 3, 4];
  
    const indiceSorteado = Math.floor(Math.random() * numeros.length);
  
    resultElement.style.animation = "flipOutX 0.5s";
  
    setTimeout(() => {

      resultElement.textContent = numeros[indiceSorteado];
  
      resultElement.style.animation = "flipInX 0.5s";
    }, 500);
  }
  
