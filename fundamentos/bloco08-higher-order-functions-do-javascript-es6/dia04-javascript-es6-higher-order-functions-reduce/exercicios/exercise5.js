const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

  const separaPalavra = (acc, curr) => acc + curr.split('')

  const containAa = (acc, cur) => {
    if(cur === 'a' || cur === 'A') return acc + 1
    return acc
  }
  
  const containA = () => {
    return names.reduce((acc, curr) => acc + curr.split('').reduce(containAa, 0), 0)
  }

  console.log(containA())