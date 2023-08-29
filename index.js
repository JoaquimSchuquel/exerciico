function TrocaEmoji(e){
    var obj = document.getElementById("emoji");
    if (e == 1) {
        obj.setAttribute("class", "e1");
    }else if(e == 2){
obj.setAttribute("class", "e2");

    }else if(e == 3){
        obj.setAttribute("class","e3")
    }
}
function removeEmoji() {
    var obj = documemnt.getElementById("emoji")
    obj.removeAttribute("class")
}
function verificar() {
    var obj = document.getElementById("emoji")
    if (obj.hasAttribute("class")) {
        alert("atributo class está na tag")
    }else{
        alert("Sem atributo class")
    }
}