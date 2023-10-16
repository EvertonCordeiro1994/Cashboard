addEventListener('load', function(e) {
  console.log('painel principal ');
  criarNavbar()
  criarPainel() 
});

var cor1 = "rgb(51, 204, 204)";


var iconPlus = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-dasharray="18" stroke-dashoffset="18" stroke-linecap="round" stroke-Edith="2"><path d="M12 5V19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="18;0"/></path><path d="M5 12H19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="18;0"/></path></g></svg>`;


function funcaoModal() {
  var modalBackground =  document.createElement("div");
  modalBackground.classList.add("d-flex", "align-items-center", "glasseffect");
  modalBackground.style.height = "100vh";
  modalBackground.style.width = "100vw";
  modalBackground.style.position = "fixed"; 
  modalBackground.style.top = "0%";
  modalBackground.style.left = "0%";

  var modalCard = document.createElement("div");
  modalCard.id = "modalCard";
  modalCard.classList.add("card", "m-auto");
  modalCard.style.width = "90%";
  
  var modalHeader = document.createElement("div");
  modalHeader.classList.add("d-flex", "flex-row", "justify-content-between");

  var modalTitulo = document.createElement("h5");
  modalTitulo.id = "titulo";
  modalTitulo.classList.add("card-title");
  modalTitulo.innerHTML = "Adicionar novo Grupo";

  var modalCorpo = document.createElement("div");
  modalCorpo.id = "modalCorpo";
  modalCorpo.classList.add("modal-body");
  var modalFooter = document.createElement("div");
  
  var modalBtnFechar = document.createElement("button");
  modalBtnFechar.classList.add("btn-close");
  
  modalBtnFechar.addEventListener("click", 
    () => { 
      console.log("btn fechar funcionando")
      document.body.removeChild (modalBackground);
     });

  modalBackground.appendChild(modalCard);
  modalCard.appendChild(modalCorpo);
  modalCorpo.appendChild(modalHeader);
  modalHeader.appendChild(modalTitulo);
  modalHeader.appendChild(modalBtnFechar);
  document.body.appendChild(modalBackground);

  window.addEventListener('click', function(event) {
    if (event.target == modalBackground) {
      document.body.removeChild (modalBackground);
    }
  }); 
 };




function criarNavbar(){
  var navbar = document.createElement("nav");
  navbar.classList.add("d-flex", "flex-row", "justify-content-between")
  var navbarTitulo = document.createElement("h5");
  navbarTitulo.textContent = "Cashbord";
  navbarTitulo.classList.add("text-center", "text-white");
  navbarTitulo.style.padding = "15px";
  

  var navbarBotao = document.createElement("button");
  navbarBotao.innerHTML = iconPlus;
  navbarBotao.style.border = "none";
  navbarBotao.style.background = "none";
  navbarTitulo.style.color = cor1;

  navbar.appendChild(navbarTitulo);
  navbar.appendChild(navbarBotao);
  document.body.appendChild(navbar);

   navbarBotao.addEventListener("click", 
   function (){  
     console.log("botao navbar funcionando");
      funcaoModal();
      dados();
    });



};



function criarPainel(){

  const dataAtual = new Date();
  const mesesDoAno = [
  "Janeiro", "Fevereiro","Março", "Abril", "Maio",           
  "Junho", "Julho", "Agosto", "Setembro", "Outubro", 
  "Novembro", "Dezembro"];
  const mes = mesesDoAno[ dataAtual.getMonth()]; 
  const mesAtual = mes; 
  const anoAtual = dataAtual.getFullYear();
  

  var painel = document.createElement("div");
  painel.id = "painel";
  painel.classList.add("card", "m-auto", "bg-dark");
  painel.style.width = "90%";

  var corpo = document.createElement("div");
  corpo.id = "corpoPainel";
  corpo.classList.add("card-body");
  
  var header = document.createElement("h5");
  header.id = "titulo";
  header.classList.add("card-title", "text-white", "text-center");
  header.innerHTML = mesAtual + " " + anoAtual;
  
  var barras = document.createElement("div");
  barras.classList.add("progress", "bg-body-tertiary");
  barras.id = "localBarras";

 

  var linha = document.createElement("hr");
  linha.style.width = "80%";
  linha.classList.add("m-auto", "mt-3", "mb-2",  "text-white");


  var soma = document.createElement("div");
  soma.classList.add("text-center", "text-white");
  soma.textContent = "R$00,00";


  

  painel.appendChild(corpo);
  corpo.appendChild(header);
  corpo.appendChild(barras);
  corpo.appendChild(linha);
  corpo.appendChild(soma);
  document.body.appendChild(painel);

  
};




function addBarra(){
  var localBarra = document.getElementById("localBarra");

  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar bg-info';
  progressBar.setAttribute('role', 'progressbar');
  progressBar.style.width = '20%';
  progressBar.setAttribute('aria-valuenow', '20');
  progressBar.setAttribute('aria-valuemin', '0');
  progressBar.setAttribute('aria-valuemax', '100');

  localBarra.appendChild(progressBar);
};




function criarGrupo() {
   var nome = "MXRF11";
   var valor = "25";
   var cor = "#ffffff";
   var nomeFormatado = nome.trim();
   var valorFormatado = Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2});

   var iconOpen = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(-90 12 12)"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 3V21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M21 12H7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="15;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M7 12L14 19M7 12L14 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"/></path></g></g></svg>`;

   var iconClose= `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(-90 12 12) translate(24 0) scale(-1 1)"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 3V21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M21 12H7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="15;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M7 12L14 19M7 12L14 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"/></path></g></g></svg>`;
  

    var iconGrafico =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="feBarChart0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="feBarChart1" fill="#8c8c8c"><path id="feBarChart2" d="M5 19h15a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v7Zm5-4a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0v9Zm2 0V8a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0Zm4-11a1 1 0 0 1 2 0v11a1 1 0 0 1-2 0V4Z"/></g></g></svg>`;

    var iconMenu =`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#8c8c8c" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm-7 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 3 7.8zm14 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 17 7.8z"/></svg>`; 

    var iconEdit =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21H21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="44" stroke-dashoffset="44" d="M7 17V13L17 3L21 7L11 17H7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.6s" values="44;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6L18 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"/></path></g></svg>`;

  
  var card = document.createElement("div");
  card.classList.add("card-grupo", "m-auto", "w-75", "mt-3", "border", "rounded", "rounded-4");
  card.style.backgroundColor = "rgb(43, 48, 53)";


  var header = document.createElement("div");
  header.classList.add("header-grupo", "d-flex", "flex-row", "justify-content-around");

  
  var botao1 = document.createElement("button");
  botao1.id = "acordeon";
  botao1.classList.add("btn");
  botao1.innerHTML = iconOpen;
  botao1.style.background = "none";

  
  var nome = document.createElement("h2");
  nome.id = "nomeGrupo";
  nome.classList.add("text-center");
  nome.textContent = nomeFormatado;
  nome.style.color = "#ffffff";
  
  var botao2 = document.createElement("button");
  botao2.id = "addTransacao";
  botao2.classList.add("btn");
  botao2.innerHTML = iconPlus;
  botao2.style.background = "none";



  var footer = document.createElement("div");
  footer.classList.add("footer-grupo", "d-flex", "flex-flex-row", "justify-content-around");

  
  var botao3 = document.createElement("button");
  botao3.id = "abrirGrafico";
  botao3.classList.add("btn");
  botao3.innerHTML = iconGrafico;
  botao3.style.background = "none";
  
  var valor = document.createElement("h3");
  valor.id = "valorGrupo";
  valor.classList.add("text-center");
  valor.textContent = valorFormatado;
  valor.style.color = "rgb(140, 140, 140)";
  
  var botao4 = document.createElement("button");
  botao4.id = "menuGrupo";
  botao4.classList.add("btn");
  botao4.innerHTML = iconMenu;
  botao4.style.background = "none";



  header.appendChild(botao1);
  header.appendChild(nome);
  header.appendChild(botao2);
  card.appendChild(header);

  footer.appendChild(botao3);
  footer.appendChild(valor);
  footer.appendChild(botao4);
  card.appendChild(footer);
  
  document.body.appendChild(card);
};


function dados() {
  var areaDados  = document.createElement("div");
  var inputNome  = document.createElement("input");
  var inputValor = document.createElement("input");
  var areaBtns   = document.createElement("div");
  
  var btnPrimary = document.createElement("button");
  btnPrimary.type ="button";
  btnPrimary.classList.add("btn", "btn-primary");

  var btnSecondary = document.createElement("button");
 btnSecondary.type ="button";
 btnSecondary.classList.add("btn", "btn-secondary"); 


 var btnDanger = document.createElement("button"); 
 btnSecondary.type ="button";
 btnSecondary.classList.add("btn", "btn-danger"); 

 var btnSuccess = document.createElement("button"); 
 btnSecondary.type ="button";
 btnSecondary.classList.add("btn", "btn-success"); 

var btnWarning = document.createElement("button");
 btnSecondary.type ="button";
 btnSecondary.classList.add("btn", "btn-warning"); 


 var btnInfo = document.createElement("button"); 
 btnSecondary.type ="button";
 btnSecondary.classList.add("btn", "btn-info"); 

 var btnLight = document.createElement("button"); 
 btnSecondary.type ="button";
 btnSecondary.classList.add("btn", "btn-light"); 






  var btnDados =     
  document.createElement("button");
  btnDados.textContent = "adicionar";
  
  areaDados.appendChild(inputNome);
  areaDados.appendChild(inputValor);
  areaDados.appendChild(btnDados);
  modalCorpo.appendChild(areaDados);

  btnDados.addEventListener("click", 
    () =>  criarGrupo()
    );
 };

