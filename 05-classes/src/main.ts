// visibility modifiers
class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    //private can only be accessed inside of this class
    private age: number,
    //protected can be accessed inside of this class and also inside of derived classes
    protected lang: string = 'TypeScript'
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder('Dave', 'Rock', 42);

console.log(Dave.getAge());
// console.log(Dave.lang);
// console.log(Dave.age);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Lucas = new WebDev('Mac', 'Lucas', 'Lofi', 24);

console.log(Lucas.getLang());
// console.log(Lucas.lang);
// console.log(Lucas.age);

//*********************************************************

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  constructor(public name: string, public instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  public play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const Jhon = new Peeps('Jhon');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');

console.log(Peeps.count);

//*********************************************************

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
      this.dataState = value;
      return;
    } else throw new Error('Param is not an array of string');
  }
}

const myBands = new Bands();
myBands.data = ['Neil youg', 'Led Zep'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'ZZ Top'];
console.log(myBands.data);
// myBands.data = 'Van Halen';

