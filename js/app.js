alert("Seja bem vindx ao confessionário! Aqui você pode gritar o que quiser. Solte seus demônios.");
const capteGrito = prompt("O que você quer gritar?");
const grito = capteGrito.toUpperCase()+capteGrito.charAt(capteGrito.length-1).repeat(2).toUpperCase();
const mensagemGrito = `Aqui vai: 😱 <h1>${grito}!!1!</h1>`;
document.querySelector('main').innerHTML = mensagemGrito;