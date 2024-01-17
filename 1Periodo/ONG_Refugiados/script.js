let image = document.getElementById('imge');
let images = ['imagemcasa1.png', 'imagemcasa2.jpeg', 'imagemcasa3.jpeg']
setInterval(async function(){
  let random = Math.floor(Math.random() * 3);
  image.src = images[random];
}, 1000);
