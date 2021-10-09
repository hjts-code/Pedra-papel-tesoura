var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["413f8ad9-3bb0-48b5-b06a-c96bce519589","a12c8dca-5574-49a4-9e5d-185f6c07d24e","26c583d6-abeb-45a0-9ec2-c2a5742cc36e","c63cf132-5a32-4f2f-bdb4-a3a8aff3fe75","71abab02-42c7-4ea7-bc30-bfbf9d177958","5110a753-24e3-4dcf-9762-f91f4699f47d","c8b64fb4-5454-4e87-b7fa-6539ab91532e"],"propsByKey":{"413f8ad9-3bb0-48b5-b06a-c96bce519589":{"name":"pedra1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ihuow48Fk9NTQLqrUJKlMlt9phaAGBFX","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/413f8ad9-3bb0-48b5-b06a-c96bce519589.png"},"a12c8dca-5574-49a4-9e5d-185f6c07d24e":{"name":"pedra2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"KlDM7ayW1lCbFtahlCnYGpdXBjH4vqNU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a12c8dca-5574-49a4-9e5d-185f6c07d24e.png"},"26c583d6-abeb-45a0-9ec2-c2a5742cc36e":{"name":"papel1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"QKYl.Omu9NexlUw8Ikg3B7bNoZ2GcXL0","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/26c583d6-abeb-45a0-9ec2-c2a5742cc36e.png"},"c63cf132-5a32-4f2f-bdb4-a3a8aff3fe75":{"name":"papel2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"x6kXwDJ5mavUsaQUn0hutyoFyTgnI1Ui","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c63cf132-5a32-4f2f-bdb4-a3a8aff3fe75.png"},"71abab02-42c7-4ea7-bc30-bfbf9d177958":{"name":"tesoura1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"_TvqkfUrmr7gqrfjj.4CVYbai0kQauC3","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/71abab02-42c7-4ea7-bc30-bfbf9d177958.png"},"5110a753-24e3-4dcf-9762-f91f4699f47d":{"name":"tesoura2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"vzTi01sVihrSqb6LeY92di7.uuJaxbyj","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/5110a753-24e3-4dcf-9762-f91f4699f47d.png"},"c8b64fb4-5454-4e87-b7fa-6539ab91532e":{"name":"perdeu","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"29ji6Of9JDBtvMcKH9nmIBvwoyHs7_OZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c8b64fb4-5454-4e87-b7fa-6539ab91532e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var pedra1 = createSprite(100,50,10,10);
pedra1.setAnimation("pedra1");
var papel1 = createSprite(200,50,10,10);
papel1.setAnimation("papel1");
var tesoura1 = createSprite(300,50,10,10);
tesoura1.setAnimation("tesoura1");

var pedra2 = createSprite(100,350,10,10);
pedra2.setAnimation("pedra2");
var papel2 = createSprite(200,350,10,10);
papel2.setAnimation("papel2");
var tesoura2 = createSprite(300,350,10,10);
tesoura2.setAnimation("tesoura2");

var estado = 1;

var perdeu = createSprite(200,200);
perdeu.setAnimation("perdeu");
perdeu.visible = false;

var textos = "PRECIONE I PARA VER AS INSTRUÇÕES";
function draw() {
  background("lightblue");
  
  player1();
  player2();
  perdeuGame();
  textos.x = 50;
  if(keyDown("i")){
    textos = "TECLAS A,B e C PARA JOGAR COM O DE CIMA";
    texto();
  }
  else if(keyWentUp("i")){
    textos = "";
  }
  fill(0);
  text(textos,90,200);
  
  drawSprites();
}

function texto(){
  fill(0);
  // text("USE AS TECLAS A, B e C PARA JOGAR COM O DE CIMA",40,200);
  text("E AS SETAS PARA JOGAR COM O DE BAIXO",80,220);
}
function player1(){
  if(keyDown("a")){
    pedra1.x = 200;
    pedra1.y = 150;
    
    papel1.x = 200;
    papel1.y = 50;
    
    tesoura1.x = 300;
    tesoura1.y = 50;
    
    perdeu.visible = false;
  }
  if(keyDown("s")){
    papel1.x = 200;
    papel1.y = 150;
    
    pedra1.x = 100;
    pedra1.y = 50;
    
    tesoura1.x = 300;
    tesoura1.y = 50;
    
    perdeu.visible = false;
  }
  if(keyDown("d")){
    papel1.x = 200;
    papel1.y = 50;
    
    pedra1.x = 100;
    pedra1.y = 50;
    
    tesoura1.x = 200;
    tesoura1.y = 150;
    
    perdeu.visible = false;
  }
}
function player2(){
  if(keyDown("left")){
    pedra2.x = 200;
    pedra2.y = 250;
    
    papel2.x = 200;
    papel2.y = 350;
    
    tesoura2.x = 300;
    tesoura2.y = 350;
    
    perdeu.visible = false;
  }
  if(keyDown("down")){
    papel2.x = 200;
    papel2.y = 250;
    
    pedra2.x = 100;
    pedra2.y = 350;
    
    tesoura2.x = 300;
    tesoura2.y = 350;
    
    perdeu.visible = false;
  }
  if(keyDown("right")){
    tesoura2.x = 200;
    tesoura2.y = 250;
    
    papel2.x = 200;
    papel2.y = 350;
    
    pedra2.x = 100;
    pedra2.y = 350;
    
    perdeu.visible = false;
  }
}
function perdeuGame(){
  if(pedra1.y ===150 && tesoura2.y===250){
    perdeu.visible = true;
    perdeu.y = tesoura2.y;
  }
  if(pedra1.y===150 && papel2.y===250){
    perdeu.visible = true;
    perdeu.y = papel2.y;
  }
  
  if(papel1.y===150 && tesoura2.y===250){
    perdeu.visible = true;
    perdeu.y = papel1.y;
  }
  if(papel1.y===150 && pedra2.y===250){
    perdeu.visible = true;
    perdeu.y = pedra2.y;
  }
  
  if(tesoura1.y===150 && pedra2.y===250){
    perdeu.visible = true;
    perdeu.y = tesoura1.y;
  }
  if(tesoura1.y===150 && papel2.y===250){
    perdeu.visible = true;
    perdeu.y = tesoura1.y;
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
