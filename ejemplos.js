// Cada ejemplo tiene una lista de pasos.
// tipo "cmd": comandos de terminal · tipo "web": acciones en github.com
const ejemplos = [
  {
    id: "local",
    titulo: "1. Iniciar un proyecto local (git init → commit)",
    intro: "Convierte una carpeta de tu computadora en un repositorio Git y guarda tu primer commit. Todo ocurre en tu equipo, sin internet.",
    pasos: [
      { tipo: "cmd", titulo: "Configura tu identidad (solo la primera vez en tu computadora)",
        cmd: 'git config --global user.name "Tu Nombre"\ngit config --global user.email "tu@correo.com"',
        explica: "Git firma cada commit con este nombre y correo. Usa el mismo correo de tu cuenta de GitHub." },
      { tipo: "cmd", titulo: "Entra a la carpeta del proyecto",
        cmd: "cd mi-proyecto",
        explica: "Todos los comandos siguientes se ejecutan dentro de esta carpeta." },
      { tipo: "cmd", titulo: "Inicializa el repositorio",
        cmd: "git init",
        explica: "Crea la carpeta oculta .git, donde Git guarda todo el historial.",
        salida: "Initialized empty Git repository in .../mi-proyecto/.git/" },
      { tipo: "cmd", titulo: "Revisa el estado",
        cmd: "git status",
        explica: "Muestra qué archivos son nuevos (untracked), cuáles cambiaron y cuáles están listos para commit." },
      { tipo: "cmd", titulo: "Agrega los archivos al área de preparación (staging)",
        cmd: "git add .\n# o un archivo específico:\ngit add index.html",
        explica: "El punto (.) agrega todos los archivos de la carpeta. Solo lo que esté en staging entra en el commit." },
      { tipo: "cmd", titulo: "Haz el commit",
        cmd: 'git commit -m "Primer commit"',
        explica: "Guarda una “foto” del proyecto con un mensaje que describe el cambio." },
      { tipo: "cmd", titulo: "Verifica el historial",
        cmd: "git log --oneline",
        explica: "Lista los commits, del más reciente al más antiguo.",
        salida: "a1b2c3d (HEAD -> main) Primer commit" }
    ],
    resumen: 'git init\ngit add .\ngit commit -m "Primer commit"'
  },
  {
    id: "subir",
    titulo: "2. Subir el proyecto a GitHub por primera vez",
    intro: "Conecta tu repositorio local con un repositorio nuevo en GitHub y sube tu código. Necesitas haber hecho al menos un commit (ejemplo 1).",
    pasos: [
      { tipo: "web", titulo: "Crea el repositorio en GitHub",
        lista: [
          "Entra a github.com y pulsa el botón <strong>New</strong> (o el <strong>+</strong> arriba a la derecha → <em>New repository</em>).",
          "Escribe el nombre del repositorio, por ejemplo <code>mi-proyecto</code>.",
          "<strong>No</strong> marques “Add a README”, .gitignore ni licencia (tu proyecto local ya tiene contenido).",
          "Pulsa <strong>Create repository</strong> y copia la URL, por ejemplo <code>https://github.com/usuario/mi-proyecto.git</code>."
        ] },
      { tipo: "cmd", titulo: "Asegúrate de que tu rama se llame main",
        cmd: "git branch -M main",
        explica: "Renombra la rama actual a main (algunas instalaciones antiguas usan master)." },
      { tipo: "cmd", titulo: "Conecta tu repositorio local con GitHub",
        cmd: "git remote add origin https://github.com/usuario/mi-proyecto.git",
        explica: "“origin” es el nombre corto que le damos al repositorio remoto." },
      { tipo: "cmd", titulo: "Comprueba la conexión",
        cmd: "git remote -v",
        salida: "origin  https://github.com/usuario/mi-proyecto.git (fetch)\norigin  https://github.com/usuario/mi-proyecto.git (push)" },
      { tipo: "cmd", titulo: "Sube tu código",
        cmd: "git push -u origin main",
        explica: "La opción -u vincula tu main local con origin/main. A partir de ahora basta con escribir git push." },
      { tipo: "web", titulo: "Verifica en GitHub",
        lista: ["Recarga la página del repositorio: ahora verás tus archivos y tu commit."] }
    ],
    resumen: "git branch -M main\ngit remote add origin https://github.com/usuario/mi-proyecto.git\ngit push -u origin main"
  },
  {
    id: "actualizar",
    titulo: "3. Subir una actualización a GitHub",
    intro: "Ya tienes el proyecto en GitHub y hiciste cambios. Así los subes.",
    pasos: [
      { tipo: "cmd", titulo: "Trae los cambios más recientes (si trabajas en equipo o desde otra computadora)",
        cmd: "git pull",
        explica: "Descarga y une lo que otros hayan subido, para evitar conflictos al hacer push." },
      { tipo: "cmd", titulo: "Mira qué cambió",
        cmd: "git status\ngit diff",
        explica: "git diff muestra línea por línea lo que modificaste." },
      { tipo: "cmd", titulo: "Prepara los cambios",
        cmd: "git add .",
        explica: "Agrega todos los archivos modificados y nuevos al staging." },
      { tipo: "cmd", titulo: "Haz el commit",
        cmd: 'git commit -m "Agrega sección de contacto"',
        explica: "Usa un mensaje que explique qué cambiaste." },
      { tipo: "cmd", titulo: "Sube los cambios",
        cmd: "git push",
        explica: "Como ya usaste -u la primera vez, Git sabe a qué rama remota enviar los cambios." }
    ],
    resumen: 'git pull\ngit add .\ngit commit -m "Describe el cambio"\ngit push'
  },
  {
    id: "crear-rama",
    titulo: "4. Crear una rama (branch)",
    intro: "Crea una rama para trabajar en una nueva funcionalidad sin afectar main.",
    pasos: [
      { tipo: "cmd", titulo: "Ve a main y actualízala",
        cmd: "git switch main\ngit pull",
        explica: "Así tu nueva rama parte del código más reciente." },
      { tipo: "cmd", titulo: "Crea la rama y cámbiate a ella",
        cmd: "git switch -c feature/login",
        explica: "-c crea la rama. Equivale a git checkout -b feature/login.",
        salida: "Switched to a new branch 'feature/login'" },
      { tipo: "cmd", titulo: "Confirma en qué rama estás",
        cmd: "git branch",
        explica: "La rama actual aparece marcada con un asterisco (*).",
        salida: "* feature/login\n  main" }
    ],
    resumen: "git switch main\ngit pull\ngit switch -c feature/login"
  },
  {
    id: "subir-rama",
    titulo: "5. Subir cambios a una rama",
    intro: "Ya estás en tu rama (ejemplo 4) e hiciste cambios. Así los guardas y los subes a GitHub.",
    pasos: [
      { tipo: "cmd", titulo: "Verifica que estás en tu rama",
        cmd: "git branch",
        salida: "* feature/login\n  main" },
      { tipo: "cmd", titulo: "Prepara y guarda los cambios",
        cmd: 'git add .\ngit commit -m "Agrega formulario de login"',
        explica: "Puedes hacer varios commits en la rama antes de subirla." },
      { tipo: "cmd", titulo: "Sube la rama por primera vez",
        cmd: "git push -u origin feature/login",
        explica: "Crea la rama en GitHub y la vincula con tu rama local." },
      { tipo: "cmd", titulo: "Siguientes subidas",
        cmd: 'git add .\ngit commit -m "Valida contraseña"\ngit push',
        explica: "Después de la primera vez, git push es suficiente." }
    ],
    resumen: 'git add .\ngit commit -m "Mensaje"\ngit push -u origin feature/login   # la primera vez\ngit push                           # las siguientes'
  },
  {
    id: "merge",
    titulo: "6. Hacer un merge (unir ramas en local)",
    intro: "Une tu rama con main desde la terminal. Útil si trabajas solo; en equipo se recomienda un Pull Request (ejemplo 7).",
    pasos: [
      { tipo: "cmd", titulo: "Asegúrate de no tener cambios pendientes",
        cmd: "git status",
        explica: "Debe decir “nothing to commit, working tree clean”. Si no, haz commit primero." },
      { tipo: "cmd", titulo: "Cámbiate a la rama destino (main) y actualízala",
        cmd: "git switch main\ngit pull" },
      { tipo: "cmd", titulo: "Une tu rama",
        cmd: "git merge feature/login",
        explica: "Trae los commits de feature/login a main. Si hay conflictos, Git te avisará." },
      { tipo: "cmd", titulo: "Si hay conflictos: resuélvelos",
        cmd: "# 1. Abre los archivos marcados y elige qué código dejar\n# 2. Borra las marcas <<<<<<< ======= >>>>>>>\ngit add .\ngit commit\n\n# o cancela todo el merge:\ngit merge --abort" },
      { tipo: "cmd", titulo: "Sube main actualizada a GitHub",
        cmd: "git push" },
      { tipo: "cmd", titulo: "Borra la rama (opcional)",
        cmd: "git branch -d feature/login\ngit push origin --delete feature/login",
        explica: "La primera línea la borra en local y la segunda en GitHub." }
    ],
    resumen: "git switch main\ngit pull\ngit merge feature/login\ngit push\ngit branch -d feature/login"
  },
  {
    id: "pr",
    titulo: "7. Pull Request (solicitud de merge) en GitHub",
    intro: "La forma recomendada de unir ramas en equipo: subes tu rama, abres un Pull Request y, tras la revisión, se hace el merge en GitHub. (En GitLab se llama Merge Request.)",
    pasos: [
      { tipo: "cmd", titulo: "Sube tu rama con los cambios",
        cmd: 'git switch feature/login\ngit add .\ngit commit -m "Termina login"\ngit push -u origin feature/login' },
      { tipo: "web", titulo: "Abre el Pull Request",
        lista: [
          "Entra a tu repositorio en GitHub. Aparecerá un aviso amarillo con el botón <strong>Compare &amp; pull request</strong>. Púlsalo.",
          "Si no aparece, ve a la pestaña <strong>Pull requests</strong> → <strong>New pull request</strong>.",
          "Elige <strong>base: main</strong> (destino) y <strong>compare: feature/login</strong> (tu rama).",
          "Escribe un título y una descripción de lo que hiciste.",
          "Pulsa <strong>Create pull request</strong>."
        ] },
      { tipo: "web", titulo: "Revisión",
        lista: [
          "Tus compañeros revisan en la pestaña <strong>Files changed</strong>, comentan o aprueban.",
          "Si te piden cambios, corrígelos en tu rama y haz <code>git push</code>. El PR se actualiza solo."
        ] },
      { tipo: "web", titulo: "Haz el merge",
        lista: [
          "Pulsa <strong>Merge pull request</strong> → <strong>Confirm merge</strong>.",
          "Luego pulsa <strong>Delete branch</strong> para borrar la rama en GitHub."
        ] },
      { tipo: "cmd", titulo: "Actualiza tu copia local",
        cmd: "git switch main\ngit pull\ngit branch -d feature/login",
        explica: "Traes el merge a tu main local y borras la rama que ya no necesitas." },
      { tipo: "cmd", titulo: "Alternativa: todo desde la terminal con GitHub CLI",
        cmd: 'gh pr create --base main --head feature/login --title "Login" --body "Agrega login"\ngh pr list\ngh pr merge --merge --delete-branch',
        explica: "Requiere instalar GitHub CLI (gh) e iniciar sesión con gh auth login." }
    ],
    resumen: 'git push -u origin feature/login\n# GitHub: Compare & pull request → Create → Merge\ngit switch main\ngit pull\ngit branch -d feature/login'
  }
];

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
