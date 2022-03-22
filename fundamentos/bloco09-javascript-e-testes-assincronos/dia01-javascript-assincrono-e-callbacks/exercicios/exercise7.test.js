const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

test ('Verifica se transforma as letras da palvra em maiúscula', (done) => {
    uppercase('thiago', (str) => {
        try {
            expect(str).toBe('THIAGO');
            done();
        }catch (error) {
            done(error)
        }
    })
})