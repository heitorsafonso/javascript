//codigo do ator
let xAtor = 85;
let yAtor = 366;
let larguraAtor = 30;
let alturaAtor = 30;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
      if (xAtor < xCarros[i] + comprimentoCarro &&
   xAtor + larguraAtor > xCarros[i] &&
   yAtor < yCarros[i] + alturaCarro &&
   yAtor + alturaAtor > yCarros[i]){
   colidiu();
        meusPontos = 0;
  }
  }
}

function colidiu(){
yAtor = 366;
  somDaColisao.play();
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60))
  text(meusPontos, width/5, 27);
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos++;
    colidiu();
    //somDoPonto.play();
  }
}

function podeSeMover(){
  return yAtor < 366
}