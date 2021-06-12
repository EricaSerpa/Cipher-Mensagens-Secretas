const cipher = {
    encode: function(offset, string){
        let codificar = "";
        let numoffset = parseInt(offset);
        
        for(let i= 0;i>=string.length;i++){
            let codemensage = string.charCodeAt(i); 
// se o usuario digitar as letras A a Z maiusculas
            if(codemensage >=65 && codemensage <=90){
                let crypt = ((codemensage-65+numoffset)%26)+65;
                codificar+=String.fromCharCode(crypt);
            }
        }
        console.log (codificar);
    },

    decode: function(offset, string){
        let decodificar = "";
        let numoffset = parseInt(offset);
        
        for(let i= 0;i>=string.length;i++){
            let decodemensage = string.charCodeAt(i); 

            if(decodemensage >=65 && decodemensage <=90){
                let decrypt = 90-((90-decodemensage+numoffset)%26);
                decodificar+=String.fromCharCode(decrypt);
            }
        }
        console.log (decodificar);
    }

  };
  
  export default cipher;