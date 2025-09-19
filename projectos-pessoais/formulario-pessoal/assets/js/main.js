const paises = [
  "Portugal", "Brasil", "Espanha", "França", "Itália", "Estados Unidos", "Canadá",
  "Reino Unido", "Alemanha", "Japão", "China", "Índia", "Austrália", "Argentina", "México",
  "Chile", "Colômbia", "Peru", "Angola", "Moçambique", "Cabo Verde", "Suécia", "Noruega",
  "Dinamarca", "Finlândia", "Holanda", "Bélgica", "Suíça", "Áustria", "Grécia"
  // … até 100
];

const selectPais = document.getElementById("pais");

paises.forEach(p => {
  let opt = document.createElement("option");
  opt.value = p;
  opt.textContent = p;
  selectPais.appendChild(opt);
});



const dados = {
  "Portugal": {
    "Aveiro": [
    "Águeda","Albergaria-a-Velha","Anadia","Arouca","Aveiro","Castelo de Paiva","Espinho","Estarreja","Ílhavo","Mealhada","Murtosa","Oliveira de Azeméis","Oliveira do Bairro","Ovar","Santa Maria da Feira","São João da Madeira","Sever do Vouga","Vagos","Vale de Cambra"
  ],
  "Beja": [
    "Aljustrel","Almodôvar","Alvito","Barrancos","Beja","Castro Verde","Cuba","Ferreira do Alentejo","Mértola","Moura","Odemira","Ourique","Serpa","Vidigueira"
  ],
  "Braga": [
    "Amares","Barcelos","Braga","Cabeceiras de Basto","Celorico de Basto","Esposende","Fafe","Guimarães","Póvoa de Lanhoso","Terras de Bouro","Vieira do Minho","Vila Nova de Famalicão","Vila Verde","Vizela"
  ],
  "Bragança": [
    "Alfândega da Fé","Bragança","Carrazeda de Ansiães","Freixo de Espada à Cinta","Macedo de Cavaleiros","Miranda do Douro","Mirandela","Mogadouro","Torre de Moncorvo","Vila Flor","Vimioso","Vinhais"
  ],
  "Castelo Branco": [
    "Belmonte","Castelo Branco","Covilhã","Fundão","Idanha-a-Nova","Oleiros","Penamacor","Proença-a-Nova","Sertã","Vila de Rei","Vila Velha de Ródão"
  ],
  "Coimbra": [
    "Arganil","Cantanhede","Coimbra","Condeixa-a-Nova","Figueira da Foz","Góis","Lousã","Mira","Miranda do Corvo","Montemor-o-Velho","Oliveira do Hospital","Pampilhosa da Serra","Penacova","Penela","Soure","Tábua","Vila Nova de Poiares"
  ],
  "Évora": [
    "Alandroal","Arraiolos","Borba","Estremoz","Évora","Montemor-o-Novo","Mora","Mourão","Portel","Redondo","Reguengos de Monsaraz","Vendas Novas","Viana do Alentejo","Vila Viçosa"
  ],
  "Faro": [
    "Albufeira","Alcoutim","Aljezur","Castro Marim","Faro","Lagoa","Lagos","Loulé","Monchique","Olhão","Portimão","São Brás de Alportel","Silves","Tavira","Vila do Bispo","Vila Real de Santo António"
  ],
  "Guarda": [
    "Aguiar da Beira","Almeida","Celorico da Beira","Figueira de Castelo Rodrigo","Fornos de Algodres","Gouveia","Guarda","Manteigas","Mêda","Pinhel","Sabugal","Seia","Trancoso","Vila Nova de Foz Côa"
  ],
  "Leiria": [
    "Alcobaça","Alvaiázere","Ansião","Batalha","Bombarral","Caldas da Rainha","Castanheira de Pera","Figueiró dos Vinhos","Leiria","Marinha Grande","Nazaré","Óbidos","Pedrógão Grande","Peniche","Pombal","Porto de Mós"
  ],
  "Lisboa": [
    "Alenquer","Amadora","Arruda dos Vinhos","Azambuja","Cadaval","Cascais","Lisboa","Loures","Lourinhã","Mafra","Odivelas","Oeiras","Sintra","Sobral de Monte Agraço","Torres Vedras","Vila Franca de Xira"
  ],
  "Portalegre": [
    "Alter do Chão","Arronches","Avis","Campo Maior","Castelo de Vide","Crato","Elvas","Fronteira","Gavião","Marvão","Monforte","Nisa","Ponte de Sor","Portalegre","Sousel"
  ],
  "Porto": [
    "Amarante","Baião","Felgueiras","Gondomar","Lousada","Maia","Marco de Canaveses","Matosinhos","Paços de Ferreira","Paredes","Penafiel","Porto","Póvoa de Varzim","Santo Tirso","Valongo","Vila do Conde","Vila Nova de Gaia","Trofa"
  ],
  "Santarém": [
    "Abrantes","Alcanena","Almeirim","Alpiarça","Benavente","Cartaxo","Chamusca","Constância","Coruche","Entroncamento","Ferreira do Zêzere","Golegã","Mação","Ourém","Rio Maior","Salvaterra de Magos","Santarém","Sardoal","Tomar","Torres Novas","Vila Nova da Barquinha"
  ],
  "Setúbal": [
    "Alcácer do Sal","Alcochete","Almada","Barreiro","Grândola","Moita","Montijo","Palmela","Santiago do Cacém","Seixal","Sesimbra","Setúbal","Sines"
  ],
  "Viana do Castelo": [
    "Arcos de Valdevez","Caminha","Melgaço","Monção","Paredes de Coura","Ponte da Barca","Ponte de Lima","Valença","Viana do Castelo","Vila Nova de Cerveira"
  ],
  "Vila Real": [
    "Alijó","Boticas","Chaves","Mesão Frio","Mondim de Basto","Montalegre","Murça","Peso da Régua","Ribeira de Pena","Sabrosa","Santa Marta de Penaguião","Valpaços","Vila Pouca de Aguiar","Vila Real"
  ],
  "Viseu": [
    "Armamar","Carregal do Sal","Castro Daire","Cinfães","Lamego","Mangualde","Moimenta da Beira","Mortágua","Nelas","Oliveira de Frades","Penalva do Castelo","Penedono","Resende","Santa Comba Dão","São João da Pesqueira","São Pedro do Sul","Sátão","Sernancelhe","Tabuaço","Tarouca","Tondela","Vila Nova de Paiva","Viseu","Vouzela"
  ],
  "Açores": [
    "Angra do Heroísmo","Calheta (São Jorge)","Corvo","Horta","Lagoa","Lajes das Flores","Lajes do Pico","Madalena","Nordeste","Ponta Delgada","Povoação","Praia da Vitória","Ribeira Grande","Santa Cruz da Graciosa","Santa Cruz das Flores","São Roque do Pico","Velas","Vila do Porto","Vila Franca do Campo"
  ],
  "Madeira": [
    "Calheta","Câmara de Lobos","Funchal","Machico","Ponta do Sol","Porto Moniz","Porto Santo","Ribeira Brava","Santa Cruz","Santana","São Vicente"
  ]
  },

  "Brasil": {
    "Acre": [],
    "Alagoas": [],
    "Amapá": [],
    "Amazonas": [],
    "Bahia": [],
    "Ceará": [],
    "Distrito Federal": [],
    "Espírito Santo": [],
    "Goiás": [],
    "Maranhão": [],
    "Mato Grosso": [],
    "Mato Grosso do Sul": [],
    "Minas Gerais": [],
    "Pará": [],
    "Paraíba": [],
    "Paraná": [],
    "Pernambuco": [],
    "Piauí": [],
    "Rio de Janeiro": [
      "Rio de Janeiro","Niterói","São Gonçalo","Duque de Caxias","Nova Iguaçu","Petrópolis","Volta Redonda","Macaé","Campos dos Goytacazes","Teresópolis","Angra dos Reis","Itaboraí","Cabo Frio","Magé","Queimados","Barra Mansa","Resende","Nilópolis","São João de Meriti","Belford Roxo"
    ],
    "Rio Grande do Norte": [],
    "Rio Grande do Sul": [],
    "Rondônia": [],
    "Roraima": [],
    "Santa Catarina": [],
    "São Paulo": [
      "São Paulo","Campinas","Guarulhos","Santos","São Bernardo do Campo","São Caetano do Sul","Santo André","Osasco","Ribeirão Preto","Sorocaba","Jundiaí","São José dos Campos","Mogi das Cruzes","Diadema","Taboão da Serra","Suzano","Piracicaba","Americana","Araraquara","Bauru"
    ],
    "Sergipe": [],
    "Tocantins": []
  }

};

const paisSelect = document.getElementById("pais");
const distritoSelect = document.getElementById("distrito");
const concelhoSelect = document.getElementById("concelho");

paisSelect.addEventListener("change", () => {
  const pais = paisSelect.value;
  distritoSelect.innerHTML = '<option value="">-- selecione --</option>';
  concelhoSelect.innerHTML = '<option value="">-- selecione --</option>';
  concelhoSelect.disabled = true;

  if (pais && dados[pais]) {
    distritoSelect.disabled = false;
    Object.keys(dados[pais]).forEach(distrito => {
      let opt = document.createElement("option");
      opt.value = distrito;
      opt.textContent = distrito;
      distritoSelect.appendChild(opt);
    });
  } else {
    distritoSelect.disabled = true;
  }
});

distritoSelect.addEventListener("change", () => {
  const pais = paisSelect.value;
  const distrito = distritoSelect.value;
  concelhoSelect.innerHTML = '<option value="">-- selecione --</option>';

  if (distrito && dados[pais][distrito]) {
    concelhoSelect.disabled = false;
    dados[pais][distrito].forEach(concelho => {
      let opt = document.createElement("option");
      opt.value = concelho;
      opt.textContent = concelho;
      concelhoSelect.appendChild(opt);
    });
  } else {
    concelhoSelect.disabled = true;
  }
});


//CATEGORIAS CARTA CONDUÇÃO

// Seleciona todos os checkboxes
document.querySelectorAll(".categoria-check").forEach(check => {
    check.addEventListener("change", function () {
        // Seleciona os inputs irmãos (datas de emissão e validade)
        const li = this.closest("li");
        const emissao = li.querySelector(".emissao");
        const validade = li.querySelector(".validade");

        if (this.checked) {
            emissao.disabled = false;
            validade.disabled = false;
        } else {
            emissao.disabled = true;
            validade.disabled = true;
            emissao.value = "";
            validade.value = "";
        }
    });
});


// Máscara para o campo de telefone
const input = document.querySelector("#telefone");

    const iti = window.intlTelInput(input, {
      initialCountry: "pt", // começa em Portugal 🇵🇹
      preferredCountries: ["pt", "br", "es"], // favoritos
      separateDialCode: true, // mostra código separado
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.7/build/js/utils.js" // máscara e validação
    });

    // Para testar saída
    document.querySelector("form").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Número internacional: " + iti.getNumber());
    });

    // SITUAÇÃO PROFISSIONAL / ESCOLAR
    const profissaoEstudoSelect = document.getElementById("profissao-estudo");
    profissaoEstudoSelect.addEventListener("change", function() {
      const valor = this.value;
      const liProfissao = document.getElementById("li-profissao");
      const liEstudo = document.getElementById("li-estudo");
      if (valor === "trabalha") {
        liProfissao.style.display = "block";
        liEstudo.style.display = "none";
      } else if (valor === "estuda") {
        liProfissao.style.display = "none";
        liEstudo.style.display = "block";
      } else {
        liProfissao.style.display = "none";
        liEstudo.style.display = "none";
      }
    });

    //PROFISSÃO OU ESTUDO

    // Garante que o DOM está pronto
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos
    const selectProfissao = document.getElementById("profissao-estudo");
    const inputLocalTrabalho = document.getElementById("local-trabalho");
    const inputProfissao = document.getElementById("profissao");
    const inputLocalEstudo = document.getElementById("local-estudo");
    const inputNivelEscolaridade = document.getElementById("nivel-escolaridade");

    // Função para atualizar os campos
    function atualizarCampos() {
        const valor = selectProfissao.value;

        if (valor === "Trabalhador") {
            inputLocalTrabalho.disabled = false;
            inputProfissao.disabled = false;
            inputLocalEstudo.disabled = true;
            inputNivelEscolaridade.disabled = true;
        } else if (valor === "Estudante") {
            inputLocalTrabalho.disabled = true;
            inputProfissao.disabled = true;
            inputLocalEstudo.disabled = false;
            inputNivelEscolaridade.disabled = false;
        } else if (valor === "Estudante/Trabalhador") {
            inputLocalTrabalho.disabled = false;
            inputProfissao.disabled = false;
            inputLocalEstudo.disabled = false;
            inputNivelEscolaridade.disabled = false;
        } else {
            // Caso não selecione nada
            inputLocalTrabalho.disabled = true;
            inputProfissao.disabled = true;
            inputLocalEstudo.disabled = true;
            inputNivelEscolaridade.disabled = true;
        }
    }

    // Dispara a função quando o select muda
    selectProfissao.addEventListener("change", atualizarCampos);

    // Opcional: atualiza os campos ao carregar a página
    atualizarCampos();
});


// Contador de caracteres para o campo de texto
document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("hobbies");
  const contador = document.getElementById("contador");
  const limite = textarea.getAttribute("maxlength");

  textarea.addEventListener("input", function () {
    const usado = textarea.value.length;
    contador.textContent = `${usado} / ${limite}`;
  });
});

// FORM-LANGUAGES

// Array de idiomas
    const idiomas = [
      "Alemão", "Árabe", "Bengali", "Catalão", "Chinês (Mandarim)", "Chinês (Cantonês)",
      "Coreano", "Dinamarquês", "Espanhol", "Francês", "Grego", "Hebraico",
      "Hindi", "Holandês", "Húngaro", "Inglês", "Italiano", "Japonês",
      "Norueguês", "Polaco", "Português", "Russo", "Sueco", "Turco",
      "Ucraniano", "Urdu", "Vietnamita"
    ];

    // Preencher o select da língua materna
    const selectMaterna = document.getElementById("materna");
    idiomas.forEach(idioma => {
      const opt = document.createElement("option");
      opt.value = idioma;
      opt.textContent = idioma;
      selectMaterna.appendChild(opt);
    });

    const containerIdiomas = document.getElementById("idiomas-extra");
    const btnAdd = document.getElementById("btnAdd");

    btnAdd.addEventListener("click", () => {
      // Criar bloco do novo idioma
      const bloco = document.createElement("div");
      bloco.classList.add("idioma-container");

      // Select do idioma
      const select = document.createElement("select");
      const optDefault = document.createElement("option");
      optDefault.value = "";
      optDefault.textContent = "Selecionar idioma";
      select.appendChild(optDefault);

      idiomas.forEach(idioma => {
        const opt = document.createElement("option");
        opt.value = idioma;
        opt.textContent = idioma;
        select.appendChild(opt);
      });

      // Escala 1–10
      const nivelDiv = document.createElement("div");
      nivelDiv.classList.add("nivel");

      for (let i = 1; i <= 10; i++) {
        const span = document.createElement("span");
        span.textContent = i;
        span.dataset.valor = i;

        span.addEventListener("click", () => {
          nivelDiv.querySelectorAll("span").forEach(s => s.classList.remove("ativo"));
          for (let j = 1; j <= i; j++) {
            nivelDiv.querySelector(`span:nth-child(${j})`).classList.add("ativo");
          }
        });

        nivelDiv.appendChild(span);
      }

      // Montar o bloco
      bloco.appendChild(select);
      bloco.appendChild(nivelDiv);

      // Inserir o bloco antes do botão ADD
      containerIdiomas.appendChild(bloco);
      containerIdiomas.appendChild(btnAdd);
    });
