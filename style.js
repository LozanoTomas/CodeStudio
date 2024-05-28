/*function irArriba(pxPanttalla){
    window.addEventListener("scroll", () => {
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var botonarriba = document.getElementById("botonarriba");

        if(scroll > pxPanttalla){
            botonarriba.style.right = 20 + "px";
        } else {
            botonarriba.style.right = -100 + "px";
        }
    })
}

irArriba(700);