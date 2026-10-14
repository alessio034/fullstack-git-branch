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
  },
  {
    id: "clonar",
    titulo: "8. Clonar un repositorio existente",
    intro: "Descarga a tu computadora un repositorio que ya está en GitHub (tuyo o de otra persona), con todo su historial y sus ramas. No necesitas hacer git init: el clon ya es un repositorio.",
    pasos: [
      { tipo: "web", titulo: "Copia la URL del repositorio",
        lista: [
          "Entra al repositorio en GitHub y pulsa el botón verde <strong>&lt;&gt; Code</strong>.",
          "En la pestaña <strong>HTTPS</strong>, copia la URL, por ejemplo <code>https://github.com/usuario/mi-proyecto.git</code>.",
          "Si configuraste una llave SSH, puedes usar la pestaña <strong>SSH</strong>: <code>git@github.com:usuario/mi-proyecto.git</code>."
        ] },
      { tipo: "cmd", titulo: "Ve a la carpeta donde quieres guardar el proyecto",
        cmd: "cd ~/proyectos",
        explica: "git clone crea una carpeta nueva dentro de la carpeta en la que estás." },
      { tipo: "cmd", titulo: "Clona el repositorio",
        cmd: "git clone https://github.com/usuario/mi-proyecto.git",
        explica: "Descarga los archivos, el historial y las ramas, y configura automáticamente el remoto origin.",
        salida: "Cloning into 'mi-proyecto'...\nremote: Enumerating objects: 42, done.\nReceiving objects: 100% (42/42), done." },
      { tipo: "cmd", titulo: "Opcional: elige otro nombre para la carpeta",
        cmd: "git clone https://github.com/usuario/mi-proyecto.git otro-nombre\n# o clonar en la carpeta actual (debe estar vacía):\ngit clone https://github.com/usuario/mi-proyecto.git ." },
      { tipo: "cmd", titulo: "Entra a la carpeta del proyecto",
        cmd: "cd mi-proyecto" },
      { tipo: "cmd", titulo: "Comprueba el remoto y las ramas",
        cmd: "git remote -v\ngit branch -a",
        explica: "Solo verás main como rama local. Las demás aparecen como remotes/origin/...",
        salida: "origin  https://github.com/usuario/mi-proyecto.git (fetch)\norigin  https://github.com/usuario/mi-proyecto.git (push)\n* main\n  remotes/origin/HEAD -> origin/main\n  remotes/origin/feature/login\n  remotes/origin/main" },
      { tipo: "cmd", titulo: "Trabaja en una rama remota",
        cmd: "git switch feature/login",
        explica: "Git crea la rama local a partir de origin/feature/login y la deja vinculada para hacer pull y push.",
        salida: "branch 'feature/login' set up to track 'origin/feature/login'.\nSwitched to a new branch 'feature/login'" },
      { tipo: "cmd", titulo: "Instala las dependencias (si el proyecto las usa)",
        cmd: "npm install",
        explica: "Carpetas como node_modules no se suben a GitHub, así que hay que instalarlas después de clonar. Revisa el README del proyecto." },
      { tipo: "web", titulo: "¿Repositorio de otra persona? Haz un fork",
        lista: [
          "Si no tienes permiso para hacer push al repositorio, pulsa <strong>Fork</strong> en GitHub para crear una copia en tu cuenta.",
          "Clona <strong>tu fork</strong> en lugar del original. Desde ahí podrás subir cambios y abrir Pull Requests hacia el repositorio original. Mira el ejemplo 10 para el proceso completo."
        ] }
    ],
    resumen: "git clone https://github.com/usuario/mi-proyecto.git\ncd mi-proyecto\ngit branch -a\ngit switch feature/login   # para trabajar en otra rama"
  },
  {
    id: "stash",
    titulo: "9. Guardar cambios temporalmente con git stash",
    intro: "Estás a mitad de un cambio en feature/login y necesitas ir a main a corregir algo urgente, pero tu trabajo aún no está listo para un commit. git stash guarda tus cambios en un “cajón”, deja la carpeta limpia y te permite recuperarlos después.",
    pasos: [
      { tipo: "cmd", titulo: "Mira los cambios pendientes",
        cmd: "git status",
        salida: "On branch feature/login\nChanges not staged for commit:\n        modified:   login.js" },
      { tipo: "cmd", titulo: "Guarda los cambios en el stash con un mensaje",
        cmd: 'git stash push -m "login a medias"',
        explica: "Tu carpeta vuelve al estado del último commit. Sin -m también funciona (git stash), pero el mensaje te ayuda a identificarlo después.",
        salida: "Saved working directory and index state On feature/login: login a medias" },
      { tipo: "cmd", titulo: "Incluye también los archivos nuevos (si los hay)",
        cmd: 'git stash push -u -m "login a medias"',
        explica: "Por defecto, stash solo guarda archivos que Git ya conoce. La opción -u también guarda los archivos nuevos (untracked)." },
      { tipo: "cmd", titulo: "Haz el trabajo urgente en otra rama",
        cmd: 'git switch main\n# ... corriges el error ...\ngit add .\ngit commit -m "Corrige error urgente"\ngit push',
        explica: "Como la carpeta quedó limpia, puedes cambiar de rama sin problemas." },
      { tipo: "cmd", titulo: "Vuelve a tu rama y mira lo que guardaste",
        cmd: "git switch feature/login\ngit stash list",
        explica: "stash@{0} es el más reciente. Puedes tener varios stashes guardados. En PowerShell escríbelo entre comillas: 'stash@{0}'.",
        salida: "stash@{0}: On feature/login: login a medias" },
      { tipo: "cmd", titulo: "Opcional: revisa qué contiene un stash",
        cmd: "git stash show -p stash@{0}",
        explica: "Muestra los cambios guardados línea por línea, sin aplicarlos." },
      { tipo: "cmd", titulo: "Recupera tus cambios",
        cmd: "git stash pop\n# o aplicarlos sin borrarlos del stash:\ngit stash apply stash@{0}",
        explica: "pop aplica los cambios y los borra del stash. apply los aplica, pero los conserva por si los necesitas de nuevo." },
      { tipo: "cmd", titulo: "Si aparece un conflicto al recuperar",
        cmd: "# Resuelve el conflicto en el archivo, luego:\ngit add login.js\ngit stash drop",
        explica: "Si hay conflicto, pop no borra el stash, así que lo eliminas a mano cuando termines." },
      { tipo: "cmd", titulo: "Limpia los stashes que ya no necesitas",
        cmd: "git stash drop stash@{0}   # borra uno\ngit stash clear            # borra todos",
        explica: "Cuidado: clear borra todos los stashes y no se puede deshacer." },
      { tipo: "cmd", titulo: "Truco: convierte un stash en una rama nueva",
        cmd: "git stash branch feature/login-v2 stash@{0}",
        explica: "Crea una rama desde el commit donde guardaste el stash y aplica ahí los cambios. Es útil si ya no se aplican bien en la rama original." }
    ],
    resumen: 'git stash push -u -m "trabajo a medias"\ngit switch main          # haces lo urgente\ngit switch feature/login\ngit stash list\ngit stash pop'
  },
  {
    id: "fork",
    titulo: "10. Contribuir a otro proyecto con un fork",
    intro: "Un fork es una copia de un repositorio de otra persona dentro de tu cuenta de GitHub. Como no tienes permiso para hacer push al original, trabajas en tu fork y luego envías tus cambios al proyecto original con un Pull Request. En este ejemplo, el original es <code>autor/proyecto</code> y tu usuario es <code>tu-usuario</code>.",
    pasos: [
      { tipo: "web", titulo: "Haz el fork en GitHub",
        lista: [
          "Entra al repositorio original, por ejemplo <code>https://github.com/autor/proyecto</code>.",
          "Pulsa el botón <strong>Fork</strong> (arriba a la derecha).",
          "Deja tu cuenta como <strong>Owner</strong> y el mismo nombre de repositorio. Deja marcada la opción <em>Copy the main branch only</em>.",
          "Pulsa <strong>Create fork</strong>. Ahora tienes tu copia en <code>https://github.com/tu-usuario/proyecto</code>."
        ] },
      { tipo: "cmd", titulo: "Clona TU fork (no el original)",
        cmd: "git clone https://github.com/tu-usuario/proyecto.git\ncd proyecto",
        explica: "Así origin apunta a tu fork, donde sí tienes permiso para hacer push." },
      { tipo: "cmd", titulo: "Conecta el repositorio original como upstream",
        cmd: "git remote add upstream https://github.com/autor/proyecto.git\ngit remote -v",
        explica: "origin = tu fork (subes aquí). upstream = el original (de aquí traes las novedades). El nombre upstream es una convención.",
        salida: "origin    https://github.com/tu-usuario/proyecto.git (fetch)\norigin    https://github.com/tu-usuario/proyecto.git (push)\nupstream  https://github.com/autor/proyecto.git (fetch)\nupstream  https://github.com/autor/proyecto.git (push)" },
      { tipo: "cmd", titulo: "Actualiza tu main con el original",
        cmd: "git switch main\ngit fetch upstream\ngit merge upstream/main\ngit push origin main",
        explica: "Hazlo antes de empezar: el proyecto original pudo avanzar desde que hiciste el fork. También puedes usar el botón <strong>Sync fork</strong> en GitHub y luego <code>git pull</code>." },
      { tipo: "cmd", titulo: "Crea una rama para tu contribución",
        cmd: "git switch -c fix/typo-readme",
        explica: "No trabajes directo en main: una rama por contribución mantiene limpio tu fork y facilita el PR." },
      { tipo: "cmd", titulo: "Haz tus cambios y el commit",
        cmd: 'git status\ngit add .\ngit commit -m "Corrige error de ortografía en el README"',
        explica: "Lee antes el README o el archivo CONTRIBUTING.md del proyecto: muchas veces indica cómo escribir los commits o qué tests ejecutar." },
      { tipo: "cmd", titulo: "Sube la rama a TU fork",
        cmd: "git push -u origin fix/typo-readme",
        explica: "Se sube a origin (tu fork). No puedes hacer push a upstream." },
      { tipo: "web", titulo: "Abre el Pull Request hacia el repositorio original",
        lista: [
          "Entra a tu fork en GitHub. Aparecerá el aviso <strong>Compare &amp; pull request</strong>. Púlsalo.",
          "Revisa que diga <strong>base repository: autor/proyecto</strong>, <strong>base: main</strong> ← <strong>head repository: tu-usuario/proyecto</strong>, <strong>compare: fix/typo-readme</strong>.",
          "Escribe un título claro y explica qué cambiaste y por qué.",
          "Deja marcada <em>Allow edits by maintainers</em> para que los responsables puedan ajustar detalles.",
          "Pulsa <strong>Create pull request</strong>."
        ] },
      { tipo: "web", titulo: "Responde a la revisión",
        lista: [
          "Los responsables del proyecto pueden comentar o pedir cambios.",
          "Corrígelos en la misma rama y haz <code>git push</code>: el PR se actualiza solo.",
          "Cuando lo aprueben, ellos harán el merge. ¡Tu contribución quedará en el proyecto original!"
        ] },
      { tipo: "cmd", titulo: "Si el original avanzó mientras esperabas",
        cmd: "git fetch upstream\ngit merge upstream/main\n# resuelve conflictos si los hay, luego:\ngit push",
        explica: "Así tu rama queda al día con el proyecto original y el PR se puede unir sin conflictos." },
      { tipo: "cmd", titulo: "Después del merge: limpia y sincroniza",
        cmd: "git switch main\ngit fetch upstream\ngit merge upstream/main\ngit push origin main\ngit branch -d fix/typo-readme\ngit push origin --delete fix/typo-readme",
        explica: "Tu main y tu fork quedan al día con el original, y borras la rama que ya no necesitas." },
      { tipo: "cmd", titulo: "Alternativa: todo desde la terminal con GitHub CLI",
        cmd: "gh repo fork autor/proyecto --clone\ncd proyecto\n# ... rama, cambios, commit y push ...\ngh pr create --repo autor/proyecto --title \"Corrige README\" --body \"Descripción\"",
        explica: "gh repo fork crea el fork, lo clona y configura upstream automáticamente." }
    ],
    resumen: "# 🌐 GitHub: Fork en autor/proyecto\ngit clone https://github.com/tu-usuario/proyecto.git\ncd proyecto\ngit remote add upstream https://github.com/autor/proyecto.git\ngit fetch upstream\ngit merge upstream/main\ngit switch -c fix/typo-readme\ngit add .\ngit commit -m \"Describe el cambio\"\ngit push -u origin fix/typo-readme\n# 🌐 GitHub: Compare & pull request → Create pull request"
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
