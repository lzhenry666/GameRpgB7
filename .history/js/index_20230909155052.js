import {Game} from "./Game.js";
import { Warrior, Wizard, Archer, Priest, Slime, Lizardman, Orc, Skeleton, Dragon, Goblin, DemonLord, DevilShark } from "./Class.js";
import {Log} from "./Log.js";

const  log_area = document.querySelector(".log");
const  heros = [Warrior, Wizard, Archer, Priest, Slime, Lizardman, Orc, Skeleton, Dragon, Goblin, DemonLord, DevilShark];
const  hero_section = document.querySelector(".hero-section");
const  p1 = document.querySelector(".player1");
const  p2 = document.querySelector(".player2");
const  log = new Log(log_area);


      //var mychar = new Warrior("LUIZ", "warrior");
      //var vilaan = new Wizard("VILAAN", "wizard");
      let mychar = null;
      let vilaan = null;
let game = new Game(mychar,vilaan, p1, p2, log, hero_section);
game.geraheros();

    await new Promise((resolve) => {
      const elementsToSelect = document.querySelectorAll(".card__heading");
elementsToSelect.forEach((element) => { element.addEventListener("click", function(event) {

var heroName = prompt(`Qual o nome do seu personagem?, você selecionou ${event.target.textContent}`);
        if (heroName != null && heroName != "") {
          if (heroName !== null && heroName !== "") {
            const selectedHero = heros.find((hero) => hero.name === event.target.textContent);
            mychar = new selectedHero(heroName, selectedHero.name.toLowerCase());
            const randomHeroIndex = Math.floor(Math.random() * heros.length);
            vilaan = new heros[randomHeroIndex]("VILAAN", heros[randomHeroIndex].name.toLowerCase());
            }

          resolve();
        }
      });
    });
    });


game = new Game(mychar,vilaan, p1, p2, log, hero_section);
game.start();
