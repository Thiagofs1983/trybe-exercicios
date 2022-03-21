//é possivel criar um objeto passando para a função apenas os parametros e os valores aparecem depois da chamada da função
const newUser = (id, name, email) => {
    return {
      id,
      name,
      email,
    };
  };
  
  console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }
  console.log(`-----------------------------------`)

  const getPosition = (latitude, longitude) => ({
    latitude,
    longitude});
  
  console.log(getPosition(-19.8157, -43.9542));