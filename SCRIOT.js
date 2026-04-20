const boton = document.querySelector('#btnCalcular');

boton.addEventListener('click', function() {
  const salario = document.querySelector('#salarioBruto').value;

  let retencion;
  if (salario > 30000) {
    retencion = 20;
  } else {
    retencion = 15;
  }

  const neto = (salario * (1 - retencion / 100)) / 12;

  document.querySelector('#montoNeto').textContent = neto.toFixed(2);
  document.querySelector('#porcentaje').textContent = retencion;
  document.querySelector('#resultado').classList.remove('hidden');

  if (neto >= 2000) {
    document.querySelector('#montoNeto').style.color = 'green';
  } else {
    document.querySelector('#montoNeto').style.color = 'red';
  }
});