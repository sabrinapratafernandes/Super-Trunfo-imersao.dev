var cartaUm = {
    nome: "Harry Potter",
    imagem:
      "https://criticalhits.com.br/wp-content/uploads/2022/03/harry-potter-hbo-max_q8yn.jpg",
    atributos: {
      ataque: "10",
      defesa: "10",
      magia: "8"
    }
  };
  
  var cartaDois = {
    nome: "Rony Wesley",
    imagem:
      "https://pm1.narvii.com/6434/d5c39b760fa02863487e50e38e4e4352e56a0db9_hq.jpg",
    atributos: {
      ataque: "8",
      defesa: "7",
      magia: "9"
    }
  };
  
  var cartaTres = {
    nome: "Hermione Granger",
    imagem:
      "https://rollingstone.uol.com.br/media/uploads/emma_watson_como_hermione_granger_em_harry_potter_foto_reproducao__twitter.jpg",
    atributos: {
      ataque: "9",
      defesa: "10",
      magia: "10"
    }
  };
  
  var cartaQuatro = {
    nome: "Draco Malfoy",
    imagem:
      "https://uploads.spiritfanfiction.com/historias/capas/202006/os-opostos-se-atraem--draco-malfoy-19587362-110620201801.png",
    atributos: {
      ataque: "9",
      defesa: "10",
      magia: "7"
    }
  };
  
  var cartaCinco = {
    nome: "Dumbledore",
    imagem:
      "http://images6.fanpop.com/image/photos/32700000/Albus-Dumbledore-Wallpaper-hogwarts-professors-32797141-1024-768.jpg",
    atributos: {
      ataque: "11",
      defesa: "11",
      magia: "11"
    }
  };
  
  var cartaSeis = {
    nome: "Voldemort",
    imagem:
      "https://capricho.abril.com.br/wp-content/uploads/2019/10/harry-potter-voldemort-e1571074841538.jpg",
    atributos: {
      ataque: "11",
      defesa: "8",
      magia: "10"
    }
  };
  
  var cartaSete = {
    nome: "Belatriz Lestrange",
    imagem:
      "https://www.otempo.com.br/polopoly_fs/3.214939.1534215970!httpImage/image.jpg",
    atributos: {
      ataque: "9",
      defesa: "8",
      magia: "6"
    }
  };
  
  var cartaOito = {
    nome: "Dobby",
    imagem:
      "https://hollywoodforevertv.com.br/media/uploads/harry-potter-praia-dobby-enterrado-ponto-turistico.jpg",
    atributos: {
      ataque: "11",
      defesa: "10",
      magia: "12"
    }
  };
  
  var cartaMaquina;
  var cartaJogador;
  var cartas = [
    cartaUm,
    cartaDois,
    cartaTres,
    cartaQuatro,
    cartaCinco,
    cartaSeis,
    cartaSete,
    cartaOito
  ];
  //            0        , 1        , 2
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirCartaJogador();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    var moldura =
      ' <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var html = "<div id= 'opcoes' class= 'carta-status'>";
  
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    var divResultado = document.getElementById("resultado");
    var atributoSelecionado = obtemAtributoSelecionado();
    console.log(atributoSelecionado);
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = '<p class = "resultado-final" > Venceu </p>';
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = '<p class = "resultado-final" > Perdeu </p>';
    } else {
      htmlResultado = '<p class = "resultado-final" > Empatou </p>';
    }
    divResultado.innerHTML = htmlResultado;
    exibeCartaMaquina();
  }
  
  function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    var moldura =
      ' <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    var opcoesTexto = "";
  
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "<br>";
    }
    var html = "<div id= 'opcoes' class= 'carta-status'>";
  
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
  }