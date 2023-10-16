// Obtener elementos del DOM
const playerOptions = document.querySelectorAll('.main__player .options button');
const machineOptions = document.querySelectorAll('.main__machine .options button');
const resultados = document.getElementById('resultados');

// Agregar evento clic a los botones del jugador
playerOptions.forEach((button) => {
  button.addEventListener('click', () => {
    // Generar número aleatorio para la opción de la máquina
    const machineOption = Math.floor(Math.random() * 3) + 1;

    // Asignar opciones seleccionadas a variables
    const playerOption = button.id.split('--')[1];
    let result;

    // Comparar opciones seleccionadas
    if (playerOption === 'rock') {
      if (machineOption === 1) {
        result = 'Empate';
      } else if (machineOption === 2) {
        result = 'Perdiste';
      } else {
        result = 'Ganaste';
      }
    } else if (playerOption === 'papel') {
      if (machineOption === 1) {
        result = 'Ganaste';
      } else if (machineOption === 2) {
        result = 'Empate';
      } else {
        result = 'Perdiste';
      }
    } else {
      if (machineOption === 1) {
        result = 'Perdiste';
      } else if (machineOption === 2) {
        result = 'Ganaste';
      } else {
        result = 'Empate';
      }
    }

    // Mostrar resultado en la sección de resultados
    resultados.textContent = `${result}\n`;
    player.textContent = `Elegiste ${playerOption}\n`;
    machine.textContent = `La máquina eligió ${machineOptions[machineOption - 1].textContent}.`;
  });
});


