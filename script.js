addEventListener('load', () => app());

let dadosValores = [];
let dadosNomes = [];
let identificador = 0;


const iconPlus = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-dasharray="18" stroke-dashoffset="18" stroke-linecap="round" stroke-Edith="2"><path d="M12 5V19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="18;0"/></path><path d="M5 12H19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="18;0"/></path></g></svg>`;

const iconOpen = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(-90 12 12)"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 3V21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M21 12H7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="15;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M7 12L14 19M7 12L14 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"/></path></g></g></svg>`;

const iconClose= `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(-90 12 12) translate(24 0) scale(-1 1)"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 3V21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M21 12H7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="15;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M7 12L14 19M7 12L14 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"/></path></g></g></svg>`;
  

const iconGrafico =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="feBarChart0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="feBarChart1" fill="#8c8c8c"><path id="feBarChart2" d="M5 19h15a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v7Zm5-4a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0v9Zm2 0V8a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0Zm4-11a1 1 0 0 1 2 0v11a1 1 0 0 1-2 0V4Z"/></g></g></svg>`;

const iconMenu =`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#8c8c8c" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm-7 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 3 7.8zm14 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 17 7.8z"/></svg>`; 

const iconEdit =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21H21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="44" stroke-dashoffset="44" d="M7 17V13L17 3L21 7L11 17H7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.6s" values="44;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6L18 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"/></path></g></svg>`;


function app(){
   const modalBackground =   
  document.createElement("div");
  modalBackground.classList.add("d-flex", 
  "align-items-center", "glasseffect");
  modalBackground.style.height = "100vh";
  modalBackground.style.width = "100vw";
  modalBackground.style.position = "fixed"; 
  modalBackground.style.top = "0%";
  modalBackground.style.left = "0%";

  const modalCard = document.createElement("div");
  modalCard.id = "modalCard";
  modalCard.classList.add("card", "m-auto", 
  "bg-dark");
  modalCard.style.width = "90%";
  
  const modalHeader = document.createElement("div");
  modalHeader.classList.add("d-flex", "flex-row",  
  "justify-content-between");

  const modalTitulo = document.createElement("h5");
  modalTitulo.id = "titulo";
  modalTitulo.classList.add("card-title", 
  "text-white");
  modalTitulo.innerHTML = "Adicionar novo Grupo";
  const modalBtnFechar =  
  document.createElement("button");
  modalBtnFechar.classList.add("btn-close");


  const modalCorpo = document.createElement("div");
  modalCorpo.id = "modalCorpo";
  modalCorpo.classList.add("modal-body");


  const areaDados  = document.createElement("div");
  areaDados.classList.add("d-flex", "m-auto", 
  "flex-column", "justify-content-center", 
  "text-center");

  const inputNome  = 
  document.createElement("input");
  inputNome.style.width = "80%";
  inputNome.classList.add("m-auto", "mb-2");

  const inputValor = 
  document.createElement("input");
  inputValor.style.width = "80%";
  inputValor.type = "text";
  inputValor.classList.add("m-auto", "mb-2");

  const areaBtns   = document.createElement("div");
  areaBtns.classList.add("d-flex", "m-auto", 
  "justify-content-around", "mb-2", "mt-2");
  areaBtns.style.width = "100%";
  
  const btnPrimary = 
  document.createElement("button");
  btnPrimary.type ="button";
  btnPrimary.classList.add("btn", "btn-primary", 
  "rounded-circle");
  btnPrimary.style.padding ="1rem";
 
  const btnSecondary = 
  document.createElement("button");
  btnSecondary.type ="button";
  btnSecondary.classList.add("btn", "btn-secondary", 
  "rounded-circle");
  btnSecondary.style.padding ="1rem";

  const btnDanger = 
  document.createElement("button"); 
  btnDanger.type ="button";
  btnDanger.classList.add("btn", "btn-danger", 
  "rounded-circle");
  btnDanger.style.padding ="1rem"; 

  const btnSuccess = 
  document.createElement("button"); 
  btnSuccess.type ="button";
  btnSuccess.classList.add("btn", "btn-success",   
  "rounded-circle");
  btnSuccess.style.padding ="1rem"; 

  const btnWarning =  
  document.createElement("button");
  btnWarning.type ="button";
  btnWarning.classList.add("btn", "btn-warning", 
  "rounded-circle");
  btnWarning.style.padding ="1rem"; 


  const btnInfo = document.createElement("button"); 
  btnInfo.type ="button";
  btnInfo.classList.add("btn", "btn-info",
  "rounded-circle");
  btnInfo.style.padding ="1rem"; 

  const btnLight = document.createElement("button"); 
  btnLight.type ="button";
  btnLight.classList.add("btn", "btn-light", 
  "rounded-circle");
  btnLight.style.padding ="1rem";

  var btnAddDados =     
  document.createElement("button");
  btnAddDados.classList.add("btn", "btn-primary", 
  "m-auto", "mb-2", "mt-2");
  btnAddDados.textContent = "adicionar";
  btnAddDados.style.width = "50%";


  const navbar = document.createElement("nav");
  navbar.classList.add("d-flex", "flex-row", 
  "justify-content-between");

  const navbarTitulo = document.createElement("h5");
  navbarTitulo.textContent = "Cashbord";
  navbarTitulo.classList.add("text-center", 
  "text-white");
  navbarTitulo.style.padding = "15px";

  const navbarBotao = 
  document.createElement("button");
  navbarBotao.innerHTML = iconPlus;
  navbarBotao.style.border = "none";
  navbarBotao.style.background = "none";
  navbarTitulo.style.color = "rgb(51, 204, 204)";

  const dataAtual = new Date();
  const mesesDoAno = [
  "Janeiro", "Fevereiro","Março", "Abril", "Maio",           
  "Junho", "Julho", "Agosto", "Setembro", "Outubro", 
  "Novembro", "Dezembro"];
  let mes = mesesDoAno[ dataAtual.getMonth()]; 
  let mesAtual = mes; 
  let anoAtual = dataAtual.getFullYear();
  

  const painel = document.createElement("div");
  painel.classList.add("card", "m-auto", "bg-dark");
  painel.style.width = "90%";

  const corpo = document.createElement("div");
  corpo.classList.add("card-body");
  
  const header = document.createElement("h5");
  header.classList.add("card-title", "text-white", 
  "text-center");
  header.innerHTML = mesAtual + " " + anoAtual;
  
  const barras = document.createElement("div");
  barras.classList.add("progress", 
  "bg-body-tertiary");
  
  

  const linha = document.createElement("hr");
  linha.style.width = "80%";
  linha.classList.add("m-auto", "mt-3", "mb-2",  
  "text-white");

  var totalPainel = document.createElement("div");
  totalPainel.classList.add("text-center", 
  "text-white");
  totalPainel.textContent = "R$00,00";



  
const progressBar = document.createElement('div');
  progressBar.setAttribute('role', 'progressbar');
  progressBar.style.width = '0%';
  progressBar.setAttribute('aria-valuenow', '0');
  progressBar.setAttribute('aria-valuemin', '0');
  progressBar.setAttribute('aria-valuemax', '100');


  




  modalBackground.appendChild(modalCard);
  modalCard.appendChild(modalCorpo);
  modalCorpo.appendChild(modalHeader);
  areaDados.appendChild(inputNome);
  areaDados.appendChild(inputValor);
  areaDados.appendChild(areaBtns);
  areaBtns.appendChild(btnPrimary);
  areaBtns.appendChild(btnSecondary);
  areaBtns.appendChild(btnDanger);
  areaBtns.appendChild(btnSuccess);
  areaBtns.appendChild(btnWarning);
  areaBtns.appendChild(btnInfo);
  areaBtns.appendChild(btnLight);
  areaDados.appendChild(btnAddDados);
  modalCorpo.appendChild(areaDados);
  modalHeader.appendChild(modalTitulo);
  modalHeader.appendChild(modalBtnFechar);

  navbar.appendChild(navbarTitulo);
  navbar.appendChild(navbarBotao);
  document.body.appendChild(navbar);


  painel.appendChild(corpo);
  corpo.appendChild(header);
  corpo.appendChild(barras);
  corpo.appendChild(linha);
  corpo.appendChild(totalPainel);
  document.body.appendChild(painel);




  btnAddDados.addEventListener("click",   
   () => { 
   let objeto = {
      nome: inputNome.value,
      valor: inputValor.value
    };

    dadosValores.push(Number(objeto.valor));
    dadosNomes.push(objeto.nome);

    let soma = dadosValores.reduce(function  
      (acumulador, valorAtual) {
        return acumulador + valorAtual;
      }, 0);

     let name = objeto.nome;
     let price = Number(objeto.valor);

     const porcentagemIndividual = 
     (price / soma) * 100;
    

     let nomeFormatado = name.trim();
     let priceFormatado = 
     price.toLocaleString('pt-BR', 
      {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      

     let totalFormatado =  
    parseFloat(soma).toLocaleString('pt-BR', 
      {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      
      
      document.body.removeChild (modalBackground);

      totalPainel.textContent = totalFormatado;


      const progressBar =    
      document.createElement('div');
      progressBar.id = identificador;
      progressBar.setAttribute('role',  
      'progressbar');
      progressBar.style.width = 
      porcentagemIndividual + '%';
      progressBar.setAttribute('aria-valuenow', 
      porcentagemIndividual);
      progressBar.setAttribute('aria-valuemin', 
      '0');
      progressBar.setAttribute('aria-valuemax', 
      '100');
      progressBar.textContent = 
      porcentagemIndividual;
      

      

      const cardGrupo =  
      document.createElement("div");
      cardGrupo.classList.add("card-grupo", 
      "m-auto", "w-75", "mt-3", "border", "rounded", 
      "rounded-4", "bg-dark");
  
      const headerGrupo = 
      document.createElement("div");
      headerGrupo.classList.add("header-group", 
      "justify-content-around", "d-flex",  
      "flex-row", );

      const botao1Grupo = 
      document.createElement("button");
      botao1Grupo.id = "acordeon";
      botao1Grupo.classList.add("btn");
      botao1Grupo.innerHTML = iconOpen;
      botao1Grupo.style.background = "none";
 
      let nomeGrupo = document.createElement("h2");
      nomeGrupo.classList.add("text-center", 
      "text-white");
      nomeGrupo.textContent = nomeFormatado;
  
  
      const botao2Grupo = 
      document.createElement("button");
      botao2Grupo.id = "addTransacao";
      botao2Grupo.classList.add("btn");
      botao2Grupo.innerHTML = iconPlus;
      botao2Grupo.style.background = "none";

      const footerGrupo =  
      document.createElement("div");
      footerGrupo.classList.add("footer-grupo",  
      "justify-content-around", "d-flex", 
      "flex-flex-row", "justify-content-around");

      const botao3Grupo = 
      document.createElement("button");
      botao3Grupo.id = "abrirGrafico";
      botao3Grupo.classList.add("btn");
      botao3Grupo.innerHTML = iconGrafico;
      botao3Grupo.style.background = "none";
  
      let valorGrupo = document.createElement("h3");
      valorGrupo.id = "valorGrupo";
      valorGrupo.classList.add("text-center");
      valorGrupo.style.color = "rgb(140, 140, 140)";
      valorGrupo.textContent = priceFormatado;
      const botao4Grupo = 
      document.createElement("button");
      botao4Grupo.id = "menuGrupo";
      botao4Grupo.classList.add("btn");
      botao4Grupo.innerHTML = iconMenu;
      botao4Grupo.style.background = "none";

  

      


      
     btnPrimary.addEventListener("click", () => { 
       progressBar.classList.add("progress-bar", 
       "bg-primary");
       nomeGrupo.classList.add("text-center", 
       "text-primary")
     });

     btnSecondary.addEventListener("click", () => { 
       
       progressBar.classList.add("progress-bar", 
       "bg-secondary")

       nomeGrupo.classList.add("text-center",
       "text-secondary")
     });

  btnDanger.addEventListener("click", () => {
    
    progressBar.classList.add("progress-bar", 
    "bg-danger");
    nomeGrupo.classList.add("text-center",
    "text-danger")
  });

  btnSuccess.addEventListener("click", () => {
    
    progressBar.classList.add("progress-bar", 
    "bg-success");
    nomeGrupo.classList.add("text-center",
    "text-success")
  });

  btnWarning.addEventListener("click", () => {
    
    progressBar.classList.add("progress-bar", 
    "bg-warning");
    nomeGrupo.classList.add("text-center", 
    "text-warning")
  });

  btnInfo.addEventListener("click", () => {
   
    progressBar.classList.add("progress-bar", 
    "bg-info");
    nomeGrupo.classList.add("text-center",
    "text-info")
  });

  btnLight.addEventListener("click", () => {
  
    progressBar.classList.add("progress-bar", 
    "bg-light");
    nomeGrupo.classList.add("text-center",
    "text-light")
  });
      


      headerGrupo.appendChild(botao1Grupo);
      headerGrupo.appendChild(nomeGrupo);
      headerGrupo.appendChild(botao2Grupo);
      cardGrupo.appendChild(headerGrupo);
      footerGrupo.appendChild(botao3Grupo);
      footerGrupo.appendChild(valorGrupo);
      footerGrupo.appendChild(botao4Grupo);
      cardGrupo.appendChild(footerGrupo);

      barras.appendChild(progressBar);
      document.body.appendChild(cardGrupo)

   
  }); 


  
modalBtnFechar.addEventListener("click", () =>  
  document.body.removeChild (modalBackground));


  window.addEventListener('click', (event) =>
    event.target == modalBackground && 
    document.body.removeChild (modalBackground)
   ); 
  
  navbarBotao.addEventListener("click", 
    () =>  
       document.body.appendChild(modalBackground)
  );





};