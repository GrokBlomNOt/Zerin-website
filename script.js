function ganti() {
    
    document.getElementById("judul").innerText =
    "🔥 selamat datang di ZerinWebsite !";
}

function toggleMenu() {
    const menu =
    document.getElementById("menu");
    menu.classList.toggle("show");
}

/* LOADING SCREEN */
window.addEventListener("load", function ()
{
    setTimeout(() => {
        const loading =
document.getElementById("loading-screen");
        loading.classList.add("hide");

        setTimeout(() => {
            loading.style.display = "none";
        }, 500);
    }, 2000);
});

function ganti() {
    document.getElementById("judul").innerText =
    "🔥 selamat datang di ZerinWebsite !";
}

function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

/* LOADING SCREEN */
window.addEventListener("load", function () {
    setTimeout(() => {
        const loading = document.getElementById("loading-screen");
        loading.classList.add("hide");

        setTimeout(() => {
            loading.style.display = "none";
        }, 500);
    }, 2000);

    /* ===== THEME LOAD ===== */
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
    }

    updateThemeIcon();
});

/* TOGGLE THEME */
function toggleTheme() {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    updateThemeIcon();
}

/* UPDATE ICON MENU */
function updateThemeIcon() {
    const items = document.querySelectorAll("#menu li a");

    const themeBtn = items[items.length - 1];

    if (!themeBtn) return;

    const isLight = document.body.classList.contains("light");

    themeBtn.textContent = isLight ? "☀️ Theme" : "🌙 Theme";
}

function login() {
    alert("Login button diklik 🚀");
}