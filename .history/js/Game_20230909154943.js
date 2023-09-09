class Game{
  constructor(fighter1, fighter2, fighter1El, fighter2El, logObject, hero_section) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
    this.log = logObject;
    this.hero_section = hero_section;

  }
async getIp(){
    return await fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => data.ip)
    .catch(error => console.log(error))
    }
geraheros() {
  this.getIp().then(ip => {
    this.showModal(`Bem vindo ao jogo, seu ip é ${ip}`, 'Escollha seu herói, clicando no descritivo da classe em Laranja');
  });
  const heros_img = [
    {class:"Warrior", img:'https://i.pinimg.com/originals/5b/b5/94/5bb5944b780620d213f557bfac454c65.jpg'},
    {class:"Wizard", img:'https://cdn.bhdw.net/im/dark-magician-girl-wallpaper-87347_w635.webp'},
     {class:"Archer", img:'https://e0.pxfuel.com/wallpapers/747/403/desktop-wallpaper-fate-stay-night-archer.jpg'},
       {class:"Priest", img:'https://i.pinimg.com/236x/63/32/81/6332813bc79da37e4029cb6eb912e3b0--warcraft-art-world-of-warcraft.jpg'},
       {class:"Slime", img:'https://i.pinimg.com/564x/56/d8/f0/56d8f0ce178f2e66152cf98e8d231d32.jpg'},
      {class:"Lizardman",img:'https://wallpapercrafter.com/sizes/3840x2160/131534-digital-art-artwork-fantasy-art-video-game-art-Divinity-Original-Sin-2-lizards-Lizardmen-reptile-video-games-Divinity-Original-Sin.jpg'},
       {class:"Orc", img:'https://www.wallpaperflare.com/static/934/241/160/warcraft-ork-best-movies-of-2016-orc-wallpaper.jpg'},
        {class:"Skeleton",img:'https://c4.wallpaperflare.com/wallpaper/513/657/143/dark-warrior-axe-moon-wallpaper-preview.jpg'},
        {class:"Dragon", img:'https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/86/ef/0a/86ef0ab1-a92b-7b74-bea4-284a936f83f4/source/512x512bb.jpg'},
         {class:"Goblin", img:'https://images3.alphacoders.com/959/959163.jpg'},
         {class:"DemonLord",img:'https://images4.alphacoders.com/869/869729.png'},
         {class:"DevilShark",img:'https://i.pinimg.com/736x/91/f0/d4/91f0d4a33e0f478dab3dbeae0a3f4b5d.jpg'}];
  let hero = '';
       heros_img.forEach((heros_img, i) => {
           hero += `<a class="card" href="#">
          <div class="card__background"
              style="background-image: url(${heros_img.img})">
          </div>
          <div class="card__content">
              <p class="card__category">Category</p>
              <h3 class="card__heading skillsDouble ">${heros_img.class}</h3>
          </div>
        </a>
        `
  });
  this.hero_section.querySelector('.card-grid').innerHTML += hero;

    return heros_img;
}
updateFighters() {
  this.fighter1El.querySelector('img').src = this.fighter1.image;
  this.fighter2El.querySelector('img').src = this.fighter2.image;
  this.fighter1El.querySelector('img').style.transform = 'scaleX(-1)';
  this.fighter2El.querySelector('img').style.transform = 'scaleX(-1)';
  }
attachEvents() {
  this.fighter1El.querySelector('.player1attack').addEventListener('click', () => {
    this.doAttack(this.fighter1, this.fighter2);
  });
  this.fighter1El.querySelector('.player1magic').addEventListener('click', () => {
    this.doMagicAttack(this.fighter1, this.fighter2);
  });
  this.fighter2El.querySelector('.player2attack').addEventListener('click', () => {
    this.doAttack(this.fighter2, this.fighter1);
  });
  this.fighter2El.querySelector('.player2magic').addEventListener('click', () => {
    this.doMagicAttack(this.fighter2, this.fighter1);
  });

  let restart = document.querySelector(".restart");
  restart.addEventListener('click', () => {
    this.reset();
  });

  let backto = document.querySelector(".backToSelection");
  backto.addEventListener('click', () => {
    this.BacktoSelection();
  });
  let newenemy = document.querySelector(".restartnew");
  newenemy.addEventListener('click', () => {
    this.resetnewenemy();
  });


}
start() {
    //this.geraheros();
    this.update();
    this.updateFighters();
    this.attachEvents();
    const heros = document.querySelector(".hero-section");
    heros.style.display = "none";
    const gameArea = document.querySelector(".game-area");
    gameArea.style.display = "block";
  }
update() {

    // Fighter 1
    this.fighter1El.querySelector(".player1name").innerHTML = ` ${this.fighter1.name} - ${this.fighter1.life} HP  - ${this.fighter1.mana} MP` ;
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    this.fighter1El.querySelector(".playerhealth").style.width = `${f1Pct}%`;
    this.fighter1El.querySelector(".playermana").style.width = `${this.fighter1.mana}%`;
    this.fighter1El.querySelector(".playerhealth").innerHTML = `${this.fighter1.life} HP`;
    this.fighter1El.querySelector(".playermana").innerHTML = `${this.fighter1.mana} MP`;

    // Fighter 2
    this.fighter2El.querySelector(".player2name").innerHTML = ` ${this.fighter2.name} - ${this.fighter2.life} HP - ${this.fighter2.mana} MP `;
    let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2El.querySelector(".playerhealth").style.width = `${f2Pct}%`;
    this.fighter2El.querySelector(".playermana").style.width = `${this.fighter2.mana}%`;
    this.fighter2El.querySelector(".playerhealth").innerHTML = `${this.fighter2.life} HP`;
    this.fighter2El.querySelector(".playermana").innerHTML = `${this.fighter2.mana} MP`;
  }
doAttack(attacker, defender) {
      if(attacker.life
        <= 0 || defender.life <= 0) {
          this.log.addMessage("Game Over");
          return;
  }
let random = Math.floor(Math.random() * 6);

let attackfactor = (Math.random() * random).toFixed(2);
//math random number between 0 and 6
console.log(attackfactor);
let defensefactor = (Math.random() * random).toFixed(2);
let damage = (attacker.attack - defender.def) * attackfactor;
let def  = (defender.def -  attacker.attack) * defensefactor;

if (damage > def) {
  defender.life -= damage;
  this.log.addMessage(`${attacker.name} attacked ${defender.name} for ${damage.toFixed(2)} damage`);
}else{
  this.log.addMessage(`${attacker.name} attacked ${defender.name} but defense was too strong`);
}

this.update();
}
doMagicAttack(attacker, defender) {
    if(attacker.life
      <= 0 || defender.life <= 0) {
        this.log.addMessage("Game Over");
        return;
    }
    if(attacker.mana <= 0) {
      this.log.addLog("No mana");
      return;
    }
    let attackfactor = (Math.random() * 2).toFixed(2);
    console.log(attackfactor);
    let defensefactor = (Math.random() * 2).toFixed(2);
    let damage = (attacker.magic_attack - defender.magic_def) * attackfactor;
    let def  = (defender.magic_def -  attacker.magic_attack) * defensefactor;
    if (damage > def) {
      defender.life -= damage;
      this.log.addMessage(`${attacker.name} attacked a Magic in ${defender.name} for ${damage.toFixed(2)} damage`);
    }else{
      this.log.addMessage(`${attacker.name} attacked a Magic in ${defender.name} but defense was too strong`);
    }
    this.update();

  }
resetnewenemy() {
  const heros = [Warrior, Wizard, Archer, Priest, Slime, Lizardman, Orc, Skeleton, Dragon, Goblin, DemonLord, DevilShark];
    if(this.fighter1.life <= 0 || this.fighter2.life <= 0) {
      var randomHeroIndex = Math.floor(Math.random() * heros.length);
      this.fighter2 = new heros[randomHeroIndex]("VILAAN", heros[randomHeroIndex].name.toLowerCase());
      this.fighter1.life = this.fighter1.maxLife;
      this.fighter2.life = this.fighter2.maxLife;
      this.fighter2El.querySelector('img').setAttribute('src', this.fighter2.image);
      this.log.clearMessageonReset();
      this.log.addMessage("Game Reset");
      this.update();
    }
  }
reset(){
    if(this.fighter1.life <= 0 || this.fighter2.life <= 0) {
      this.fighter1.life = this.fighter1.maxLife;
      this.fighter2.life = this.fighter2.maxLife;
      this.log.clearMessageonReset();
      this.log.addMessage("Game Reset");
      this.update();
    }
}
reload() {
    window.location.reload();
  }
BacktoSelection() {
       const heros = document.querySelector(".hero-section");
        heros.style.display = "block";
        const gameArea = document.querySelector(".game-area");
        gameArea.style.display = "none";
        this.reload();
      }
showModal(title, message) {
        // Crie um elemento <div> que representará o modal
        const modal = document.createElement('div');
        modal.classList.add('modal');
        // Crie um elemento <div> que representará o conteúdo do modal
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        // Crie um elemento <span> que representará o botão de fechar o modal
        const closeModal = document.createElement('span');
        closeModal.classList.add('close');
        closeModal.textContent = '×';
        closeModal.addEventListener('click', () => {
          modal.style.display = 'none';
        });

        // Crie elementos <h2> e <p> que representarão o título e a mensagem do modal, respectivamente
        const modalTitle = document.createElement('h2');
        modalTitle.textContent = title;
        const modalMessage = document.createElement('p');
        modalMessage.textContent = message;
        // Adicione os elementos criados acima ao modal
        modalContent.appendChild(closeModal);
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalMessage);
        modal.appendChild(modalContent);
        // Adicione o modal à página
        const gameArea = document.querySelector('.hero-section');
        gameArea.appendChild(modal);
        // Exiba o modal na tela
        modal.style.display = 'block';
      }
}
