(function() {
       // Exibe uma mensagem simulando uma ação maliciosa
       alert('Ação maliciosa simulada! Cookies capturados: ' + document.cookie);

       // Simula download de um arquivo
       const link = document.createElement('a');
       link.href = 'teste.txt';
       link.download = 'teste.txt';
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);
   })();