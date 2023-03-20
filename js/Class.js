class Character {
  _life = 1;
  maxaLife = 1;
  attack = 0;
  def = 0;
  name = "";
  magic_attack = 0;
  magic_def = 0;
  mana = 0;
  stamina = 0;
  itens = [
    {
      name: "Potion",
      type: "heal",
      value: 20,
    },

    {
      name: "Mana Potion",
      type: "mana",
      value: 20,
    },
    {
      name: "Stamina Potion",
      type: "stamina",
      value: 20,
    },


    {name:"scroll of protection", type:"def", value: 10},
    {name:"scroll of attack", type:"attack", value: 10},
    {name:"scroll of magic attack", type:"magic_attack", value: 10},
    {name:"scroll of magic defense", type:"magic_def", value: 10},

  ];

  constructor(name, selected, ) {
    this.name = name;
    this.race_class = selected;
  }

  get life() {
    return this._life;
  }
  set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife;
  }


}

class Warrior extends Character {
  constructor(name, selected) {
    super(name, selected);
    this._life = 70;
    this.maxLife = this._life;
    this.attack = 85;
    this.def = 60;
    this.name = `Warrior ${name}`;
    this.magic_attack = 0;
    this.magic_def = 0;
    this.mana = 50;
    this.image = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5d0257a7-3486-47d1-9695-64179c3f1d58/dditghy-4bd7e3a7-4f28-48eb-88bb-607405e778e0.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVkMDI1N2E3LTM0ODYtNDdkMS05Njk1LTY0MTc5YzNmMWQ1OFwvZGRpdGdoeS00YmQ3ZTNhNy00ZjI4LTQ4ZWItODhiYi02MDc0MDVlNzc4ZTAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aYDhgYmO6afyc-vn9QULRu5tWec5vnWMWhb0AcjCfGk'
    this.itens = [ ...this.itens, {name:"sword", type:"attack", value: 10}, {name:"shield", type:"def", value: 10} ]

  }
}

class Wizard extends Character {
  constructor(name, selected) {
    super(name, selected);
    this._life = 50;
    this.maxLife = this._life;
    this.attack = 90;
    this.def = 40;
    this.name = `Wizard ${name}`;
    this.magic_attack = 100;
    this.magic_def = 60;
    this.mana = 100;
    this.image = 'https://media.tenor.com/IihIOlwbe0sAAAAi/wizard.gif'
  }
}

class Archer extends Character {
    constructor(name, selected) {
        super(name, selected);
        this._life = 60;
        this.maxLife = this._life;
        this.attack = 80;
        this.def = 50;
        this.name = `Archer ${name}`;
        this.magic_attack = 0;
        this.magic_def = 0;
        this.mana = 50;
        this.image = 'https://i.imgur.com/ElyZIOl.gif'
    }
  }

class Priest extends Character {
    constructor(name, selected) {
        super(name, selected);
        this._life = 60;
        this.maxLife = this._life;
        this.attack = 0;
        this.def = 0;
        this.name = `Priest ${name}`;
        this.magic_attack = 0;
        this.magic_def = 0;
        this.mana = 100;
        this.image = 'https://opengameart.org/sites/default/files/cleric%20attack.gif'
    }
}

class Monster extends Character {
  constructor(name, selected) {
    super(name, selected);
    this._life = 100;
    this.maxLife = this._life;
    this.attack = 100;
    this.def = 100;
    this.name = `Monster ${name}`;
    this.magic_attack = 100;
    this.magic_def = 100;
    this.mana = 100;
  }
}

class Slime extends Monster {
  constructor(name, selected) {
    super(name, selected);
    this._life = 100;
    this.maxLife = this._life;
    this.attack = 100;
    this.def = 100;
    this.name = `Slime ${name}`;
    this.magic_attack = 100;
    this.magic_def = 100;
    this.mana = 100;
    this.image = 'https://4.bp.blogspot.com/-2BLcpIL8MKk/XJmfkFHLlQI/AAAAAAAAAr0/J1hOkiCGA-kkfgMcsdmZ-9ylHY_6J0t_ACLcBGAs/s640/giphy.gif';
  }
}

class Lizardman extends Monster {
  constructor(name, selected) {
    super(name, selected);
    this._life = 40;
    this.maxLife = this._life;
    this.attack = 60;
    this.def = 80;
    this.name = `Lizardman ${name}`;
    this.magic_attack = 50;
    this.magic_def = 45;
    this.mana = 80;
    this.image = 'https://images.squarespace-cdn.com/content/v1/592c280be6f2e1b241760247/1622796970349-AVKW74IJQ1PSUED6R56I/Chelun+battle.gif';
  }
}

class Orc extends Monster {
  constructor(name, selected) {
    super(name, selected);
    this._life = 80;
    this.maxLife = this._life;
    this.attack = 80;
    this.def = 80;
    this.name = `Orc ${name}`;
    this.magic_attack = 50;
    this.magic_def = 50;
    this.mana = 80;
    this.image = 'https://miro.medium.com/max/920/1*jIAhY8_5SssyXzGykgX1kA.gif';
  }
}

class Skeleton extends Monster {
  constructor(name, selected) {
    super(name, selected);
    this._life = 60;
    this.maxLife = this._life;
    this.attack = 80;
    this.def = 80;
    this.name = `Skeleton ${name}`;
    this.magic_attack = 50;
    this.magic_def = 50;
    this.mana = 80;
    this.image ='https://i.pinimg.com/originals/66/24/80/662480907cfb2e26aec3f27cd419869a.gif';
  }
}

class Dragon extends Monster {
  constructor(name, selected) {
    super(name, selected);
    this._life = 200;
    this.maxLife = this._life;
    this.attack = 200;
    this.def = 200;
    this.name = `Dragon ${name}`;
    this.magic_attack = 200;
    this.magic_def = 200;
    this.mana = 200;
    this.image = 'https://i.pinimg.com/originals/79/78/06/797806c5c5567d0a7984ad1b1db2acc3.gif'
  }
}

class Goblin extends Monster {
  constructor(name, selected) {
    super(name, selected);
    this._life = 60;
    this.maxLife = this._life;
    this.attack = 80;
    this.def = 80;
    this.name = `Goblin ${name}`;
    this.magic_attack = 50;
    this.magic_def = 50;
    this.mana = 80;
    this.image = 'https://i.pinimg.com/originals/69/67/2b/69672b201b2958193a9c3f446523bfbb.gif'
  }
}

class DemonLord extends Monster {
  constructor(name, selected) {
    super(name, selected);
    this._life = 300;
    this.maxLife = this._life;
    this.attack = 300;
    this.def = 300;
    this.name = `Demon Lord ${name}`;
    this.magic_attack = 300;
    this.magic_def = 300;
    this.mana = 300;
    this.image = 'https://thumbs.gfycat.com/MatureBoringCob-max-1mb.gif';
  }
}

class Boss extends Monster {
  constructor(name, selected) {
    super(name, selected);
    this._life = 500;
    this.maxLife = this._life;
    this.attack = 500;
    this.def = 500;
    this.name = `Boss ${name}`;
    this.magic_attack = 500;
    this.magic_def = 500;
    this.mana = 500;
  }
}

class DevilShark extends Boss{
  constructor(name, selected) {
    super(name, selected);
    this._life = 500;
    this.maxLife = this._life;
    this.attack = 500;
    this.def = 500;
    this.name = `Devil Shark ${name}`;
    this.magic_attack = 500;
    this.magic_def = 500;
    this.mana = 500;
    this.image = 'https://media.tenor.com/_AIwtwuekpsAAAAC/hello-shark.gif'
  }

}
