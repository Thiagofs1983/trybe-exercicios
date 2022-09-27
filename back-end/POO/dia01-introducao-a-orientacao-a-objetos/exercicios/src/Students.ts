export default class Estudante {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(matricula: string, nome: string, notasProva: number[], notasTrabalho: number[]) {
    this.validateNotasProva(notasProva)
    this.validateNotasTrabalho(notasTrabalho)
    
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = notasProva;
    this._notasTrabalho = notasTrabalho;
  }

  private validateNotasProva(notasProva: number[]) {
    if (notasProva.length !== 4) {
      throw new Error('Necessário a inserção de 4 notas')
    }
  }

  private validateNotasTrabalho(notasTrabalho: number[]) {
    if (notasTrabalho.length !== 2) {
      throw new Error('Necessário a inserção de 2 notas')
    }
  }

  public set notasProva(notasProva: number[]) {
    this.validateNotasProva(notasProva);
    this._notasProva = notasProva;
  }

  public set notasTrabaho(notasTrabaho: number[]) {
    this.validateNotasTrabalho(notasTrabaho);
    this._notasTrabalho = notasTrabaho;
  }

  public get nome() {
    return this._nome;
  }
  
  private calculaNotas(): number {
    const total = [...this._notasProva, ...this._notasTrabalho].reduce((acc, curr) => acc + curr);
    return total;
  }

  public calculaMedia(): number {
    const media = this.calculaNotas() / [...this._notasProva, ...this._notasTrabalho].length;
    return media;
  }
}

const estudante1 = new Estudante('E1', 'Thiago', [6, 7, 5, 8], [5, 7]);
estudante1.notasTrabaho = [2, 9];
console.log(estudante1);
console.log(`O aluno ${estudante1.nome} ficou com a média ${estudante1.calculaMedia().toFixed(2)}`);