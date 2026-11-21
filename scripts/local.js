const currentYearEl = document.querySelector("#current-year");
const lastModifiedEl = document.querySelector("#last-modified");

if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}

if (lastModifiedEl) {
  lastModifiedEl.textContent = document.lastModified;
}

const temperatura = 10; // °C (valor estático correspondente ao HTML)
const velocidadeVento = 8; // km/h (valor estático correspondente ao HTML)

function calcularSensacaoTermica(temp, wind) {
  return Number((13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1));
}

const windChillEl = document.querySelector("#windchill-value");

if (windChillEl) {
  if (temperatura <= 10 && velocidadeVento > 4.8) {
    windChillEl.textContent = `${calcularSensacaoTermica(temperatura, velocidadeVento)} °C`;
  } else {
    windChillEl.textContent = "N/A";
  }
}