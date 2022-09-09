import { exit } from 'process';
import readline from 'readline-sync';
import meses from './meses';
import estacoes from './estacoes';

const nomesMeses = Object.values(meses);

const escolhaMes = readline.keyInSelect(nomesMeses, "Escolha um mês do ano");

const estacoesNorte = {
  [estacoes.OUTONO]: [meses.SETEMBRO, meses.OUTUBRO, meses.NOVEMBRO, meses.DEZEMBRO],
  [estacoes.INVERNO]: [meses.DEZEMBRO, meses.JANEIRO, meses.FEVEREIRO, meses.MARCO],
  [estacoes.PRIMAVERA]: [meses.MARCO, meses.ABRIL, meses.MAIO, meses.JUNHO],
  [estacoes.VERAO]: [meses.JUNHO, meses.JULHO, meses.AGOSTO, meses.SETEMBRO],
}

const estacoesSul = {
  [estacoes.OUTONO]: [meses.MARCO, meses.ABRIL, meses.MAIO, meses.JUNHO],
  [estacoes.INVERNO]: [meses.JUNHO, meses.JULHO, meses.AGOSTO, meses.SETEMBRO],
  [estacoes.PRIMAVERA]: [meses.SETEMBRO, meses.OUTUBRO, meses.NOVEMBRO, meses.DEZEMBRO],
  [estacoes.VERAO]: [meses.DEZEMBRO, meses.JANEIRO, meses.FEVEREIRO, meses.MARCO],
}

const hemisferios = {
  "NORTE": estacoesNorte,
  "SUL": estacoesSul,
}

const escolhaHemisferio = readline.keyInSelect(Object.keys(hemisferios), "Escolha um hemisfério");