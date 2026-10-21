const steps = [
  { title: "Escribes un Dockerfile",
    text: "Todo empieza con la receta: un <code>Dockerfile</code> que dice qué imagen base usar, qué copiar y qué comando ejecutar.",
    cmd: "FROM node:20-alpine\nWORKDIR /app\nCOPY . .\nRUN npm ci\nCMD [\"node\", \"server.js\"]" },
  { title: "Construir la imagen",
    text: "<code>docker build</code> lee el Dockerfile y crea la <strong>imagen</strong> <code>mi-app:1.0</code>. La imagen es de solo lectura: un molde.",
    cmd: "docker build -t mi-app:1.0 ." },
  { title: "Ejecutar un contenedor",
    text: "<code>docker run</code> crea un <strong>contenedor</strong> a partir de la imagen y lo arranca. Con <code>-p</code> lo abres en <code>localhost:3000</code>.",
    cmd: "docker run -d -p 3000:3000 --name web mi-app:1.0" },
  { title: "Otro contenedor de la misma imagen",
    text: "De una sola imagen puedes crear <strong>varios contenedores</strong> independientes. Solo cambian el nombre y el puerto.",
    cmd: "docker run -d -p 3001:3000 --name web2 mi-app:1.0\ndocker ps" },
  { title: "Detener un contenedor",
    text: "<code>web</code> se detiene, pero sigue existiendo. Lo puedes ver con <code>docker ps -a</code> y volver a arrancar con <code>docker start web</code>.",
    cmd: "docker stop web" },
  { title: "Eliminar el contenedor",
    text: "Borras <code>web</code>. La <strong>imagen sigue intacta</strong>, así que puedes crear otro contenedor cuando quieras.",
    cmd: "docker rm web" },
  { title: "Compartir la imagen",
    text: "Subes la imagen a <strong>Docker Hub</strong>. Ahora cualquiera puede descargarla con <code>docker pull</code> y ejecutarla igual que tú.",
    cmd: "docker tag mi-app:1.0 usuario/mi-app:1.0\ndocker push usuario/mi-app:1.0" }
];
let step = 0;
const els = document.querySelectorAll(".sim [data-show]");
const desc = document.getElementById("desc");
const count = document.getElementById("count");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function render() {
  els.forEach(el => {
    const [a, b] = el.dataset.show.split("-").map(Number);
    el.classList.toggle("hidden", step < a || step > b);
  });
  const s = steps[step];
  desc.innerHTML = `<strong>${s.title}.</strong> ${s.text}<pre><code>${esc(s.cmd)}</code></pre>`;
  count.textContent = `Paso ${step + 1} de ${steps.length}`;
  prev.disabled = step === 0;
  next.disabled = step === steps.length - 1;
}
prev.onclick = () => { if (step > 0) { step--; render(); } };
next.onclick = () => { if (step < steps.length - 1) { step++; render(); } };
render();
