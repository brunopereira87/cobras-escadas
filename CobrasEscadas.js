class CobrasEscadas{

  constructor(){
    this.posicaoJogadores = [0, 0];
    this.jogadorAtual = this.sortearJogador();
    this.mensagemFimRodada = '';
    this.desvios = 
      {
        2: 38,
        7: 14,
        8: 31,
        15: 26,
        16: 6,
        21: 42,
        28: 84,
        36: 44,
        46: 25,
        49: 11,
        51: 67,
        62: 19,
        64: 60,
        71: 91,
        74: 53,
        78: 98,
        87: 94,
        89: 68,
        92: 88,
        95: 75,
        99: 80
      };
      
      this.posicoesDesvio = Object.keys(this.desvios);
  }

  jogar(dado1, dado2) {
    this.mensagemFimRodada = '';
    const soma = dado1+dado2;
    const atual = this.jogadorAtual

    let posJogador = this.posicaoJogadores[atual]
    posJogador += soma;

    if(posJogador === 100 ){
      this.mensagemFimRodada = `O jogador ${atual + 1} chegou na posição 100 e venceu a partida`;
      return 1;
    }

    if(posJogador > 100) {
      const sobra = posJogador - 100;
      posJogador = 100 - sobra;
    }

    this.posicaoJogadores[atual] = posJogador;
    this.verificaDesvio(posJogador, atual);

  }

  verificaDesvio(posicaoOrigem, jogador){

    if(this.posicoesDesvio.includes(posicaoOrigem.toString())){
      const destino = this.desvios[posicaoOrigem];

      if(destino > posicaoOrigem)
        this.mensagemFimRodada = `Escada! Você pulou da posição ${posicaoOrigem} até a posição ${destino}`;
      else
        this.mensagemFimRodada = `Cobra!Que pena, você voltou da posição ${posicaoOrigem} para a posição ${destino}`;

      this.posicaoJogadores[jogador] = destino;
    }
  }
  rolarDado() {
    const min = 1;
    const max = 6;
    return Math.floor( Math.random() * (max - min + 1) + min );
  }
  
  sortearJogador(){
    const min = 0;
    const max = 1;
    this.jogadorAtual = Math.floor( Math.random() * (max - min + 1) + min );
  }

  trocarJogador(){
    if(this.jogadorAtual === 0) 
      this.jogadorAtual = 1;
    else
      this.jogadorAtual = 0;
  }
}

