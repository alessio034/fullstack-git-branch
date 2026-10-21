// Muestra los ejemplos del arreglo "ejemplos" (definido en ejemplos.js o docker-ejemplos.js).
const select = document.getElementById("ejemplo-select");
const contenedor = document.getElementById("ejemplo");

const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function resaltar(cmd) {
  // Pone en gris los comentarios (# ...)
  return cmd.split("\n").map(linea => {
    const i = linea.indexOf("#");
    if (i === -1) return esc(linea);
    return esc(linea.slice(0, i)) + `<span class="comment">${esc(linea.slice(i))}</span>`;
  }).join("\n");
}

function bloqueCodigo(cmd) {
  return `<div class="code-wrap">
    <button class="copy-btn" type="button" data-cmd="${esc(cmd)}">Copiar</button>
    <pre><code>${resaltar(cmd)}</code></pre>
  </div>`;
}

function render(id) {
  const ej = ejemplos.find(e => e.id === id) || ejemplos[0];
  const pasos = ej.pasos.map(p => `
    <li class="paso ${p.tipo === "web" ? "paso-web" : ""}">
      <h3>${p.tipo === "web" ? "🌐 " : ""}${p.titulo}</h3>
      ${p.cmd ? bloqueCodigo(p.cmd) : ""}
      ${p.lista ? `<ul class="web-list">${p.lista.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
      ${p.explica ? `<p>${p.explica}</p>` : ""}
      ${p.salida ? `<div class="salida"><span>Salida esperada</span><pre><code>${esc(p.salida)}</code></pre></div>` : ""}
    </li>`).join("");

  contenedor.innerHTML = `
    <h2>${ej.titulo}</h2>
    <p>${ej.intro}</p>
    <ol class="flow">${pasos}</ol>
    <div class="card resumen">
      <h3>⚡ Resumen rápido</h3>
      ${bloqueCodigo(ej.resumen)}
    </div>`;
}

// Llenar el select
select.innerHTML = ejemplos.map(e => `<option value="${e.id}">${e.titulo}</option>`).join("");

// Permite enlazar directo a un ejemplo: ejemplos.html#pr
const inicial = location.hash.slice(1);
if (ejemplos.some(e => e.id === inicial)) select.value = inicial;
render(select.value);

select.addEventListener("change", () => {
  history.replaceState(null, "", "#" + select.value);
  render(select.value);
});

// Botón copiar
contenedor.addEventListener("click", async e => {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;
  const texto = btn.dataset.cmd.split("\n").filter(l => !l.trim().startsWith("#")).join("\n");
  try {
    await navigator.clipboard.writeText(texto);
    btn.textContent = "¡Copiado!";
  } catch {
    btn.textContent = "No se pudo copiar";
  }
  setTimeout(() => (btn.textContent = "Copiar"), 1500);
});
