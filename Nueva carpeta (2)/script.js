document.getElementById('si').addEventListener('click', function() {
    document.getElementById('message').textContent = '¡Yo también te quiero, bb!';
    const image = document.getElementById('image');
    image.src = '1.jpg'; // Cambia esto por la URL de tu imagen
    image.alt = 'Imagen de amor'; // Cambia esto por una descripción de tu imagen
    image.style.display = 'block'; // Muestra la imagen
});

let noClickCount = 0;
const noResponses = [
    '¿Segura? 🤔',
    '¡Mira que yo te quiero, bb! 😄',
    '¡Piénsalo bien! 😢',
    '¿Segurita segurita! 🌟',
    '¡No digas que no, conchatu! ✨',
    '¿Quiereme o te secuestro? 😅',
    '¡Igual te vas a casar conmigo, bb! ',
    '¡Igualito vas a ser la madre de mis hijos! 😄',
];

document.getElementById('no').addEventListener('click', function() {
    if (noClickCount < noResponses.length) {
        document.getElementById('message').textContent = noResponses[noClickCount];
    } else {
        this.style.display = 'none'; // Oculta el botón "No"
    }
    noClickCount++;
});

