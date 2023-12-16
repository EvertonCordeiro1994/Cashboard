let nome = ["AÇÕES", "BDRs", "ETFs", "FIIs", "CDB", "CRIPTO"];
let quantia    = [63.33, 76.03, 10.79, 68.84, 77.39, 10.20];
let attQuantia = [67.52, 78.33, 10.77, 67.22, 77.41, 11.43]

document.querySelector(".hamburger").addEventListener("click", () => document.querySelector(".hamburger").classList.toggle("is-active"));

let ctx = document.getElementById('meuGrafico').getContext('2d');

let myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: nome,
    datasets: [{
      data: attQuantia,
      backgroundColor: [
        '#ff6384',
        '#36a2eb',
        '#ffce56',
        '#4bc0c0',
        '#9966ff',
        '#ff0000'
      ],
    }]
  },
  options: {
    legend: { display: false }
  }
});

let calcularPorcentagens = () => {
  let totalQuantia = quantia.reduce((acc, value) => acc + value, 0);
  return quantia.map(value => (value / totalQuantia) * 100);
};


let atualizarTabela = () => {
  let porcentagens = calcularPorcentagens();

  nome.forEach((nome, i) => {
    let tr = document.createElement("tr");
    tr.innerHTML =
      `<th scope="row">${nome}</th>
        <td>${Number(attQuantia[i]).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}</td>
        <td>${porcentagens[i].toFixed(2)}%</td>`;
    document.querySelector('#listaCarteira').appendChild(tr);
  });

  let totalQuantia = attQuantia.reduce((acc, value) => acc + value, 0);
  document.querySelector('#valorPatrimonio').textContent = `${totalQuantia.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
};

nome.forEach((nome, i) => {
  let por = Number(((attQuantia[i] - quantia[i])/attQuantia[i])*100).toFixed(2)
  
  let tr = document.createElement("tr");
  if(por >= 0) {
    tr.innerHTML = `<th scope="row">${nome}</th>
        <td class="text-success">
         <iconify-icon icon="ph:arrow-up-bold" style="color: green;"></iconify-icon>
        ${por}% </td>`;
    }else{

  tr.innerHTML =   `<th scope="row">${nome}</th>
        <td class="text-danger">
         <iconify-icon icon="ph:arrow-up-bold" style="color: red;" rotate="180deg"></iconify-icon>
        ${por}% </td>`;

    };

  document.querySelector('#listaVariacao').appendChild(tr);
});

let valorBruto = Number(attQuantia.reduce((acc, value) => acc + value, 0));
let valorAportado = Number(quantia.reduce((acc, value) => acc + value, 0));
let valorizacao = ((valorBruto - valorAportado) / valorAportado) * 100;

let listaResumo = document.createElement("tr");
listaResumo.innerHTML =
  `<td>${Number(valorBruto).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}</td>
        <td >${Number(valorAportado).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}</td>
        <td class="text-success"><iconify-icon icon="line-md:arrow-up" style="color: green;"></iconify-icon>${valorizacao.toFixed(2)}% </td>`;
document.querySelector('#listaResumo').appendChild(listaResumo);


atualizarTabela();