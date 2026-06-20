import { database, ref, push } from "./firebase.js";

const buttons = document.querySelectorAll(".buttons button");
const registrar = document.getElementById("registrar");

let previsao = "Brasil vence";

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    previsao = button.dataset.value;

  });

});

const ctx = document.getElementById("consensusChart");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Brasil", "Empate", "Escócia"],
    datasets: [{
      data: [65, 20, 15]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#ffffff"
        }
      }
    }
  }
});

registrar.addEventListener("click", async () => {

  const analista = document.getElementById("analista").value;

  if (!analista) {
    alert("Informe o nome do analista.");
    return;
  }

  try {

    await push(ref(database, "analises"), {
      analista,
      previsao,
      confronto: "Brasil vs Escócia",
      data: new Date().toISOString()
    });

    alert("Análise registrada com sucesso.");

  } catch (error) {

    console.error(error);

    alert("Erro ao registrar análise.");

  }

});