let menuVisible = false;
//FUNCION QUE OCULTA O MUESTRA EL MENU
function mostrarOcultarMenu() {

    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }

}

function seleccionar() {
//OCULTO EL MENU AL SELECCIONAR UNA OPCION
    document.getElementById("nav").classList ="";
    menuVisible = false;

}

function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("sass");
        habilidades[3].classList.add("bootstrap");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajoequipo");
        habilidades[6].classList.add("ingles");
        habilidades[7].classList.add("dedicacion");
    }
}
//FUNCION QUE APLICA ANIMACIONES A SKILLS
window.onscroll = function(){
    efectoHabilidades();
}

    