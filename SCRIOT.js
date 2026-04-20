// Paso 1: Seleccionar elementos del DOM con querySelector
const btnCalcular = document.querySelector('#btnCalcular');
const inputSalario = document.querySelector('#salarioBruto');
const divResultado = document.querySelector('#resultado');
const spanMonto = document.querySelector('#montoNeto');
const spanPorcentaje = document.querySelector('#porcentaje');

// Paso 2: Escuchar el evento click en el botón
btnCalcular.addEventListener('click', function () {

  // Paso 3: Obtener y validar el valor del input
  const salarioBruto = parseFloat(inputSalario.value);

  if (isNaN(salarioBruto) || salarioBruto <= 0) {
    alert('Por favor, introduce un salario bruto válido.');
    return;
  }

  // Calcular el porcentaje de retención (lógica simplificada de IRPF)
  let retencion;
  if (salarioBruto > 30000) {
    retencion = 0.20; // 20% para salarios superiores a 30.000€
  } else {
    retencion = 0.15; // 15% para salarios hasta 30.000€
  }

  // Calcular el neto anual y mensual
  const netoAnual = salarioBruto * (1 - retencion);
  const netoMensual = netoAnual / 12;

  // Paso 4: Manipular el DOM para mostrar el resultado
  spanMonto.textContent = netoMensual.toFixed(2);
  spanPorcentaje.textContent = (retencion * 100).toFixed(0);

  // Cambiar el color del texto según el monto neto mensual
  if (netoMensual >= 2000) {
    spanMonto.style.color = 'green';
  } else if (netoMensual >= 1200) {
    spanMonto.style.color = 'orange';
  } else {
    spanMonto.style.color = 'red';
  }

  // Mostrar el div resultado quitando la clase "hidden"
  divResultado.classList.remove('hidden');
});