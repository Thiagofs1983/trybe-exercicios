/* function testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    //console.log(ifScope + ' o que estou fazendo aqui ? :O');
  } */

const testingScope = (escopo) =>
  escopo === true
    ? console.log(
        `Não devo ser utilizada fora do meu escopo (if) otimo, fui utilizada no escopo`
      )
    : console.log(`Não devo ser utilizada fora meu escopo (else)`);
testingScope(true);
