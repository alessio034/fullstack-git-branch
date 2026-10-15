# 🌿 Ramas en Git y GitHub

Guía web interactiva, en español, para aprender a trabajar con **ramas en Git y GitHub**: qué son, cómo se crean, cómo se unen, cómo se colabora con Pull Requests y cómo se contribuye a proyectos de otras personas con un fork.

Es un sitio estático: solo usa HTML, CSS y JavaScript, sin dependencias ni proceso de compilación.

---

## 📁 Estructura del proyecto

| Archivo | Qué contiene |
|---|---|
| `index.html` | Guía teórica sobre ramas, organizada en 10 secciones |
| `script.js` | Lógica del simulador paso a paso del historial de commits |
| `ejemplos.html` | Página de ejemplos prácticos con un selector |
| `ejemplos.js` | Datos de los 11 ejemplos y el código que los muestra |
| `styles.css` | Estilos compartidos por ambas páginas |

---

## 🚀 Cómo usarlo

1. Clona o descarga el repositorio:
   ```bash
   git clone https://github.com/alessio034/fullstack-git-branch.git
   cd fullstack-git-branch
   ```
2. Abre `index.html` en tu navegador. Con doble clic basta, no se necesita servidor.
3. Desde la barra de navegación entra a **📘 Ejemplos prácticos** (`ejemplos.html`).

> 💡 Si usas VS Code, la extensión *Live Server* recarga la página automáticamente al guardar cambios.

---

## 📖 Página 1: Guía de ramas (`index.html`)

Explica los conceptos en orden:

1. **¿Qué es una rama?** Una rama es un puntero ligero a un commit. También explica `main`, `HEAD` y las ramas de trabajo.
2. **Simulador paso a paso.** Un diagrama SVG muestra cómo evoluciona el historial con los botones *Anterior* y *Siguiente* (controlado por `script.js`):
   - Punto de partida: commits A y B en `main`.
   - Crear la rama `feature`.
   - Hacer commits C y D en la rama.
   - `main` también avanza (commit E) y las ramas divergen.
   - Merge: se crea el commit M con dos padres.
   - Limpieza: se borra la rama.
3. **Comandos básicos:** ver, crear, cambiar, renombrar y eliminar ramas.
4. **Merge y conflictos:** fast-forward, merge de tres vías, rebase y cómo resolver un conflicto.
5. **Ramas remotas:** `push -u`, `fetch`, `pull`, `origin/main` y cómo borrar ramas en GitHub.
6. **GitHub y Pull Requests:** crear y revisar un PR, opciones de merge, GitHub CLI y reglas de protección.
7. **Flujo de trabajo completo (GitHub Flow)** en 8 pasos.
8. **Git Flow:** ramas `main`, `develop`, `feature`, `release` y `hotfix`, diagrama, ciclo de una versión, comandos (manuales y con la extensión `git flow`) y comparación con GitHub Flow y trunk-based.
9. **Buenas prácticas:** nombres de ramas, commits claros y ramas pequeñas.
10. **Chuleta rápida:** tabla con los comandos más usados.

---

## 📘 Página 2: Ejemplos prácticos (`ejemplos.html`)

Eliges una situación en el selector **“¿Qué quieres hacer?”** y aparece el paso a paso:

- **Cajas oscuras:** comandos para la terminal. Tienen un botón **Copiar** que copia los comandos sin los comentarios `#`.
- **Pasos con 🌐:** acciones que se hacen en la web de GitHub.
- **Salida esperada:** lo que deberías ver en la terminal.
- **⚡ Resumen rápido:** todos los comandos del ejemplo juntos.

Cada ejemplo tiene su propio enlace directo, por ejemplo `ejemplos.html#fork`.

### Los 11 ejemplos

| # | Ejemplo | Enlace | Comandos clave |
|---|---|---|---|
| 1 | Iniciar un proyecto local | `#local` | `git init`, `git add`, `git commit` |
| 2 | Subir el proyecto a GitHub por primera vez | `#subir` | `git remote add origin`, `git push -u` |
| 3 | Subir una actualización | `#actualizar` | `git pull`, `git add`, `git commit`, `git push` |
| 4 | Crear una rama | `#crear-rama` | `git switch -c` |
| 5 | Subir cambios a una rama | `#subir-rama` | `git push -u origin <rama>` |
| 6 | Hacer un merge en local | `#merge` | `git merge`, `git merge --abort` |
| 7 | Pull Request en GitHub | `#pr` | Compare & pull request, `gh pr create` |
| 8 | Clonar un repositorio existente | `#clonar` | `git clone`, `git branch -a` |
| 9 | Guardar cambios temporalmente con stash | `#stash` | `git stash push`, `list`, `pop`, `apply`, `drop` |
| 10 | Contribuir a otro proyecto con un fork | `#fork` | `git remote add upstream`, `git fetch upstream`, PR al original |
| 11 | Publicar una versión con Git Flow | `#gitflow` | `git merge --no-ff`, `git tag -a`, `git flow` |

---

## 🍴 Ejemplo destacado: el flujo de un fork

Un **fork** es una copia de un repositorio ajeno en tu cuenta de GitHub. Se usa cuando quieres contribuir a un proyecto en el que no tienes permiso para hacer push.

```bash
# 1. 🌐 En GitHub: pulsa "Fork" en autor/proyecto → "Create fork"

# 2. Clona TU fork (no el original)
git clone https://github.com/tu-usuario/proyecto.git
cd proyecto

# 3. Conecta el repositorio original como "upstream"
git remote add upstream https://github.com/autor/proyecto.git
git remote -v        # origin = tu fork, upstream = el original

# 4. Pon tu main al día con el original
git switch main
git fetch upstream
git merge upstream/main
git push origin main

# 5. Crea una rama para tu contribución
git switch -c fix/typo-readme

# 6. Haz tus cambios y el commit
git add .
git commit -m "Corrige error de ortografía en el README"

# 7. Sube la rama a TU fork
git push -u origin fix/typo-readme

# 8. 🌐 En GitHub: "Compare & pull request" hacia autor/proyecto → "Create pull request"
```

Después del merge, sincroniza tu fork con `git fetch upstream` y `git merge upstream/main`, y borra la rama con `git branch -d fix/typo-readme`.

---

## ➕ Cómo agregar un nuevo ejemplo

Los ejemplos están en el arreglo `ejemplos` de `ejemplos.js`. Para agregar uno, añade un objeto al final del arreglo:

```js
{
  id: "mi-ejemplo",                  // se usa en la URL: ejemplos.html#mi-ejemplo
  titulo: "12. Título del ejemplo",
  intro: "Explicación breve de la situación.",
  pasos: [
    { tipo: "cmd", titulo: "Paso en la terminal",
      cmd: "git status",             // comandos (usa \n para varias líneas)
      explica: "Qué hace el comando.",
      salida: "Lo que se ve en la terminal" },   // opcional
    { tipo: "web", titulo: "Paso en GitHub",
      lista: ["Acción 1", "Acción 2"] }          // admite HTML
  ],
  resumen: "git status"
}
```

Aparecerá automáticamente en el selector de la página.

---

## 🕒 Historial del proyecto

| Commit | Cambio |
|---|---|
| `7f3d4b7` | Proyecto base |
| `696979e` | Se modifica el título y se separa el CSS en `styles.css` |
| `d6e9eaf` | Actualización de información y diseños |
| `24faaa5` | Se agrega el ejemplo de `git stash` |
| `a875e2e` | Se agrega el ejemplo de fork |

---

Guía de ramas con Git y GitHub · Fullstack
