import cipher from './cipher.js';


const cryptBtn = document.getElementById("cryptBtn");
cryptBtn.addEventListener("click", evento =>  {
evento.preventDefault();
const deslocamento = Number(document.getElementById("keyoffset").value); 
const cryptmsg = document.getElementById("cryptmsg").value;
document.getElementById("cryptmsg").value = cipher.encode (deslocamento, cryptmsg);
});


const decryptBtn = document.getElementById("decryptBtn");
decryptBtn.addEventListener("click", evento =>  {
evento.preventDefault();
const deslocamento = Number(document.getElementById("keyoffset").value); 
const decryptmsg = document.getElementById("decryptmsg").value;
document.getElementById("decryptmsg").value = cipher.decode (deslocamento, decryptmsg);
});
