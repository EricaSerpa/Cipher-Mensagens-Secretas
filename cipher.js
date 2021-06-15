const cipher = {
    encode: function(offset, string){
        let codificar = "";

        //console.log (offset,string);
        
        for(let i= 0;i<string.length;i++){ //tam. do texto
            let codeMensage = string.charCodeAt(i); 
// se o usuario digitar as letras A a Z maiusculas
            if(codeMensage >=65 && codeMensage <=90){
                let crypt = ((codeMensage-65+offset)%26)+65;
                codificar+=String.fromCharCode(crypt); //transformar em letra
            }
        }
        console.log (codificar);
        return codificar;
    },

    decode: function(offset, string){
        let decodificar = "";

        //console.log (offset,string);

        for(let i= 0;i<string.length;i++){
            let decodeMensage = string.charCodeAt(i); 

            if(decodeMensage >=65 && decodeMensage <=90){
                let decrypt = 90-((90-decodeMensage+offset)%26);
                decodificar+=String.fromCharCode(decrypt);
            }
        }
        console.log (decodificar);
        return decodificar;
    }

  }
  
  export default cipher;