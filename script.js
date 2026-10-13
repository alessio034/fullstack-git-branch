const steps = [
  { title: "Punto de partida",
    text: "Tienes dos commits (A y B) en <code>main</code>. HEAD apunta a <code>main</code>.",
    cmd: "git log --oneline" },
  { title: "Crear una rama",
    text: "Creas <code>feature</code> y te cambias a ella. Ambas ramas apuntan al mismo commit B; solo se movió HEAD.",
    cmd: "git switch -c feature" },
  { title: "Commits en la rama",
    text: "Haces commits C y D. Solo <code>feature</code> avanza; <code>main</code> sigue en B, intacta.",
    cmd: "git add .\ngit commit -m \"C\"\ngit commit -m \"D\"" },
  { title: "main también avanza",
    text: "Mientras tanto, alguien agrega el commit E a <code>main</code>. Ahora las ramas han <strong>divergido</strong>.",
    cmd: "# (otra persona, en main)\ngit commit -m \"E\"" },
  { title: "Merge",
    text: "Vuelves a <code>main</code> y unes <code>feature</code>. Git crea el commit de merge M, que tiene dos padres (E y D).",
    cmd: "git switch main\ngit merge feature" },
  { title: "Limpieza",
    text: "La rama ya está unida, así que puedes borrarla. Los commits C y D siguen en el historial de <code>main</code>.",
    cmd: "git branch -d feature" }
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
