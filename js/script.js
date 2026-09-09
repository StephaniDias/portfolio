const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const btnAbrirMenuMobile = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#menu-mobile');

btnAbrirMenuMobile.addEventListener('click', ()=> {
    menuMobile.classList.add('abrir-menu');
})

menuMobile.addEventListener('click', ()=> {
    menuMobile.classList.remove('abrir-menu');
})

const btnPt = document.getElementById("idioma-port");
const btnEn = document.getElementById("idioma-en");

if (btnPt && btnEn) {

    btnEn.addEventListener("click", () => {
        // Só muda se NÃO estiver no inglês
        if (!window.location.pathname.includes("/en")) {
            window.location.href = new URL("en/index.html", window.location.href).href;;
        }
    });

    btnPt.addEventListener("click", () => {
        // Só muda se estiver no inglês
        if (window.location.pathname.includes("/en")) {
            window.location.href = new URL("../index.html", window.location.href).href;;
        }
    });

}
// ação do botão de tema claro/escuro

const btnTema = document.getElementById("btn-tema");

function aplicarIconeTema(){
    const iconeTema = btnTema.querySelector("i");
    const claro = document.documentElement.getAttribute("data-tema") === "claro";
    iconeTema.className = claro ? "ri-sun-line" : "ri-moon-line";
}

if (btnTema) {

    aplicarIconeTema();

    btnTema.addEventListener("click", () => {
        const claro = document.documentElement.getAttribute("data-tema") === "claro";

        if (claro) {
            document.documentElement.removeAttribute("data-tema");
            localStorage.setItem("tema", "escuro");
        } else {
            document.documentElement.setAttribute("data-tema", "claro");
            localStorage.setItem("tema", "claro");
        }

        aplicarIconeTema();
    });
}

// ação do formulário

document.getElementById("formContato").addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let celular = document.getElementById("celular").value;
    let mensagem = document.getElementById("mensagem").value;

    let texto = `Olá, me chamo ${nome}.
Email: ${email}
Celular: ${celular}
Mensagem: ${mensagem}`;

    let numero = "5511973999086";

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

});
