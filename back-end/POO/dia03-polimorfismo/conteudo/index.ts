abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }
  talk(): void {
    console.log(`Oi, eu sou o ${this._name}`);
  }
  specialMove(): void {
    console.log(`Oi, eu ${this._specialMoveName}`);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }
  talk(): void {
    console.log(`Oi, eu sou o ${this._name}`);
  }
  specialMove(): void {
    console.log(`Oi, eu ${this._specialMoveName}`);
  }
}

const heitor = new LongRangeCharacter('Heitor', 'Estudante');
const thiago = new MeleeCharacter('Thiago', 'Desenvolvedor Web');

const showPerson = (character: Character) => {
  character.talk();
  character.specialMove()
}

showPerson(thiago);
showPerson(heitor);