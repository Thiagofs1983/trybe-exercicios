"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const meses_1 = __importDefault(require("./meses"));
const estacoes_1 = __importDefault(require("./estacoes"));
const nomesMeses = Object.values(meses_1.default);
const escolhaMes = readline_sync_1.default.keyInSelect(nomesMeses, "Escolha um mês do ano");
const estacoesNorte = {
    [estacoes_1.default.OUTONO]: [meses_1.default.SETEMBRO, meses_1.default.OUTUBRO, meses_1.default.NOVEMBRO, meses_1.default.DEZEMBRO],
    [estacoes_1.default.INVERNO]: [meses_1.default.DEZEMBRO, meses_1.default.JANEIRO, meses_1.default.FEVEREIRO, meses_1.default.MARCO],
    [estacoes_1.default.PRIMAVERA]: [meses_1.default.MARCO, meses_1.default.ABRIL, meses_1.default.MAIO, meses_1.default.JUNHO],
    [estacoes_1.default.VERAO]: [meses_1.default.JUNHO, meses_1.default.JULHO, meses_1.default.AGOSTO, meses_1.default.SETEMBRO],
};
const estacoesSul = {
    [estacoes_1.default.OUTONO]: [meses_1.default.MARCO, meses_1.default.ABRIL, meses_1.default.MAIO, meses_1.default.JUNHO],
    [estacoes_1.default.INVERNO]: [meses_1.default.JUNHO, meses_1.default.JULHO, meses_1.default.AGOSTO, meses_1.default.SETEMBRO],
    [estacoes_1.default.PRIMAVERA]: [meses_1.default.SETEMBRO, meses_1.default.OUTUBRO, meses_1.default.NOVEMBRO, meses_1.default.DEZEMBRO],
    [estacoes_1.default.VERAO]: [meses_1.default.DEZEMBRO, meses_1.default.JANEIRO, meses_1.default.FEVEREIRO, meses_1.default.MARCO],
};
const hemisferios = {
    "NORTE": estacoesNorte,
    "SUL": estacoesSul,
};
const escolhaHemisferio = readline_sync_1.default.keyInSelect(Object.keys(hemisferios), "Escolha um hemisfério");
