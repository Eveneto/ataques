function simulateBufferOverflow(input) {
       let buffer = new Array(10); // Simula um buffer de tamanho 10
       try {
           buffer.fill(0); // Preenche o buffer com zeros
           console.log("Buffer inicial:", buffer);
           // Simula estouro ao tentar inserir mais dados
           buffer.length = 15; // Tenta expandir além do limite
           buffer.fill(input.charCodeAt(0), 10); // Preenche com o primeiro caractere da entrada
           console.log("Após estouro:", buffer);
           alert("Estouro simulado! Dados extras afetaram a memória.");
       } catch (e) {
           alert("Erro simulado: Estouro de buffer detectado!");
       }
   }

   // Chama a função com uma entrada longa
   simulateBufferOverflow("123456789012345");