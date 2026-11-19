
function escolherHumor(humor) {
  document.getElementById('resposta').textContent =
    'Hoje você está se sentindo: ' + humor +
    '. Respeite seu tempo e cuide de você! 💗';
}

const caixas = document.querySelectorAll('.habit-card input');
const barra = document.getElementById('barra');
const progresso = document.getElementById('progresso');

function atualizarProgresso() {
  const total = [...caixas].filter(c => c.checked).length;
  barra.style.width = (total / caixas.length * 100) + '%';
  progresso.textContent = total + ' de 5 hábitos concluídos';
}

caixas.forEach(c => c.addEventListener('change', atualizarProgresso));

const frases = [
  'Você não precisa ter tudo resolvido hoje.',
  'Seu descanso também é importante.',
  'Pequenos passos também são progresso.',
  'Você merece o mesmo carinho que oferece aos outros.',
  'Respeite seu tempo. Cada flor tem sua estação.'
];

function novaFrase() {
  const atual = document.getElementById('frase').textContent;
  let nova;
  do {
    nova = frases[Math.floor(Math.random() * frases.length)];
  } while (nova === atual);

  document.getElementById('frase').textContent = nova;
}
