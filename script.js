const helloButton = document.getElementById('helloButton');
const greeting = document.getElementById('greeting');

helloButton.addEventListener('click', () => {
  greeting.textContent = 'Сайн байна уу! Миний веб хуудсанд зочилсонд баярлалаа. 😊';
});

document.getElementById('year').textContent = new Date().getFullYear();
