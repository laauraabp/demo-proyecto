
/*function loginAnimation() {
    document.getElementById("login-circle-display-none").style.display = "grid";
    document.getElementById("input-text-usuario").style.display = "none";
    document.getElementById("h1").style.top = "-5vh";
}*/

function loginAnimation() {
    document.getElementById("login-circle").classList.add("fade-in-opacity");
    document.getElementById("input-text-usuario").classList.add("display-none");
    document.getElementById("h1").classList.add("fade-in-top");
    document.getElementById("button-cambiar-usuario").classList.add("fade-in-opacity");
    /*document.getElementById("input-text-password").classList.add("fade-in-top");*/



}
