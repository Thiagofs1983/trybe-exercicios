/* interface ISuper {
  isSuper: boolean;
}

class Superclass implements ISuper {
  isSuper = true;
  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
  public sayHello2(): void {
    this.sayHello();
  }
}

const myFunc = (obj: Superclass): void => {
  obj.sayHello();
  console.log(obj.isSuper ? 'Super' : 'Sub');
  
}

const objSuper = new Superclass();
const objSub = new Subclass();

myFunc(objSuper);
myFunc(objSub); */

/* interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {  }
  myFunc(myParam: number): string {
    return `Soma é igual a ${myParam + this.myNumber}`
  }
}

const sum = new MyClass(3);
console.log(sum.myFunc(2)); */

interface Logger {
  log(st: string): void;
}

class ConsoleLogger implements Logger {
  log(st: string): void {
    console.log(st);
  }
}

class ConsoleLogger2 implements Logger {
  log(st: string): void {
    console.log(`ConsoleLogger2 ${st}`);
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExempleDatabase implements Database {
  constructor(public logger: Logger) {
    logger = new ConsoleLogger();
  }
  save(key: string, value: string): void {
    this.logger.log(`Valor ${value}, chave ${key}`)
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const ExempleDatabase1 = new ExempleDatabase(logger1);
ExempleDatabase1.save('teste', 'doido');