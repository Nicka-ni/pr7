const $btn=document.getElementById('btn-kick');
const $btnUlta=document.getElementById('btn-kick-ulta');
const character={
  name: 'Pickachu',
  defaultHP:100,
  damageHP:100,
  elHP:document.getElementById('health-character'),
  elProgressBar:document.getElementById('progressbar-character'),

  renderHP,
  renderHPLife,
  renderProgressBarHP,
  changeHP
}
const enemy={
  name: 'Charmander',
  defaultHP:100,
  damageHP:100,
  elHP:document.getElementById('health-enemy'),
  elProgressBar:document.getElementById('progressbar-enemy'),
  
  renderHP,
  renderHPLife,
  renderProgressBarHP,
  changeHP
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressBarHP();
}
function renderHPLife() {
  this.elHP.innerText=this.damageHP+'/'+this.defaultHP;
}
function renderProgressBarHP() {
  this.elProgressBar.style.width=this.damageHP+'%';
}
function random(num) {
  return Math.ceil(Math.random()*num);
}

function changeHP(count) {
  if(this.damageHP <count){
    this.damageHP=0;
    alert("Бедный "+this.name+" проиграл бой!");
    $btn.disabled=true;
    $btnUlta.disabled=true;
  }
  else{
    this.damageHP-= count;
  }
  this.renderHP();
}
$btn.addEventListener('click', function(){
  console.log('Kick');
  character.changeHP(random(20));
  enemy.changeHP(random(20));
});
$btnUlta.addEventListener('click', function(){
  console.log('Kick');
  character.changeHP(random(50));
  enemy.changeHP(random(50));
});

function init(){
  console.log('Start Game');
  character.renderHP();
  enemy.renderHP();
}
init();

