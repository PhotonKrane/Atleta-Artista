function seeConquest() {
    const name_conquest = document.getElementById("title_conq");
    const conquistas = document.getElementById("conquistas");
    
    if (conquistas.style.visibility === "hidden" || conquistas.style.visibility === "") {
        name_conquest.innerText = "Ocultar Conquistas";
        conquistas.style.visibility = "visible";
    } else {
        name_conquest.innerText = "Mostrar Conquistas";
        conquistas.style.visibility = "hidden";
    }
}

function seeCuriosidades() {
    const name_curiosidades = document.getElementById("title_cur");
    const cur = document.getElementById("cur");

    if (cur.style.visibility === "hidden" || cur.style.visibility === "") {
        name_curiosidades.innerText = "Ocultar Curiosidades";
        cur.style.visibility = "visible";
    } else {
        name_curiosidades.innerText = "Mostrar Curiosidades";
        cur.style.visibility = "hidden";
    }
}